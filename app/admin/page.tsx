"use client";

import React, { useState } from "react";
import ContentTab from "../admin/_tabs/ContentTab";
import ProjectsTab from "./_tabs/ProjectsTab";
import NavigationTab from "./_tabs/NavigationTab";
import WorkExpirienceTab from "./_tabs/WorkExpirienceTab";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CiGlobe } from "react-icons/ci";

const AdminPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "content" | "projects" | "navigation" | "work-expirience"
  >("content");

  return (
    <div className="flex max-h-screen">
      <div className="w-1/6 m-4 sticky top-0 rounded-lg border dark:border-gray-200/50 border-gray-600/60 bg-gray-800 text-white flex flex-col justify-between p-4">
        <nav className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold mb-2 font-mono">Menu</h2>
          <button
            onClick={() => setActiveTab("content")}
            className={`p-3 rounded-md text-left ${
              activeTab === "content"
                ? "text-bermuda-600 bg-bermuda-200"
                : "bg-gray-600"
            } hover:bg-bermuda-300 hover:text-bermuda-600`}
          >
            Obsah
          </button>
          <button
            onClick={() => setActiveTab("projects")}
            className={`p-3 rounded-md text-left ${
              activeTab === "projects"
                ? "text-bermuda-600 bg-bermuda-200"
                : "bg-gray-600"
            } hover:bg-bermuda-300 hover:text-bermuda-600`}
          >
            Projekty
          </button>
          <button
            onClick={() => setActiveTab("navigation")}
            className={`p-3 rounded-md text-left ${
              activeTab === "navigation"
                ? "text-bermuda-600 bg-bermuda-200"
                : "bg-gray-600"
            } hover:bg-bermuda-300 hover:text-bermuda-600`}
          >
            Odkazy
          </button>
          <button
            onClick={() => setActiveTab("work-expirience")}
            className={`p-3 rounded-md text-left ${
              activeTab === "work-expirience"
                ? "text-bermuda-600 bg-bermuda-200"
                : "bg-gray-600"
            } hover:bg-bermuda-300 hover:text-bermuda-600`}
          >
            Pracovní zkušenosti
          </button>
        </nav>
        <Button className="active:scale-90 dark:hover:bg-bermuda-500 duration-300">
          <Link href="/" className="flex flex-row items-center gap-x-2">
            <CiGlobe className="w-5 h-5" />
            <span>Zpět na web</span>
          </Link>
        </Button>
      </div>

      <div className="h-screen overflow-auto flex-1 p-10">
        {activeTab === "content" && <ContentTab />}
        {activeTab === "projects" && <ProjectsTab />}
        {activeTab === "navigation" && <NavigationTab />}
        {activeTab === "work-expirience" && <WorkExpirienceTab />}
      </div>
    </div>
  );
};

export default AdminPage;
