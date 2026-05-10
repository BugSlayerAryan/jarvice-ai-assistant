// import React, { useEffect, useRef, useState } from 'react';
// import {
//   ArrowUpIcon,
//   MicrophoneIcon,
//   PaperClipIcon,
// } from '@heroicons/react/24/outline';

// export default function ChatInput({
//   onSendMessage = () => {},
//   isLoading = false,
// }) {
//   const [message, setMessage] = useState('');
//   const textareaRef = useRef(null);

//   useEffect(() => {
//     const textarea = textareaRef.current;

//     if (!textarea) return;

//     textarea.style.height = '0px';
//     textarea.style.height = `${Math.min(textarea.scrollHeight, 140)}px`;
//   }, [message]);

//   const handleSend = () => {
//     const nextMessage = message.trim();

//     if (!nextMessage || isLoading) return;

//     onSendMessage(nextMessage);
//     setMessage('');
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   return (
//     <div className="pointer-events-none absolute inset-x-0 bottom-6 z-30 flex justify-center">
//       <div
//         className="pointer-events-auto rounded-2xl border border-white/10 bg-[#0f1724]/95 p-2 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl"
//         style={{
//           width: 'calc(100% - clamp(32px, 8vw, 160px))',
//           maxWidth: '896px',
//         }}
//       >
//         <div className="flex min-h-13.5 w-full items-center gap-2 rounded-xl bg-[#111827] px-2 py-2">
//           <button
//             type="button"
//             className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/4 text-white/60 transition hover:border-white/20 hover:bg-white/8 hover:text-white"
//             aria-label="Add attachment"
//           >
//             <PaperClipIcon className="h-4.5 w-4.5" />
//           </button>

//           <textarea
//             ref={textareaRef}
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             onKeyDown={handleKeyDown}
//             placeholder="Ask anything..."
//             rows={1}
//             className="hide-scrollbar min-h-9.5 max-h-35 flex-1 resize-none overflow-y-auto bg-transparent px-2 py-2 text-[15px] leading-6 text-white placeholder:text-white/40 focus:outline-none"
//           />

//           <button
//             type="button"
//             className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/4 text-white/60 transition hover:border-white/20 hover:bg-white/8 hover:text-white"
//             aria-label="Voice input"
//           >
//             <MicrophoneIcon className="h-4.5 w-4.5" />
//           </button>

//           <button
//             type="button"
//             onClick={handleSend}
//             disabled={!message.trim() || isLoading}
//             aria-label="Send message"
//             className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-500 text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/35 disabled:shadow-none"
//           >
//             <ArrowUpIcon className="h-4.5 w-4.5 stroke-[2.4]" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React, { useEffect, useRef, useState } from 'react';
// import {
//   ArrowUpIcon,
//   MicrophoneIcon,
//   PaperClipIcon,
// } from '@heroicons/react/24/outline';

// export default function ChatInput({
//   onSendMessage = () => {},
//   isLoading = false,
// }) {
//   const [message, setMessage] = useState('');
//   const textareaRef = useRef(null);

//   useEffect(() => {
//     const textarea = textareaRef.current;

//     if (!textarea) return;

//     textarea.style.height = '0px';
//     textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
//   }, [message]);

//   const handleSend = () => {
//     const nextMessage = message.trim();

//     if (!nextMessage || isLoading) return;

//     onSendMessage(nextMessage);
//     setMessage('');
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === 'Enter' && !event.shiftKey) {
//       event.preventDefault();
//       handleSend();
//     }
//   };

//   return (
//     <div className="pointer-events-none absolute inset-x-0 bottom-3 z-30 flex justify-center px-3 pb-[env(safe-area-inset-bottom)] sm:bottom-6 sm:px-6 sm:pb-0">
//       <div className="pointer-events-auto w-full max-w-[896px]">
//         <div className="flex min-h-12 w-full items-center gap-2 rounded-2xl border border-white/10 bg-[#111827]/90 px-3 py-2 shadow-[0_16px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:min-h-14 sm:px-4">
//           <button
//             type="button"
//             className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-white/70 transition hover:bg-white/8 hover:text-white"
//             aria-label="Add attachment"
//           >
//             <PaperClipIcon className="h-4.5 w-4.5" />
//           </button>

//           <textarea
//             ref={textareaRef}
//             value={message}
//             onChange={(event) => setMessage(event.target.value)}
//             onKeyDown={handleKeyDown}
//             placeholder="Ask anything..."
//             rows={1}
//             className="hide-scrollbar min-h-9 max-h-28 flex-1 resize-none overflow-y-auto bg-transparent px-4 py-2 text-[14px] leading-5 text-white placeholder:text-white/40 focus:outline-none sm:max-h-35 sm:text-[15px] sm:leading-6"
//           />

//           <button
//             type="button"
//             className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-white/70 transition hover:bg-white/8 hover:text-white"
//             aria-label="Voice input"
//           >
//             <MicrophoneIcon className="h-4.5 w-4.5" />
//           </button>

//           <button
//             type="button"
//             onClick={handleSend}
//             disabled={!message.trim() || isLoading}
//             aria-label="Send message"
//             className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:text-white/40"
//           >
//             <ArrowUpIcon className="h-4.5 w-4.5 stroke-[2.4]" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }








import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowUpIcon,
  MicrophoneIcon,
  PaperClipIcon,
} from '@heroicons/react/24/outline';

export default function ChatInput({
  onSendMessage = () => {},
  isLoading = false,
  keyboardHeight = 0,
}) {
  const [message, setMessage] = useState('');
  const textareaRef = useRef(null);

  const keyboardOpen = keyboardHeight > 80;

  useEffect(() => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    textarea.style.height = '0px';
    textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
  }, [message]);

  const handleSend = () => {
    const nextMessage = message.trim();

    if (!nextMessage || isLoading) return;

    onSendMessage(nextMessage);
    setMessage('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className="pointer-events-none absolute inset-x-0 z-30 flex justify-center px-3 sm:px-6"
      style={{
        bottom: keyboardOpen
          ? `${keyboardHeight + 8}px`
          : 'calc(env(safe-area-inset-bottom) + 12px)',
      }}
    >
      <div className="pointer-events-auto w-full max-w-[896px]">
        <div className="flex min-h-12 w-full items-center gap-2 rounded-2xl border border-white/10 bg-[#111827]/90 px-3 py-2 shadow-[0_16px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:min-h-14 sm:px-4">
          <button
            type="button"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-white/70 transition hover:bg-white/8 hover:text-white"
            aria-label="Add attachment"
          >
            <PaperClipIcon className="h-4.5 w-4.5" />
          </button>

          <textarea
            ref={textareaRef}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything..."
            rows={1}
            className="hide-scrollbar min-h-9 max-h-28 flex-1 resize-none overflow-y-auto bg-transparent px-4 py-2 text-[16px] leading-5 text-white placeholder:text-white/40 focus:outline-none sm:max-h-35 sm:text-[15px] sm:leading-6"
          />

          <button
            type="button"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-white/70 transition hover:bg-white/8 hover:text-white"
            aria-label="Voice input"
          >
            <MicrophoneIcon className="h-4.5 w-4.5" />
          </button>

          <button
            type="button"
            onClick={handleSend}
            disabled={!message.trim() || isLoading}
            aria-label="Send message"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:text-white/40"
          >
            <ArrowUpIcon className="h-4.5 w-4.5 stroke-[2.4]" />
          </button>
        </div>
      </div>
    </div>
  );
}