// import React from 'react';
// import clsx from 'clsx';
// import {
//   PencilSquareIcon,
//   MagnifyingGlassIcon,
//   FolderIcon,
//   CodeBracketSquareIcon,
//   EllipsisHorizontalIcon,
//   ViewColumnsIcon,
//   CubeIcon,
//   ChevronRightIcon,
// } from '@heroicons/react/24/outline';

// export default function Sidebar({ isOpen = true, onToggle }) {
//   const item =
//     'group flex h-10 w-full items-center gap-3 rounded-lg px-3 text-[14px] font-medium text-white/85 transition-colors hover:bg-white/8';

//   const icon =
//     'h-[18px] w-[18px] shrink-0 text-white/80 transition-colors group-hover:text-white';

//   return (
//     <aside
//       className={clsx(
//         'fixed inset-y-0 left-0 z-40 h-screen w-70 shrink-0 border-r border-white/8 bg-[#090d16] text-white transition-transform duration-200 ease-out lg:static lg:translate-x-0',
//         isOpen ? 'translate-x-0' : '-translate-x-full'
//       )}
//     >
//       {/* Main sidebar padding wrapper */}
//       <div
//         className="flex h-full min-h-0 flex-col"
//         style={{
//           paddingLeft: '24px',
//           paddingRight: '24px',
//           paddingTop: '22px',
//           paddingBottom: '16px',
//         }}
//       >
//         {/* Header */}
//         <div className="flex h-12 shrink-0 items-center justify-between">
//           <h1 className="text-[28px] font-semibold tracking-[-0.04em] text-white">
//             Jarvice
//           </h1>

//           <button
//             type="button"
//             onClick={onToggle}
//             aria-label="Toggle sidebar"
//             className="grid h-9 w-9 place-items-center rounded-lg text-white/70 transition hover:bg-white/8 hover:text-white"
//           >
//             <ViewColumnsIcon className="h-5 w-5" />
//           </button>
//         </div>

//         {/* Navigation */}
//         <nav className="mt-7 min-h-0 flex-1 overflow-y-auto">
//           <button className={clsx(item, 'bg-white/8 text-white')}>
//             <PencilSquareIcon className={icon} />
//             <span>New chat</span>
//           </button>

//           <div className="mt-2 space-y-1">
//             <button className={item}>
//               <MagnifyingGlassIcon className={icon} />
//               <span>Search chats</span>
//             </button>

//             <button className={item}>
//               <FolderIcon className={icon} />
//               <span>Projects</span>
//             </button>

//             <button className={item}>
//               <CodeBracketSquareIcon className={icon} />
//               <span>Codex</span>
//             </button>

//             <button className={item}>
//               <EllipsisHorizontalIcon className={icon} />
//               <span>More</span>
//             </button>
//           </div>

//           <div className="mt-7 space-y-1">
//             <button className={item}>
//               <CubeIcon className={icon} />
//               <span>Explore GPTs</span>
//             </button>

//             <button className="flex h-10 w-full items-center gap-1 rounded-lg px-3 text-[14px] font-semibold text-white transition hover:bg-white/8">
//               <span>Recents</span>
//               <ChevronRightIcon className="h-3.5 w-3.5 text-white/60" />
//             </button>
//           </div>
//         </nav>

//         {/* Profile */}
//         <div className="shrink-0 pt-4">
//           <button className="flex h-13 w-full items-center gap-3 rounded-md bg-[#171717] px-3 text-left transition hover:bg-[#202020]">
//             <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#14b8a6] text-[12px] font-semibold leading-none text-white">
//               AB
//             </div>

//             <div className="flex min-w-0 flex-col gap-0">
//               <span className="block h-4.25 truncate text-[14px] font-medium leading-4.25 text-white">
//                 Aryan Behera
//               </span>
//               <span className="block h-3.75 truncate text-[13px] font-normal leading-3.75 text-white/70">
//                 Plus
//               </span>
//             </div>
//           </button>
//         </div>
//       </div>
//     </aside>
//   );
// }

// import React from 'react';
// import clsx from 'clsx';
// import {
//   PencilSquareIcon,
//   MagnifyingGlassIcon,
//   FolderIcon,
//   CodeBracketSquareIcon,
//   EllipsisHorizontalIcon,
//   ViewColumnsIcon,
//   CubeIcon,
//   ChevronRightIcon,
// } from '@heroicons/react/24/outline';

