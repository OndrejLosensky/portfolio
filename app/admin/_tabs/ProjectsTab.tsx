import React, { useState, useEffect, ChangeEvent } from "react";
import { db, doc, getDoc, setDoc } from "../../../firebaseConfig";
import { useLanguage } from "@/context/language-context";
import { FiEdit3 } from "react-icons/fi"; 

type Project = {
  title: string;
  year: string;
  link: string;
  github: string;
  image: string;
  description: string;
  tags: string[];
};

const defaultProject: Project = {
  title: "",
  year: "",
  link: "",
  github: "",
  image: "",
  description: "",
  tags: [],
};

const ProjectsTab: React.FC = () => {
  const { language } = useLanguage();
  const [mainProjects, setMainProjects] = useState<Project[]>([]);
  const [sideProjects, setSideProjects] = useState<Project[]>([]);
  const [newProject, setNewProject] = useState<Project>(defaultProject);
  const [isMainProject, setIsMainProject] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<"view" | "add">("view");
  const [editProject, setEditProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const docRef = doc(db, "projects", language);
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        const data = snapshot.data();
        setMainProjects(data.main_projects || []);
        setSideProjects(data.side_projects || []);
      } else {
        setMainProjects([]);
        setSideProjects([]);
      }
    };

    fetchProjects();
  }, [language]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleTagsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const tags = e.target.value.split(",").map((tag) => tag.trim());
    setNewProject({ ...newProject, tags });
  };

  const handleSaveProject = async () => {
    const updatedProjects = isMainProject
      ? [...mainProjects, newProject]
      : [...sideProjects, newProject];

    const projectData = {
      main_projects: isMainProject ? updatedProjects : mainProjects,
      side_projects: isMainProject ? sideProjects : updatedProjects,
    };

    await setDoc(doc(db, "projects", language), projectData);
    setNewProject(defaultProject);
    setActiveTab("view");
  };

  const handleEditClick = (project: Project, isMain: boolean) => {
    setNewProject(project);
    setIsMainProject(isMain);
    setActiveTab("add");
  };

  return (
    <div>
      <h2 className="text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
        Projects
      </h2>

      {/* Tabs Navigation */}
      <div className="flex border-b border-gray-300/20 mb-4">
        <button
          onClick={() => setActiveTab("view")}
          className={`${
            activeTab === "view"
              ? "border-b border-blue-500 text-blue-500"
              : "border-0"
          } p-4 font-semibold`}
        >
          View Projects
        </button>
        <button
          onClick={() => {
            setActiveTab("add");
            setNewProject(defaultProject);
          }}
          className={`${
            activeTab === "add"
              ? "border-b border-blue-500 text-blue-500"
              : "border-0 "
          } p-4  font-semibold`}
        >
          Add New Project
        </button>
      </div>

      {/* View Projects Tab */}
      {activeTab === "view" && (
        <div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Main Projects
            </h3>
            <ul>
              {mainProjects.map((project, index) => (
                <li
                  key={index}
                  className="p-4 bg-gray-100 dark:bg-gray-700 rounded-md mb-2 flex justify-between items-center"
                >
                  <div>
                    <strong>{project.title}</strong> - {project.year}
                  </div>
                  <button
                    onClick={() => handleEditClick(project, true)}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-600"
                  >
                    <FiEdit3 className="inline w-5 h-5" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Side Projects
            </h3>
            <ul>
              {sideProjects.map((project, index) => (
                <li
                  key={index}
                  className="p-4 bg-gray-100 dark:bg-gray-700 rounded-md mb-2 flex justify-between items-center"
                >
                  <div>
                    <strong>{project.title}</strong> - {project.year}
                  </div>
                  <button
                    onClick={() => handleEditClick(project, false)}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-600"
                  >
                    <FiEdit3 className="inline w-5 h-5" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Add or Edit Projects Tab */}
      {activeTab === "add" && (
        <div className="mb-4">
          <label className="text-sm md:text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
            {editProject ? "Edit Project" : "Add New Project"}
          </label>

          {/* Input fields for project */}
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name="title"
              value={newProject.title}
              onChange={handleInputChange}
              placeholder="Project Title"
              className="p-2 md:p-3 border border-gray-300 dark:bg-gray-600 bg-gray-300 rounded-md shadow-sm"
            />
            <input
              type="text"
              name="year"
              value={newProject.year}
              onChange={handleInputChange}
              placeholder="Year"
              className="p-2 md:p-3 border border-gray-300 dark:bg-gray-600 bg-gray-300 rounded-md shadow-sm"
            />
            <input
              type="text"
              name="link"
              value={newProject.link}
              onChange={handleInputChange}
              placeholder="Project Link"
              className="p-2 md:p-3 border border-gray-300 dark:bg-gray-600 bg-gray-300 rounded-md shadow-sm"
            />
            <input
              type="text"
              name="github"
              value={newProject.github}
              onChange={handleInputChange}
              placeholder="GitHub Link"
              className="p-2 md:p-3 border border-gray-300 dark:bg-gray-600 bg-gray-300 rounded-md shadow-sm"
            />
            <input
              type="text"
              name="image"
              value={newProject.image}
              onChange={handleInputChange}
              placeholder="Image URL"
              className="p-2 md:p-3 border border-gray-300 dark:bg-gray-600 bg-gray-300 rounded-md shadow-sm"
            />
            <textarea
              name="description"
              value={newProject.description}
              onChange={handleInputChange}
              placeholder="Project Description"
              rows={3}
              className="p-3 border border-gray-300 dark:bg-gray-600 bg-gray-300 rounded-md shadow-sm"
            />
            <input
              type="text"
              value={newProject.tags.join(", ")}
              onChange={handleTagsChange}
              placeholder="Tags (comma-separated)"
              className="p-2 md:p-3 border border-gray-300 dark:bg-gray-600 bg-gray-300 rounded-md shadow-sm"
            />
          </div>

          {/* Toggle between main and side projects */}
          <div className="flex space-x-4 my-4">
            <button
              onClick={() => setIsMainProject(true)}
              className={`${
                isMainProject
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 dark:bg-gray-600"
              } px-4 py-2 rounded-md`}
            >
              Main Project
            </button>
            <button
              onClick={() => setIsMainProject(false)}
              className={`${
                !isMainProject
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 dark:bg-gray-600"
              } px-4 py-2 rounded-md`}
            >
              Side Project
            </button>
          </div>

          <button
            onClick={handleSaveProject}
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700"
          >
            {editProject ? "Update Project" : "Save Project"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectsTab;
