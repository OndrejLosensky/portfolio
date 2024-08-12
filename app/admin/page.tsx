"use client";

import React, { useState } from 'react';
import ContentTab from '../admin/_tabs/ContentTab'; 
import CollectionsTab from '../admin/_tabs/CollectionsTab'; 
import ProjectsTab from './_tabs/ProjectsTab';
import NavigationTab from './_tabs/NavigationTab';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CiGlobe } from 'react-icons/ci';

const AdminPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'content' | 'collections' | 'projects'| 'navigation' >('content');

  return (
    <div className="flex min-h-screen">
      <div className="w-1/6 bg-gray-800 text-white flex flex-col justify-between p-6">
        <nav className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold mb-6">Menu</h2>
          <button
            onClick={() => setActiveTab('content')}
            className={`p-3 rounded-md text-left ${activeTab === 'content' ? 'bg-gray-700' : 'bg-gray-600'} hover:bg-gray-700`}
          >
            Obsah
          </button>
          <button
            onClick={() => setActiveTab('collections')}
            className={`p-3 rounded-md text-left ${activeTab === 'collections' ? 'bg-gray-700' : 'bg-gray-600'} hover:bg-gray-700`}
          >
            Datové sady
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`p-3 rounded-md text-left ${activeTab === 'projects' ? 'bg-gray-700' : 'bg-gray-600'} hover:bg-gray-700`}
          >
            Projekty
          </button>

          <button
            onClick={() => setActiveTab('navigation')}
            className={`p-3 rounded-md text-left ${activeTab === 'navigation' ? 'bg-gray-700' : 'bg-gray-600'} hover:bg-gray-700`}
          >
            Navigace
          </button>
        </nav>
        <Button className="active:scale-90 dark:hover:bg-bermuda-500 duration-300">
            <Link href="/" className="flex flex-row items-center gap-x-2"> 
              <CiGlobe className="w-5 h-5"/> 
              <span>Zpět na web</span>
            </Link>
        </Button>
      </div>

      <div className="flex-1 p-10 bg-gray-100 dark:bg-gray-700">
        {activeTab === 'content' && <ContentTab />}
        {activeTab === 'collections' && <CollectionsTab />}
        {activeTab === 'projects' && <ProjectsTab />}
        {activeTab === 'navigation' && <NavigationTab />}
      </div>
    </div>
  );
};

export default AdminPage;
