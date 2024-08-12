"use client";

import React, { useState } from 'react';
import ContentTab from '../admin/_tabs/ContentTab'; 
import CollectionsTab from '../admin/_tabs/CollectionsTab'; 

const AdminPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'content' | 'collections'>('content');

  return (
    <div className="flex min-h-screen">
      {/* Sidebar for Tab Selection */}
      <div className="w-1/6 bg-gray-800 text-white p-6">
        <h2 className="text-3xl font-semibold mb-6">Admin Menu</h2>
        <nav className="flex flex-col gap-4">
          <button
            onClick={() => setActiveTab('content')}
            className={`p-3 rounded-md text-left ${activeTab === 'content' ? 'bg-gray-700' : 'bg-gray-600'} hover:bg-gray-700`}
          >
            Content
          </button>
          <button
            onClick={() => setActiveTab('collections')}
            className={`p-3 rounded-md text-left ${activeTab === 'collections' ? 'bg-gray-700' : 'bg-gray-600'} hover:bg-gray-700`}
          >
            Collections
          </button>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-10 bg-gray-100 dark:bg-gray-700">
        {activeTab === 'content' && <ContentTab />}
        {activeTab === 'collections' && <CollectionsTab />}
      </div>
    </div>
  );
};

export default AdminPage;
