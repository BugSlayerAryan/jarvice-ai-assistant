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
//         className="mx-auto flex w-full flex-col gap-5"
//         style={{
//           maxWidth: '1120px',

//           // same left/right padding
//           paddingLeft: 'clamp(20px, 5vw, 72px)',
//           paddingRight: 'clamp(20px, 5vw, 72px)',

//           // responsive top/bottom padding
//           paddingTop: 'clamp(24px, 4vw, 56px)',

//           // important: prevents floating input from covering messages
//           paddingBottom: 'clamp(140px, 18vh, 190px)',
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
//       <div className="h-full min-h-0 w-full overflow-hidden">
//         <WelcomeState onSuggestionClick={onSuggestionClick} />
//       </div>
//     );
//   }

//   return (
//     <div className="h-full min-h-0 w-full overflow-y-auto">
//       <div
//         className="mx-auto flex w-full flex-col gap-5"
//         style={{
//           maxWidth: '1120px',
//           paddingLeft: 'clamp(14px, 5vw, 72px)',
//           paddingRight: 'clamp(14px, 5vw, 72px)',
//           paddingTop: 'clamp(20px, 4vw, 56px)',
//           paddingBottom:
//             'calc(clamp(120px, 18vh, 190px) + env(safe-area-inset-bottom))',
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
  keyboardOpen = false,
  keyboardHeight = 0,
}) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }, [messages, isLoading, keyboardOpen]);

  if (messages.length === 0) {
    return (
      <div
        className="w-full overflow-hidden"
        style={{
          height: keyboardOpen
            ? `max(300px, calc(100% - ${keyboardHeight + 92}px))`
            : '100%',
        }}
      >
        <WelcomeState
          onSuggestionClick={onSuggestionClick}
          keyboardOpen={keyboardOpen}
        />
      </div>
    );
  }

  return (
    <div className="h-full min-h-0 w-full overflow-y-auto">
      <div
        className="mx-auto flex w-full flex-col gap-5"
        style={{
          maxWidth: '1120px',
          paddingLeft: 'clamp(14px, 5vw, 72px)',
          paddingRight: 'clamp(14px, 5vw, 72px)',
          paddingTop: keyboardOpen ? '18px' : 'clamp(20px, 4vw, 56px)',
          paddingBottom: keyboardOpen
            ? '120px'
            : 'calc(clamp(120px, 18vh, 190px) + env(safe-area-inset-bottom))',
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