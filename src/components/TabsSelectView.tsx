import React, { useState } from 'react';

/**
 * TabsSelectView: A simple tabs component with three tabs.
 * Props:
 * - tabs: array of { label: string, content: ReactNode }
 */
export default function TabsSelectView({ tabs }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full">
      <div className="inline-flex border border-gray-300 rounded-t-md overflow-hidden">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`px-4 py-2 text-l font-semibold focus:outline-none transition ` +
              (activeIndex === idx
                ? 'bg-white text-gray-900 border-b-2 border-transparent'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200')
            }
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="border border-t-0 border-gray-300 rounded-b-md p-4">
        {tabs[activeIndex] && tabs[activeIndex].content}
      </div>
    </div>
  );
}

// Usage example:
// import TabsSelectView from './TabsSelectView';
//
// const tabData = [
//   { label: 'Overview', content: <div>Overview content here</div> },
//   { label: 'Details', content: <div>Details content here</div> },
//   { label: 'Settings', content: <div>Settings content here</div> },
// ];
//
// function App() {
//   return <TabsSelectView tabs={tabData} />;
// }