// export default function Sidebar({ isOpen = true, onToggle }) {
//   const item =
//     'group flex h-10 w-full items-center gap-3 rounded-lg px-3 text-[14px] font-medium text-white/85 transition-colors hover:bg-white/8';

//   const icon =
//     'h-[18px] w-[18px] shrink-0 text-white/80 transition-colors group-hover:text-white';

//   return (
//     <aside
//       className={clsx(
//         'fixed inset-y-0 left-0 z-40 h-screen w-70 shrink-0 border-r border-white/8 bg-[#090d16] text-white transition-transform duration-200 ease-out lg:static lg:translate-x-0',
//         isOpen ? 'translate-x-0' : '-translate-x-full'
//       )}
//     >
//       {/* Main sidebar padding wrapper */}
//       <div
//         className="flex h-full min-h-0 flex-col"
//         style={{
//           paddingLeft: '24px',
//           paddingRight: '24px',
//           paddingTop: '22px',
//           paddingBottom: '16px',
//         }}
//       >
//         {/* Section 1: Name */}
//         <div className="flex h-12 shrink-0 items-center justify-between">
//           <h1 className="text-[28px] font-semibold tracking-[-0.04em] text-white">
//             Jarvice
//           </h1>

//           <button
//             type="button"
//             onClick={onToggle}
//             aria-label="Toggle sidebar"
//             className="grid h-9 w-9 place-items-center rounded-lg text-white/70 transition hover:bg-white/8 hover:text-white"
//           >
//             <ViewColumnsIcon className="h-5 w-5" />
//           </button>
//         </div>

//         {/* Section 2: Main navigation */}
//         <nav className="mt-7 min-h-0 flex-1 overflow-y-auto">
//           <div className="space-y-1">
//             <button className={clsx(item, 'bg-white/8 text-white')}>
//               <PencilSquareIcon className={icon} />
//               <span>New chat</span>
//             </button>

//             <button className={item}>
//               <MagnifyingGlassIcon className={icon} />
//               <span>Search chats</span>
//             </button>

//             <button className={item}>
//               <FolderIcon className={icon} />
//               <span>Projects</span>
//             </button>

//             <button className={item}>
//               <CodeBracketSquareIcon className={icon} />
//               <span>Codex</span>
//             </button>

//             <button className={item}>
//               <EllipsisHorizontalIcon className={icon} />
//               <span>More</span>
//             </button>

//             <button className={item}>
//               <CubeIcon className={icon} />
//               <span>Explore GPTs</span>
//             </button>
//           </div>

//           {/* Section 3: Recent */}
//           <div className="mt-7">
//             <button className="flex h-10 w-full items-center gap-1 rounded-lg px-3 text-[14px] font-semibold text-white transition hover:bg-white/8">
//               <span>Recents</span>
//               <ChevronRightIcon className="h-3.5 w-3.5 text-white/60" />
//             </button>
//           </div>
//         </nav>

//         {/* Profile */}
//         <div className="shrink-0 pt-4">
//           <button className="flex h-13 w-full items-center gap-3 rounded-md bg-[#171717] px-3 text-left transition hover:bg-[#202020]">
//             <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#14b8a6] text-[12px] font-semibold leading-none text-white">
//               AB
//             </div>

//             <div className="flex min-w-0 flex-col gap-0">
//               <span className="block h-4.25 truncate text-[14px] font-medium leading-4.25 text-white">
//                 Aryan Behera
//               </span>
//               <span className="block h-3.75 truncate text-[13px] font-normal leading-3.75 text-white/70">
//                 Plus
//               </span>
//             </div>
//           </button>
//         </div>
//       </div>
//     </aside>
//   );
// }



// import React from 'react';
// import clsx from 'clsx';
// import {
//   PencilSquareIcon,
//   MagnifyingGlassIcon,
//   FolderIcon,
//   CodeBracketSquareIcon,
//   EllipsisHorizontalIcon,
//   ViewColumnsIcon,
//   CubeIcon,
//   ChevronRightIcon,
// } from '@heroicons/react/24/outline';

// export default function Sidebar({ isOpen = true, onToggle }) {
//   const item =
//     'group flex w-full items-center rounded-lg text-[14px] font-semibold text-white/90 transition hover:bg-white/[0.07]';

//   const icon =
//     'h-4.5 w-4.5 shrink-0 text-white/75 transition group-hover:text-white';

//   const sectionLabel =
//     'text-[11px] font-semibold uppercase tracking-[0.16em] text-white/35';

//   const itemStyle = {
//     height: '34px',
//     paddingLeft: '10px',
//     paddingRight: '10px',
//     gap: '12px',
//   };

