import React from 'react';

import { useTexts } from '@/context/texts-context';

const CollectionsTab: React.FC = () => {
  const { texts } = useTexts();

  return (
    <div>
      <h2 className="text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-8">Collections Management</h2>
      
      {/* Example array rendering (e.g., tags) */}
      <div className="mb-6">
        <h3 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-4">Tags</h3>
        <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-4 text-xs md:text-sm">            
          {Array.isArray(texts['tags']) ? texts['tags'].map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-black/10 dark:bg-white/10 rounded-md">
              {tag}
            </span>
          )) : texts['tags'].split(',').map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-black/10 dark:bg-white/10 rounded-md">
              {tag.trim()}
            </span>
          ))}
        </div>
      </div>
      
      {/* You can add more sections for different types of arrays, like links, here */}
      
    </div>
  );
};

export default CollectionsTab;
