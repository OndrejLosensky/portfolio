import React, { useState, useEffect, ChangeEvent } from "react";
import { useLanguage } from "@/context/language-context";
import { db, doc, getDoc, setDoc } from "../../../firebaseConfig";

type Project = {
  title: string;
  prompts: string[];
};

type Texts = {
  [key: string]: string | string[] | Project[];
};

const ProjectsTab: React.FC = () => {
  const { language } = useLanguage();
  const [texts, setTexts] = useState<Texts>({});
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null);
  const [newPrompt, setNewPrompt] = useState<string>("");
  const [newProjectTitle, setNewProjectTitle] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "texts", language);
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        setTexts(snapshot.data() as Texts);
      } else {
        setTexts({});
      }
    };

    fetchData();
  }, [language]);

  const handleProjectSelect = (index: number) => {
    setSelectedProjectIndex(index);
  };

  const handlePromptChange = (index: number, value: string) => {
    if (selectedProjectIndex !== null) {
      const updatedProjects = [...(texts.projectData as Project[])];
      updatedProjects[selectedProjectIndex].prompts[index] = value;
      setTexts({ ...texts, projectData: updatedProjects });
    }
  };

  const handleAddPrompt = () => {
    if (newPrompt && selectedProjectIndex !== null) {
      const updatedProjects = [...(texts.projectData as Project[])];
      updatedProjects[selectedProjectIndex].prompts.push(newPrompt);
      setTexts({ ...texts, projectData: updatedProjects });
      setNewPrompt("");
    }
  };

  const handleRemovePrompt = (index: number) => {
    if (selectedProjectIndex !== null) {
      const updatedProjects = [...(texts.projectData as Project[])];
      updatedProjects[selectedProjectIndex].prompts.splice(index, 1);
      setTexts({ ...texts, projectData: updatedProjects });
    }
  };

  const handleAddProject = () => {
    if (newProjectTitle) {
      const updatedProjects = [
        ...(texts.projectData as Project[]),
        { title: newProjectTitle, prompts: [] },
      ];
      setTexts({ ...texts, projectData: updatedProjects });
      setNewProjectTitle("");
    }
  };

  const handleRemoveProject = () => {
    if (selectedProjectIndex !== null) {
      const updatedProjects = [...(texts.projectData as Project[])];
      updatedProjects.splice(selectedProjectIndex, 1);
      setTexts({ ...texts, projectData: updatedProjects });
      setSelectedProjectIndex(null);
    }
  };

  const handleSave = async () => {
    await setDoc(doc(db, "texts", language), texts);
  };

  return (
    <div>
      <h2 className="text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-8">
        Správa Projektů
      </h2>

      <div className="mb-6">
        <label
          htmlFor="project-select"
          className="block text-xl font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Vyber Projekt
        </label>
        <select
          id="project-select"
          value={selectedProjectIndex !== null ? selectedProjectIndex : ""}
          onChange={(e) => handleProjectSelect(parseInt(e.target.value))}
          className="block w-full p-3 border dark:bg-gray-600 bg-gray-300 border-gray-300 rounded-md shadow-sm"
        >
          <option value="">-- Vyber --</option>
          {((texts.projectData as Project[]) || []).map((project, index) => (
            <option key={index} value={index}>
              {project.title}
            </option>
          ))}
        </select>
      </div>

      {selectedProjectIndex !== null && (
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
            Editace Projektu:{" "}
            {(texts.projectData as Project[])[selectedProjectIndex].title}
          </h3>

          {(texts.projectData as Project[])[selectedProjectIndex].prompts.map(
            (prompt, index) => (
              <div key={index} className="flex items-center space-x-4 mb-4">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => handlePromptChange(index, e.target.value)}
                  className="flex-1 p-3 border border-gray-300 dark:bg-gray-600 bg-gray-300 rounded-md shadow-sm"
                />
                <button
                  onClick={() => handleRemovePrompt(index)}
                  className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md shadow-sm hover:bg-red-700 focus:outline-none"
                >
                  Odstranit
                </button>
              </div>
            )
          )}

          <div className="mt-6">
            <input
              type="text"
              value={newPrompt}
              onChange={(e) => setNewPrompt(e.target.value)}
              placeholder="Nový Prompt"
              className="w-full p-3 border border-gray-300 dark:bg-gray-600 bg-gray-300 rounded-md shadow-sm"
            />
            <button
              onClick={handleAddPrompt}
              className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none"
            >
              Přidat Prompt
            </button>
          </div>

          <button
            onClick={handleRemoveProject}
            className="mt-8 px-4 py-2 bg-red-600 text-white font-semibold rounded-md shadow-sm hover:bg-red-700 focus:outline-none"
          >
            Odstranit Projekt
          </button>
        </div>
      )}

      <div className="mt-6">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
          Přidat Nový Projekt
        </h3>
        <input
          type="text"
          value={newProjectTitle}
          onChange={(e) => setNewProjectTitle(e.target.value)}
          placeholder="Název Projektu"
          className="w-full p-3 border border-gray-300 dark:bg-gray-600 bg-gray-300 rounded-md shadow-sm"
        />
        <button
          onClick={handleAddProject}
          className="mt-4 px-4 py-2 bg-green-600 text-white font-semibold rounded-md shadow-sm hover:bg-green-700 focus:outline-none"
        >
          Přidat Projekt
        </button>
      </div>

      <button
        onClick={handleSave}
        className="mt-8 px-4 py-2 bg-green-600 text-white font-semibold rounded-md shadow-sm hover:bg-green-700 focus:outline-none"
      >
        Uložit Změny
      </button>
    </div>
  );
};

export default ProjectsTab;
