// import React, { useEffect, useRef } from 'react';
// import MessageBubble from '../MessageBubble';
// import Loader from '../ui/Loader';
// import WelcomeState from './WelcomeState';

// export default function ChatMessages({
//   messages = [],
//   isLoading = false,
//   onSuggestionClick = () => {},
// }) {
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({
//       behavior: 'smooth',
//       block: 'end',
//     });
//   }, [messages, isLoading]);

//   if (messages.length === 0) {
//     return (
//       <div className="h-full min-h-0 w-full overflow-y-auto">
//         <WelcomeState onSuggestionClick={onSuggestionClick} />
//       </div>
//     );
//   }

//   return (
//     <div className="h-full min-h-0 w-full overflow-y-auto">
//       <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 md:px-12 lg:px-16 xl:px-20">
//         {messages.map((msg, idx) => (
//           <MessageBubble
//             key={`${msg.sender}-${idx}`}
//             message={msg.text}
//             isUser={msg.sender === 'user'}
//           />
//         ))}

//         {isLoading && (
//           <div className="flex w-full items-start gap-3">
//             <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#111827] text-[11px] font-semibold text-white/75">
//               AI
//             </div>

//             <div className="max-w-[76%] rounded-2xl rounded-tl-md border border-white/10 bg-[#151b26] px-5 py-3 text-[15px] leading-7 text-white/80 shadow-lg shadow-black/20">
//               <Loader size="sm" />
//             </div>
//           </div>
//         )}

//         <div className="h-2" ref={messagesEndRef} />
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useRef } from 'react';
// import MessageBubble from '../MessageBubble';
// import Loader from '../ui/Loader';
// import WelcomeState from './WelcomeState';

// export default function ChatMessages({
//   messages = [],
//   isLoading = false,
//   onSuggestionClick = () => {},
// }) {
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({
//       behavior: 'smooth',
//       block: 'end',
//     });
//   }, [messages, isLoading]);

//   if (messages.length === 0) {
//     return (
//       <div className="h-full min-h-0 w-full overflow-y-auto">
//         <WelcomeState onSuggestionClick={onSuggestionClick} />
//       </div>
//     );
//   }

//   return (
//     <div className="h-full min-h-0 w-full overflow-y-auto">
//       <div
//         className="mx-auto flex w-full max-w-295 flex-col gap-5"
//         style={{
//           paddingLeft: 'clamp(18px, 4vw, 72px)',
//           paddingRight: 'clamp(18px, 4vw, 72px)',
//           paddingTop: 'clamp(24px, 4vw, 56px)',
//           paddingBottom: '32px',
//         }}
//       >
//         {messages.map((msg, idx) => (
//           <MessageBubble
//             key={`${msg.sender}-${idx}`}
//             message={msg.text}
//             isUser={msg.sender === 'user'}
//           />
//         ))}

//         {isLoading && (
//           <div className="flex w-full items-start gap-3">
//             <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#101827] text-[10px] font-semibold text-slate-300 shadow-md shadow-black/20 sm:h-9 sm:w-9 sm:text-[11px]">
//               AI
//             </div>

//             <div
//               className="rounded-2xl rounded-tl-md border border-white/10 bg-[#151b26] px-4 py-3 text-[15px] leading-7 text-white/80 shadow-md shadow-black/20 sm:px-5"
//               style={{
//                 maxWidth: 'min(86%, 820px)',
//               }}
//             >
//               <Loader size="sm" />
//             </div>
//           </div>
//         )}

//         <div className="h-2" ref={messagesEndRef} />
//       </div>
//     </div>
//   );
// }





// import React, { useEffect, useRef } from 'react';
// import MessageBubble from '../MessageBubble';
// import Loader from '../ui/Loader';
// import WelcomeState from './WelcomeState';

// export default function ChatMessages({
//   messages = [],
//   isLoading = false,
//   onSuggestionClick = () => {},
// }) {
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({
//       behavior: 'smooth',
//       block: 'end',
//     });
//   }, [messages, isLoading]);

//   if (messages.length === 0) {
//     return (
//       <div className="h-full min-h-0 w-full overflow-y-auto">
//         <WelcomeState onSuggestionClick={onSuggestionClick} />
//       </div>
//     );
//   }

//   return (
//     <div className="h-full min-h-0 w-full overflow-y-auto">
//       <div
//         className="mx-auto flex w-full max-w-[1120px] flex-col gap-5"
//         style={{
//           paddingLeft: 'clamp(14px, 3vw, 56px)',
//           paddingRight: 'clamp(14px, 3vw, 56px)',
//           paddingTop: 'clamp(20px, 4vw, 48px)',
//           paddingBottom: 'clamp(128px, 16vh, 172px)',
//         }}
//       >
//         {messages.map((msg, idx) => (
//           <MessageBubble
//             key={`${msg.sender}-${idx}`}
//             message={msg.text}
//             isUser={msg.sender === 'user'}
//           />
//         ))}

//         {isLoading && (
//           <div className="flex w-full items-start gap-2.5 sm:gap-3">
//             <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#101827] text-[10px] font-semibold text-slate-300 shadow-md shadow-black/20 sm:h-9 sm:w-9 sm:text-[11px]">
//               AI
//             </div>

//             <div
//               className="rounded-2xl rounded-tl-md border border-white/10 bg-[#151b26] text-[15px] leading-7 text-white/80 shadow-md shadow-black/20"
//               style={{
//                 maxWidth: 'min(86%, 820px)',
//                 padding: '10px 14px',
//               }}
//             >
//               <Loader size="sm" />
//             </div>
//           </div>
//         )}

//         <div className="h-2" ref={messagesEndRef} />
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useRef } from 'react';
import MessageBubble from '../MessageBubble';
import Loader from '../ui/Loader';
import WelcomeState from './WelcomeState';

export default function ChatMessages({
  messages = [],
  isLoading = false,
  onSuggestionClick = () => {},
}) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }, [messages, isLoading]);

  if (messages.length === 0) {
    return (
      <div className="h-full min-h-0 w-full overflow-y-auto">
        <WelcomeState onSuggestionClick={onSuggestionClick} />
      </div>
    );
  }

  return (
    <div className="h-full min-h-0 w-full overflow-y-auto">
      <div
        className="mx-auto flex w-full flex-col gap-5"
        style={{
          maxWidth: '1120px',

          // same left/right padding
          paddingLeft: 'clamp(20px, 5vw, 72px)',
          paddingRight: 'clamp(20px, 5vw, 72px)',

          // responsive top/bottom padding
          paddingTop: 'clamp(24px, 4vw, 56px)',

          // important: prevents floating input from covering messages
          paddingBottom: 'clamp(140px, 18vh, 190px)',
        }}
      >
        {messages.map((msg, idx) => (
          <MessageBubble
            key={`${msg.sender}-${idx}`}
            message={msg.text}
            isUser={msg.sender === 'user'}
          />
        ))}

        {isLoading && (
          <div className="flex w-full items-start gap-2.5 sm:gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#101827] text-[10px] font-semibold text-slate-300 shadow-md shadow-black/20 sm:h-9 sm:w-9 sm:text-[11px]">
              AI
            </div>

            <div
              className="rounded-2xl rounded-tl-md border border-white/10 bg-[#151b26] text-[15px] leading-7 text-white/80 shadow-md shadow-black/20"
              style={{
                maxWidth: 'min(86%, 820px)',
                padding: '10px 14px',
              }}
            >
              <Loader size="sm" />
            </div>
          </div>
        )}

        <div className="h-2" ref={messagesEndRef} />
      </div>
    </div>
  );
}