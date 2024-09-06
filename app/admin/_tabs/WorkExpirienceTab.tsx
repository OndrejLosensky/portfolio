import React, { useState, useEffect, ChangeEvent } from "react";
import { db, doc, getDoc, setDoc } from "../../../firebaseConfig";
import { useLanguage } from "../../../context/language-context";

type WorkExperience = {
  job_name: string;
  position_name: string;
  short_description: string;
  extended_description: string;
  date_from: string;
  date_to: string;
  icon: string;
};

const defaultJob: WorkExperience = {
  job_name: "",
  position_name: "",
  short_description: "",
  extended_description: "",
  date_from: "",
  date_to: "",
  icon: "",
};

const WorkExperienceTab: React.FC = () => {
  const { language } = useLanguage();
  const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>([]);
  const [newJob, setNewJob] = useState<WorkExperience>(defaultJob);

  useEffect(() => {
    const fetchWorkExperiences = async () => {
      const docRef = doc(db, "work-expirience", language);
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        const data = snapshot.data();
        setWorkExperiences(data.jobs || []);
      } else {
        setWorkExperiences([]);
      }
    };

    fetchWorkExperiences();
  }, [language]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewJob({ ...newJob, [name]: value });
  };

  const handleSaveJob = async () => {
    const updatedJobs = [...workExperiences, newJob];

    const workData = {
      jobs: updatedJobs,
    };

    await setDoc(doc(db, "work_experience", language), workData);
    setNewJob(defaultJob); // Reset the form
  };

  return (
    <div>
      <h2 className="text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-8">
        Work Experience
      </h2>

      <div className="mb-4">
        <label className="text-sm md:text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
          Add New Work Experience
        </label>

        {/* Input fields for work experience */}
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="job_name"
            value={newJob.job_name}
            onChange={handleInputChange}
            placeholder="Job Name"
            className="p-2 md:p-3 border border-gray-300 dark:bg-gray-600 bg-gray-300 rounded-md shadow-sm"
          />
          <input
            type="text"
            name="position_name"
            value={newJob.position_name}
            onChange={handleInputChange}
            placeholder="Position Name"
            className="p-2 md:p-3 border border-gray-300 dark:bg-gray-600 bg-gray-300 rounded-md shadow-sm"
          />
          <input
            type="text"
            name="date_from"
            value={newJob.date_from}
            onChange={handleInputChange}
            placeholder="Date From (YYYY-MM)"
            className="p-2 md:p-3 border border-gray-300 dark:bg-gray-600 bg-gray-300 rounded-md shadow-sm"
          />
          <input
            type="text"
            name="date_to"
            value={newJob.date_to}
            onChange={handleInputChange}
            placeholder="Date To (YYYY-MM)"
            className="p-2 md:p-3 border border-gray-300 dark:bg-gray-600 bg-gray-300 rounded-md shadow-sm"
          />
          <input
            type="text"
            name="icon"
            value={newJob.icon}
            onChange={handleInputChange}
            placeholder="Icon URL"
            className="p-2 md:p-3 border border-gray-300 dark:bg-gray-600 bg-gray-300 rounded-md shadow-sm"
          />
          <input
            type="text"
            name="short_description"
            value={newJob.short_description}
            onChange={handleInputChange}
            placeholder="Short Description"
            className="p-2 md:p-3 border border-gray-300 dark:bg-gray-600 bg-gray-300 rounded-md shadow-sm"
          />
          <textarea
            name="extended_description"
            value={newJob.extended_description}
            onChange={handleInputChange}
            placeholder="Extended Description"
            rows={3}
            className="p-3 border border-gray-300 dark:bg-gray-600 bg-gray-300 rounded-md shadow-sm"
          />
        </div>

        <button
          onClick={handleSaveJob}
          className="px-4 py-2 mt-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700"
        >
          Save Work Experience
        </button>
      </div>

      {/* Display current work experiences */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Existing Work Experiences
        </h3>
        <ul>
          {workExperiences.map((job, index) => (
            <li
              key={index}
              className="p-4 bg-gray-100 dark:bg-gray-700 rounded-md mb-2"
            >
              <strong>{job.job_name}</strong> - {job.position_name} (
              {job.date_from} to {job.date_to})<p>{job.short_description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkExperienceTab;
