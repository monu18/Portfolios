import React, { ReactNode, useState } from 'react';


type Tab = {
  label: string;
  content: ReactNode;
};

type TabsSelectViewProps = {
  tabs: Tab[];
};

// export default function TabsSelectView({ tabs }:TabsSelectViewProps) {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <div className="max-w-370 h-400 w-full">
//       <div className="inline-flex border-2 border-black-600 rounded-t overflow-hidden">
//         {tabs.map((tab, idx) => (
//           <button
//             key={idx}
//             onClick={() => setActiveIndex(idx)}
//             className={`px-4 py-2 text-xl focus:outline-none transition ` +
//               (activeIndex === idx
//                 ? 'bg-gray-100 text-black border-b-2 font-semibold'
//                 : 'bg-white text-black hover:bg-green-50')
//             }
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>
//       <div className='border border-1 border-gray-50 p-8'>
//         {tabs[activeIndex] && tabs[activeIndex].content}
//       </div>
//     </div>
//   );
// }


export default function TabsSelectView({ tabs }: TabsSelectViewProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-370">
      {/* ---------- TAB HEADERS ---------- */}
      <div className="flex flex-col sm:flex-row border-2 border-black rounded-t overflow-hidden">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={
              `w-full sm:w-auto px-4 py-3 text-lg sm:text-xl transition focus:outline-none ` +
              (activeIndex === idx
                ? "bg-gray-100 font-semibold"
                : "bg-white hover:bg-green-50")
            }
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ---------- TAB CONTENT ---------- */}
      <div className="border border-gray-100 p-6 sm:p-8">
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
