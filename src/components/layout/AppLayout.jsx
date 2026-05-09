// import React, { useState } from 'react';
// import Sidebar from './Sidebar';
// import TopBar from './TopBar';

// export default function AppLayout({ children }) {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="h-screen overflow-hidden bg-[#0b0f19] text-white">
//       <div className="flex h-full overflow-hidden">
//         <Sidebar
//           isOpen={sidebarOpen}
//           onToggle={() => setSidebarOpen(!sidebarOpen)}
//         />

//         {sidebarOpen && (
//           <button
//             aria-label="Close sidebar"
//             className="fixed inset-0 z-30 bg-black/40 lg:hidden"
//             onClick={() => setSidebarOpen(false)}
//           />
//         )}

//         <div className="flex h-full min-w-0 flex-1 flex-col overflow-hidden bg-[#0b0f19]">
//           <TopBar onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />

//           <main className="min-h-0 flex-1 overflow-hidden">
//             {children}
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

export default function AppLayout({ children, onNewChat = () => {} }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#0b0f19] text-white">
      <Sidebar
        isOpen={isSidebarOpen}
        onToggle={handleSidebarToggle}
        onNewChat={onNewChat}
      />

      <main className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <TopBar onMenuToggle={handleSidebarToggle} />

        <div className="min-h-0 flex-1 overflow-hidden">
          {children}
        </div>
      </main>
    </div>
  );
}