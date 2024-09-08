"use client";

import React, { useState } from "react";
import ContentTab from "../admin/_tabs/ContentTab";
import ProjectsTab from "./_tabs/ProjectsTab";
import NavigationTab from "./_tabs/NavigationTab";
import WorkExpirienceTab from "./_tabs/WorkExpirienceTab";
import ChatbotTab from "./_tabs/ChatbotTab";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CiGlobe, CiFolderOn, CiGrid41, CiBookmark, CiViewList } from "react-icons/ci"; 
import { MdDataArray } from "react-icons/md";
import { TbMessageChatbot } from "react-icons/tb";

const AdminPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "content" | "projects" | "navigation" | "work-expirience" | "chatbot"
  >("content");

  return (
    <div className="flex max-h-screen">
      {/* Sidebar */}
      <div className="min-w-24 w-[10%] lg:w-[15%] sticky top-0  bg-gray-800 text-white flex flex-col justify-between p-4">
        <nav className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold mb-2 font-mono hidden lg:block">Menu</h2>
          {/* Content Button */}
          <button
            onClick={() => setActiveTab("content")}
            className={`p-3 rounded-md text-left flex items-center justify-center lg:justify-start ${
              activeTab === "content"
                ? "text-bermuda-600 bg-bermuda-200"
                : "bg-gray-600"
            } hover:bg-bermuda-300 hover:text-bermuda-600`}
          >
            <CiGrid41 className="w-5 h-5" />
            <span className="ml-2 hidden lg:block">Obsah</span>
          </button>

          {/* Projects Button */}
          <button
            onClick={() => setActiveTab("projects")}
            className={`p-3 rounded-md text-left flex items-center justify-center lg:justify-start ${
              activeTab === "projects"
                ? "text-bermuda-600 bg-bermuda-200"
                : "bg-gray-600"
            } hover:bg-bermuda-300 hover:text-bermuda-600`}
          >
            <CiFolderOn className="w-5 h-5" />
            <span className="ml-2 hidden lg:block">Projekty</span>
          </button>

          {/* Navigation Button */}
          <button
            onClick={() => setActiveTab("navigation")}
            className={`p-3 rounded-md text-left flex items-center justify-center lg:justify-start ${
              activeTab === "navigation"
                ? "text-bermuda-600 bg-bermuda-200"
                : "bg-gray-600"
            } hover:bg-bermuda-300 hover:text-bermuda-600`}
          >
            <CiBookmark className="w-5 h-5" />
            <span className="ml-2 hidden lg:block">Odkazy</span>
          </button>

          {/* Work Experience Button */}
          <button
            onClick={() => setActiveTab("work-expirience")}
            className={`p-3 rounded-md text-left flex items-center justify-center lg:justify-start ${
              activeTab === "work-expirience"
                ? "text-bermuda-600 bg-bermuda-200"
                : "bg-gray-600"
            } hover:bg-bermuda-300 hover:text-bermuda-600`}
          >
            <CiViewList className="w-5 h-5" />
            <span className="ml-2 hidden lg:block">Pracovní zkušenosti</span>
          </button>

          <button
            onClick={() => setActiveTab("chatbot")}
            className={`p-3 rounded-md text-left flex items-center justify-center lg:justify-start ${
              activeTab === "work-expirience"
                ? "text-bermuda-600 bg-bermuda-200"
                : "bg-gray-600"
            } hover:bg-bermuda-300 hover:text-bermuda-600`}
          >
            <TbMessageChatbot className="w-5 h-5" />
            <span className="ml-2 hidden lg:block">Chatbot</span>
          </button>

          <button
            onClick={() => setActiveTab("work-expirience")}
            className={`p-3 rounded-md text-left flex items-center justify-center lg:justify-start ${
              activeTab === "work-expirience"
                ? "text-bermuda-600 bg-bermuda-200"
                : "bg-gray-600"
            } hover:bg-bermuda-300 hover:text-bermuda-600`}
          >
            <MdDataArray className="w-5 h-5" />
            <span className="ml-2 hidden lg:block">Ostatní</span>
          </button>
        </nav>

        {/* Button for Going Back to Website */}
        <Button className="active:scale-90 dark:hover:bg-bermuda-500 duration-300">
          <Link href="/" className="flex flex-row items-center justify-center md:justify-start gap-x-2">
            <CiGlobe className="w-5 h-5" />
            <span className="hidden lg:block">Zpět na web</span>
          </Link>
        </Button>
      </div>

      {/* Main Content Area */}
      <div className="h-screen overflow-auto flex-1 p-10">
        {activeTab === "content" && <ContentTab />}
        {activeTab === "projects" && <ProjectsTab />}
        {activeTab === "navigation" && <NavigationTab />}
        {activeTab === "work-expirience" && <WorkExpirienceTab />}
        {activeTab === "chatbot" && <ChatbotTab />}
      </div>
    </div>
  );
};

export default AdminPage;