//   const labelStyle = {
//     paddingLeft: '10px',
//     marginBottom: '6px',
//   };

//   return (
//     <aside
//       className={clsx(
//         'fixed inset-y-0 left-0 z-40 h-screen w-70 shrink-0 border-r border-white/8 bg-[#090d16] text-white transition-transform duration-200 ease-out lg:static lg:translate-x-0',
//         isOpen ? 'translate-x-0' : '-translate-x-full'
//       )}
//     >
//       <div
//         className="flex h-full min-h-0 flex-col"
//         style={{
//           paddingLeft: '18px',
//           paddingRight: '18px',
//           paddingTop: '24px',
//           paddingBottom: '18px',
//         }}
//       >
//         {/* Brand */}
//         <div
//           className="shrink-0"
//           style={{
//             paddingLeft: '4px',
//             paddingRight: '4px',
//           }}
//         >
//           <div className="flex items-center justify-between">
//             <h1 className="text-[34px] font-semibold leading-none tracking-[-0.055em] text-white">
//               Jarvice
//             </h1>

//             <button
//               type="button"
//               onClick={onToggle}
//               aria-label="Toggle sidebar"
//               className="grid h-9 w-9 place-items-center rounded-xl text-white/70 transition hover:bg-white/[0.07] hover:text-white"
//             >
//               <ViewColumnsIcon className="h-5 w-5" />
//             </button>
//           </div>
//         </div>

//         <nav
//           className="min-h-0 flex-1 overflow-y-auto"
//           style={{
//             marginTop: '20px',
//             paddingRight: '2px',
//           }}
//         >
//           {/* Workspace */}
//           <div>
//             <p className={sectionLabel} style={labelStyle}>
//               Workspace
//             </p>

//             <div
//               className="flex flex-col"
//               style={{
//                 gap: '3px',
//               }}
//             >
//               <button className={clsx(item, 'bg-white/[0.07] text-white')} style={itemStyle}>
//                 <PencilSquareIcon className={icon} />
//                 <span>New chat</span>
//               </button>

//               <button className={item} style={itemStyle}>
//                 <MagnifyingGlassIcon className={icon} />
//                 <span>Search chats</span>
//               </button>

//               <button className={item} style={itemStyle}>
//                 <FolderIcon className={icon} />
//                 <span>Projects</span>
//               </button>

//               <button className={item} style={itemStyle}>
//                 <CodeBracketSquareIcon className={icon} />
//                 <span>Codex</span>
//               </button>


//               <button className={item} style={itemStyle}>
//                 <CubeIcon className={icon} />
//                 <span>Explore GPTs</span>
//               </button>

//               <button className={item} style={itemStyle}>
//                 <EllipsisHorizontalIcon className={icon} />
//                 <span>More</span>
//               </button>

//           </div>
//           </div>

//           {/* History */}
//           <div
//             style={{
//               marginTop: '18px',
//             }}
//           >
//             <button
//               className="group flex w-full items-center rounded-lg text-[14px] font-semibold text-white transition hover:bg-white/[0.07]"
//               style={{
//                 height: '34px',
//                 paddingLeft: '10px',
//                 paddingRight: '10px',
//                 gap: '2px',
//               }}
//             >
//               <span>Recents</span>
//               <ChevronRightIcon className="h-3.5 w-3.5 text-white/55 transition group-hover:text-white/80" />
//             </button>
//           </div>
//         </nav>

//         {/* Profile */}
//         <div className="shrink-0" style={{ paddingTop: '14px' }}>
//           <button
//             className="flex w-full items-center rounded-xl text-left transition hover:bg-white/[0.07]"
//             style={{
//               height: '52px',
//               paddingLeft: '10px',
//               paddingRight: '10px',
//               gap: '12px',
//             }}
//           >
//             <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#14b8a6] text-[12px] font-bold leading-none text-white">
//               AB
//             </div>

//             <div className="flex min-w-0 flex-col">
//               <span className="truncate text-[14px] font-semibold leading-4.5 text-white">
//                 Aryan Behera
//               </span>
//               <span className="truncate text-[13px] font-normal leading-4.25 text-white/65">
//                 Plus
//               </span>
//             </div>
//           </button>
//         </div>
//       </div>
//     </aside>
//   );
// }

import React from 'react';
import clsx from 'clsx';
import {
  PencilSquareIcon,
  MagnifyingGlassIcon,
  FolderIcon,
  CodeBracketSquareIcon,
  EllipsisHorizontalIcon,
  ViewColumnsIcon,
  CubeIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

export default function Sidebar({
  isOpen = true,
  onToggle,
  onNewChat = () => {},
}) {
  const item =
    'group flex w-full items-center rounded-lg text-[14px] font-semibold text-white/90 transition hover:bg-white/[0.07]';

  const icon =
    'h-[18px] w-[18px] shrink-0 text-white/75 transition group-hover:text-white';

  const sectionLabel =
    'text-[11px] font-semibold uppercase tracking-[0.16em] text-white/35';

  const itemStyle = {
    height: '34px',
    paddingLeft: '10px',
    paddingRight: '10px',
    gap: '12px',
  };

  const labelStyle = {
    paddingLeft: '10px',
    marginBottom: '6px',
  };

  return (
    <aside
      className={clsx(
        'fixed inset-y-0 left-0 z-40 h-screen w-70 shrink-0 border-r border-white/8 bg-[#090d16] text-white transition-transform duration-200 ease-out lg:static lg:translate-x-0',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      )}
    >
      <div
        className="flex h-full min-h-0 flex-col"
        style={{
          paddingLeft: '18px',
          paddingRight: '18px',
          paddingTop: '24px',
          paddingBottom: '18px',
        }}
      >
        {/* Brand */}
        <div
          className="shrink-0"
          style={{
            paddingLeft: '4px',
            paddingRight: '4px',
          }}
        >
          <div className="flex items-center justify-between">
            <h1 className="text-[34px] font-semibold leading-none tracking-[-0.055em] text-white">
              Jarvice
            </h1>

            <button
              type="button"
              onClick={onToggle}
              aria-label="Toggle sidebar"
              className="grid h-9 w-9 place-items-center rounded-xl text-white/70 transition hover:bg-white/[0.07] hover:text-white"
            >
              <ViewColumnsIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        <nav
          className="min-h-0 flex-1 overflow-y-auto"
          style={{
            marginTop: '20px',
            paddingRight: '2px',
          }}
        >
          {/* Workspace */}
          <div>
            <p className={sectionLabel} style={labelStyle}>
              Workspace
            </p>

            <div
              className="flex flex-col"
              style={{
                gap: '3px',
              }}
            >
              <button
                type="button"
                onClick={onNewChat}
                className={clsx(item, 'bg-white/[0.07] text-white')}
                style={itemStyle}
              >
                <PencilSquareIcon className={icon} />
                <span>New chat</span>
              </button>

              <button type="button" className={item} style={itemStyle}>
                <MagnifyingGlassIcon className={icon} />
                <span>Search chats</span>
              </button>

              <button type="button" className={item} style={itemStyle}>
                <FolderIcon className={icon} />
                <span>Projects</span>
              </button>

              <button type="button" className={item} style={itemStyle}>
                <CodeBracketSquareIcon className={icon} />
                <span>Codex</span>
              </button>

              <button type="button" className={item} style={itemStyle}>
                <CubeIcon className={icon} />
                <span>Explore GPTs</span>
              </button>

              <button type="button" className={item} style={itemStyle}>
                <EllipsisHorizontalIcon className={icon} />
                <span>More</span>
              </button>
            </div>
          </div>

          {/* History */}
          <div
            style={{
              marginTop: '18px',
            }}
          >
            <button
              type="button"
              className="group flex w-full items-center rounded-lg text-[14px] font-semibold text-white transition hover:bg-white/[0.07]"
              style={{
                height: '34px',
                paddingLeft: '10px',
                paddingRight: '10px',
                gap: '2px',
              }}
            >
              <span>Recents</span>
              <ChevronRightIcon className="h-3.5 w-3.5 text-white/55 transition group-hover:text-white/80" />
            </button>
          </div>
        </nav>

        {/* Profile */}
        <div className="shrink-0" style={{ paddingTop: '14px' }}>
          <button
            type="button"
            className="flex w-full items-center rounded-xl text-left transition hover:bg-white/[0.07]"
            style={{
              height: '52px',
              paddingLeft: '10px',
              paddingRight: '10px',
              gap: '12px',
            }}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#14b8a6] text-[12px] font-bold leading-none text-white">
              AB
            </div>

            <div className="flex min-w-0 flex-col">
              <span className="truncate text-[14px] font-semibold leading-4.5 text-white">
                Aryan Behera
              </span>
              <span className="truncate text-[13px] font-normal leading-4.25 text-white/65">
                Plus
              </span>
            </div>
          </button>
        </div>
      </div>
    </aside>
  );
}