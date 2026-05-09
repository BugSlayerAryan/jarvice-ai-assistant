
// import React from 'react';
// import clsx from 'clsx';

// export default function MessageBubble({ message, isUser = false }) {
//   return (
//     <div
//       className={clsx(
//         'flex w-full items-start gap-2.5',
//         isUser ? 'justify-end' : 'justify-start'
//       )}
//     >
//       {!isUser && (
//         <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#101827] text-[10px] font-semibold text-slate-300 shadow-md shadow-black/20 sm:h-9 sm:w-9 sm:text-[11px]">
//           AI
//         </div>
//       )}

//       <div
//         className={clsx(
//           'relative flex w-fit max-w-[82%] rounded-[18px] text-[15px] shadow-md transition-all sm:max-w-[76%]',
//           isUser
//             ? 'bg-[#0b84ff] text-white shadow-blue-950/20'
//             : 'border border-white/10 bg-[#151b26] text-slate-100 shadow-black/20'
//         )}
//         style={{
//           padding: '8px 14px',
//           minHeight: '34px',
//         }}
//       >
//         {!isUser && (
//           <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
//         )}

//         <p
//           className="m-0 whitespace-pre-wrap break-words"
//           style={{
//             lineHeight: '20px',
//           }}
//         >
//           {message}
//         </p>
//       </div>

//       {isUser && (
//         <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#101827] text-[9px] font-semibold text-slate-300 shadow-md shadow-black/20 sm:h-9 sm:w-9 sm:text-[10px]">
//           You
//         </div>
//       )}
//     </div>
//   );
// }

// import React from 'react';
// import clsx from 'clsx';
// import {
//   ClipboardDocumentIcon,
//   HandThumbUpIcon,
//   HandThumbDownIcon,
//   ArrowUpTrayIcon,
//   ArrowPathIcon,
//   EllipsisHorizontalIcon,
// } from '@heroicons/react/24/outline';

// function MessageActions() {
//   return (
//     <div className="mt-2 flex items-center gap-1 text-white/55">
//       <button
//         type="button"
//         aria-label="Copy message"
//         className="grid h-7 w-7 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white"
//       >
//         <ClipboardDocumentIcon className="h-[18px] w-[18px]" />
//       </button>

//       <button
//         type="button"
//         aria-label="Like message"
//         className="grid h-7 w-7 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white"
//       >
//         <HandThumbUpIcon className="h-[18px] w-[18px]" />
//       </button>

//       <button
//         type="button"
//         aria-label="Dislike message"
//         className="grid h-7 w-7 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white"
//       >
//         <HandThumbDownIcon className="h-[18px] w-[18px]" />
//       </button>

//       <button
//         type="button"
//         aria-label="Share message"
//         className="grid h-7 w-7 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white"
//       >
//         <ArrowUpTrayIcon className="h-[18px] w-[18px]" />
//       </button>

//       <button
//         type="button"
//         aria-label="Regenerate message"
//         className="grid h-7 w-7 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white"
//       >
//         <ArrowPathIcon className="h-[18px] w-[18px]" />
//       </button>

//       <button
//         type="button"
//         aria-label="More options"
//         className="grid h-7 w-7 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white"
//       >
//         <EllipsisHorizontalIcon className="h-5 w-5" />
//       </button>
//     </div>
//   );
// }

// export default function MessageBubble({ message, isUser = false }) {
//   return (
//     <div
//       className={clsx(
//         'flex w-full items-start gap-2.5',
//         isUser ? 'justify-end' : 'justify-start'
//       )}
//     >
//       {!isUser && (
//         <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#101827] text-[10px] font-semibold text-slate-300 shadow-md shadow-black/20 sm:h-9 sm:w-9 sm:text-[11px]">
//           AI
//         </div>
//       )}

//       <div
//         className={clsx(
//           'flex max-w-[82%] flex-col sm:max-w-[76%]',
//           isUser ? 'items-end' : 'items-start'
//         )}
//       >
//         <div
//           className={clsx(
//             'relative flex w-fit rounded-[18px] text-[15px] shadow-md transition-all',
//             isUser
//               ? 'bg-[#0b84ff] text-white shadow-blue-950/20'
//               : 'border border-white/10 bg-[#151b26] text-slate-100 shadow-black/20'
//           )}
//           style={{
//             padding: '8px 14px',
//             minHeight: '34px',
//           }}
//         >
//           {!isUser && (
//             <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
//           )}

//           <p
//             className="m-0 whitespace-pre-wrap break-words"
//             style={{
//               lineHeight: '20px',
//             }}
//           >
//             {message}
//           </p>
//         </div>

//         {!isUser && <MessageActions />}
//       </div>

//       {isUser && (
//         <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#101827] text-[9px] font-semibold text-slate-300 shadow-md shadow-black/20 sm:h-9 sm:w-9 sm:text-[10px]">
//           You
//         </div>
//       )}
//     </div>
//   );
// }


// import React, { useState } from 'react';
// import clsx from 'clsx';
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import {
//   ArrowPathIcon,
//   ArrowUpTrayIcon,
//   ArrowsPointingOutIcon,
//   ClipboardDocumentIcon,
//   CodeBracketIcon,
//   EllipsisHorizontalIcon,
//   HandThumbDownIcon,
//   HandThumbUpIcon,
//   PlayIcon,
// } from '@heroicons/react/24/outline';
// import {
//   formatLanguage,
//   openCodeViewer,
//   runHtmlPreview,
// } from './OpenCodeViewer';

// function copyText(text) {
//   navigator.clipboard?.writeText(text);
// }

// function CodeBlock({ language = 'text', code = '' }) {
//   const [copied, setCopied] = useState(false);
//   const normalizedLanguage = language.toLowerCase();

//   const handleCopy = async () => {
//     await navigator.clipboard?.writeText(code);
//     setCopied(true);

//     setTimeout(() => {
//       setCopied(false);
//     }, 1200);
//   };

//   const handleZoom = () => {
//     openCodeViewer(code, normalizedLanguage);
//   };

//   const handleRun = () => {
//     if (normalizedLanguage === 'html') {
//       runHtmlPreview(code);
//       return;
//     }

//     alert('Run preview is available for HTML code only.');
//   };

//   return (
//     <div className="my-4 overflow-hidden rounded-2xl border border-white/10 bg-[#0b1020] shadow-lg shadow-black/25">
//       <div
//         className="flex h-12 items-center justify-between border-b border-white/10 bg-[#111827]"
//         style={{
//           paddingLeft: '22px',
//           paddingRight: '14px',
//         }}
//       >
//         <div className="flex min-w-0 items-center gap-2.5">
//           <CodeBracketIcon className="h-4.5 w-4.5 shrink-0 text-white/80" />

//           <span className="truncate text-sm font-semibold text-white">
//             {formatLanguage(normalizedLanguage)}
//           </span>
//         </div>

//         <div className="flex items-center gap-1.5 text-white/70">
//           <button
//             type="button"
//             onClick={handleCopy}
//             aria-label="Copy code"
//             title="Copy code"
//             className="grid h-8 w-8 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white"
//           >
//             <ClipboardDocumentIcon className="h-4.5 w-4.5" />
//           </button>

//           <button
//             type="button"
//             onClick={handleZoom}
//             aria-label="Open code"
//             title="Open code"
//             className="grid h-8 w-8 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white"
//           >
//             <ArrowsPointingOutIcon className="h-4.5 w-4.5" />
//           </button>

//           <button
//             type="button"
//             onClick={handleRun}
//             aria-label="Run code"
//             title="Run HTML preview"
//             className="grid h-8 w-8 place-items-center rounded-full bg-white/8 transition hover:bg-white/14 hover:text-white"
//           >
//             <PlayIcon className="h-4.5 w-4.5 translate-x-px" />
//           </button>
//         </div>
//       </div>

//       {copied && (
//         <div className="border-b border-white/10 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-300">
//           Copied code
//         </div>
//       )}

//       <SyntaxHighlighter
//         language={normalizedLanguage}
//         style={vscDarkPlus}
//         customStyle={{
//           margin: 0,
//           padding: '18px',
//           background: '#0b1020',
//           fontSize: '14px',
//           lineHeight: '1.65',
//         }}
//         codeTagProps={{
//           style: {
//             fontFamily:
//               'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
//           },
//         }}
//         wrapLongLines
//       >
//         {code}
//       </SyntaxHighlighter>
//     </div>
//   );
// }

// function MessageActions({ message }) {
//   return (
//     <div
//       className="flex items-center gap-1 text-white/55"
//       style={{ marginTop: '8px' }}
//     >
//       <button
//         type="button"
//         aria-label="Copy message"
//         onClick={() => copyText(message)}
//         className="grid h-7 w-7 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white"
//       >
//         <ClipboardDocumentIcon className="h-4.5 w-4.5" />
//       </button>

//       <button
//         type="button"
//         aria-label="Like message"
//         className="grid h-7 w-7 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white"
//       >
//         <HandThumbUpIcon className="h-4.5 w-4.5" />
//       </button>

//       <button
//         type="button"
//         aria-label="Dislike message"
//         className="grid h-7 w-7 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white"
//       >
//         <HandThumbDownIcon className="h-4.5 w-4.5" />
//       </button>

//       <button
//         type="button"
//         aria-label="Share message"
//         className="grid h-7 w-7 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white"
//       >
//         <ArrowUpTrayIcon className="h-4.5 w-4.5" />
//       </button>

//       <button
//         type="button"
//         aria-label="Regenerate message"
//         className="grid h-7 w-7 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white"
//       >
//         <ArrowPathIcon className="h-4.5 w-4.5" />
//       </button>

//       <button
//         type="button"
//         aria-label="More options"
//         className="grid h-7 w-7 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white"
//       >
//         <EllipsisHorizontalIcon className="h-5 w-5" />
//       </button>
//     </div>
//   );
// }

// function MarkdownMessage({ message }) {
//   return (
//     <ReactMarkdown
//       remarkPlugins={[remarkGfm]}
//       components={{
//         p({ children }) {
//           return (
//             <p className="my-3 first:mt-0 last:mb-0 leading-7">
//               {children}
//             </p>
//           );
//         },

//         strong({ children }) {
//           return (
//             <strong className="font-semibold text-white">
//               {children}
//             </strong>
//           );
//         },

//         ul({ children }) {
//           return <ul className="my-3 list-disc space-y-1 pl-5">{children}</ul>;
//         },

//         ol({ children }) {
//           return <ol className="my-3 list-decimal space-y-1 pl-5">{children}</ol>;
//         },

//         li({ children }) {
//           return <li className="leading-7">{children}</li>;
//         },

//         code({ inline, className, children }) {
//           const match = /language-(\w+)/.exec(className || '');
//           const language = match?.[1] || 'text';
//           const code = String(children).replace(/\n$/, '');

//           if (inline) {
//             return (
//               <code className="rounded-md border border-white/10 bg-white/10 px-1.5 py-0.5 text-[13px] text-cyan-200">
//                 {children}
//               </code>
//             );
//           }

//           return <CodeBlock language={language} code={code} />;
//         },
//       }}
//     >
//       {message}
//     </ReactMarkdown>
//   );
// }

// export default function MessageBubble({ message, isUser = false }) {
//   return (
//     <div
//       className={clsx(
//         'flex w-full items-start gap-2.5',
//         isUser ? 'justify-end' : 'justify-start'
//       )}
//     >
//       {!isUser && (
//         <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#101827] text-[10px] font-semibold text-slate-300 shadow-md shadow-black/20 sm:h-9 sm:w-9 sm:text-[11px]">
//           AI
//         </div>
//       )}

//       <div
//         className={clsx(
//           'flex max-w-[82%] flex-col sm:max-w-[76%]',
//           isUser ? 'items-end' : 'items-start'
//         )}
//       >
//         <div
//           className={clsx(
//             'relative w-fit rounded-[18px] text-[15px] shadow-md transition-all',
//             isUser
//               ? 'bg-[#0b84ff] text-white shadow-blue-950/20'
//               : 'border border-white/10 bg-[#151b26] text-slate-100 shadow-black/20'
//           )}
//           style={{
//             padding: isUser ? '8px 14px' : '12px 16px',
//             minHeight: '34px',
//           }}
//         >
//           {!isUser && (
//             <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />
//           )}

//           {isUser ? (
//             <p
//               className="m-0 whitespace-pre-wrap wrap-break-word"
//               style={{ lineHeight: '20px' }}
//             >
//               {message}
//             </p>
//           ) : (
//             <div className="prose prose-invert max-w-none prose-pre:m-0 prose-pre:bg-transparent">
//               <MarkdownMessage message={message} />
//             </div>
//           )}
//         </div>

//         {!isUser && <MessageActions message={message} />}
//       </div>

//       {isUser && (
//         <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#101827] text-[9px] font-semibold text-slate-300 shadow-md shadow-black/20 sm:h-9 sm:w-9 sm:text-[10px]">
//           You
//         </div>
//       )}
//     </div>
//   );
// }








// import React, { useState } from 'react';
// import clsx from 'clsx';
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import {
//   ArrowPathIcon,
//   ArrowUpTrayIcon,
//   ArrowsPointingOutIcon,
//   ClipboardDocumentIcon,
//   CodeBracketIcon,
//   EllipsisHorizontalIcon,
//   HandThumbDownIcon,
//   HandThumbUpIcon,
//   PlayIcon,
// } from '@heroicons/react/24/outline';
// import {
//   formatLanguage,
//   openCodeViewer,
//   runCodePreview,
// } from './OpenCodeViewer';

// function copyText(text) {
//   navigator.clipboard?.writeText(text);
// }

// function CodeBlock({ language = 'text', code = '' }) {
//   const [copied, setCopied] = useState(false);
//   const normalizedLanguage = language.toLowerCase();

//   const handleCopy = async () => {
//     await navigator.clipboard?.writeText(code);
//     setCopied(true);

//     setTimeout(() => {
//       setCopied(false);
//     }, 1200);
//   };

//   const handleZoom = () => {
//     openCodeViewer(code, normalizedLanguage);
//   };

//   const handleRun = () => {
//     runCodePreview(code, normalizedLanguage);
//   };

//   return (
//     <div className="my-4 overflow-hidden rounded-2xl border border-white/10 bg-[#0b1020] shadow-lg shadow-black/25">
//       <div
//         className="flex h-12 items-center justify-between border-b border-white/10 bg-[#111827]"
//         style={{
//           paddingLeft: '22px',
//           paddingRight: '14px',
//         }}
//       >
//         <div className="flex min-w-0 items-center gap-2.5">
//           <CodeBracketIcon className="h-4.5 w-4.5 shrink-0 text-white/80" />

//           <span className="truncate text-sm font-semibold text-white">
//             {formatLanguage(normalizedLanguage)}
//           </span>
//         </div>

//         <div className="flex items-center gap-1.5 text-white/70">
//           <button
//             type="button"
//             onClick={handleCopy}
//             aria-label="Copy code"
//             title="Copy code"
//             className="grid h-8 w-8 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white"
//           >
//             <ClipboardDocumentIcon className="h-4.5 w-4.5" />
//           </button>

//           <button
//             type="button"
//             onClick={handleZoom}
//             aria-label="Open code"
//             title="Open code"
//             className="grid h-8 w-8 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white"
//           >
//             <ArrowsPointingOutIcon className="h-4.5 w-4.5" />
//           </button>

//           <button
//             type="button"
//             onClick={handleRun}
//             aria-label="Run code"
//             title="Run code"
//             className="grid h-8 w-8 place-items-center rounded-full bg-white/8 transition hover:bg-white/14 hover:text-white"
//           >
//             <PlayIcon className="h-4.5 w-4.5 translate-x-px" />
//           </button>
//         </div>
//       </div>

//       {copied && (
//         <div className="border-b border-white/10 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-300">
//           Copied code
//         </div>
//       )}

//       <SyntaxHighlighter
//         language={normalizedLanguage}
//         style={vscDarkPlus}
//         customStyle={{
//           margin: 0,
//           padding: '18px',
//           background: '#0b1020',
//           fontSize: '14px',
//           lineHeight: '1.65',
//         }}
//         codeTagProps={{
//           style: {
//             fontFamily:
//               'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
//           },
//         }}
//         wrapLongLines
//       >
//         {code}
//       </SyntaxHighlighter>
//     </div>
//   );
// }

// function MessageActions({ message }) {
//   return (
//     <div
//       className="flex items-center gap-1 text-white/55"
//       style={{ marginTop: '8px' }}
//     >
//       <button
//         type="button"
//         aria-label="Copy message"
//         onClick={() => copyText(message)}
//         className="grid h-7 w-7 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white"
//       >
//         <ClipboardDocumentIcon className="h-4.5 w-4.5" />
//       </button>

//       <button
//         type="button"
//         aria-label="Like message"
//         className="grid h-7 w-7 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white"
//       >
//         <HandThumbUpIcon className="h-4.5 w-4.5" />
//       </button>

//       <button
//         type="button"
//         aria-label="Dislike message"
//         className="grid h-7 w-7 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white"
//       >
//         <HandThumbDownIcon className="h-4.5 w-4.5" />
//       </button>

//       <button
//         type="button"
//         aria-label="Share message"
//         className="grid h-7 w-7 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white"
//       >
//         <ArrowUpTrayIcon className="h-4.5 w-4.5" />
//       </button>

//       <button
//         type="button"
//         aria-label="Regenerate message"
//         className="grid h-7 w-7 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white"
//       >
//         <ArrowPathIcon className="h-4.5 w-4.5" />
//       </button>

//       <button
//         type="button"
//         aria-label="More options"
//         className="grid h-7 w-7 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white"
//       >
//         <EllipsisHorizontalIcon className="h-5 w-5" />
//       </button>
//     </div>
//   );
// }

// function MarkdownMessage({ message }) {
//   return (
//     <ReactMarkdown
//       remarkPlugins={[remarkGfm]}
//       components={{
//         p({ children }) {
//           return (
//             <p className="my-3 first:mt-0 last:mb-0 leading-7">
//               {children}
//             </p>
//           );
//         },

//         strong({ children }) {
//           return (
//             <strong className="font-semibold text-white">
//               {children}
//             </strong>
//           );
//         },

//         ul({ children }) {
//           return <ul className="my-3 list-disc space-y-1 pl-5">{children}</ul>;
//         },

//         ol({ children }) {
//           return <ol className="my-3 list-decimal space-y-1 pl-5">{children}</ol>;
//         },

//         li({ children }) {
//           return <li className="leading-7">{children}</li>;
//         },

//         code({ inline, className, children }) {
//           const match = /language-(\w+)/.exec(className || '');
//           const language = match?.[1] || 'text';
//           const code = String(children).replace(/\n$/, '');

//           if (inline) {
//             return (
//               <code className="rounded-md border border-white/10 bg-white/10 px-1.5 py-0.5 text-[13px] text-cyan-200">
//                 {children}
//               </code>
//             );
//           }

//           return <CodeBlock language={language} code={code} />;
//         },
//       }}
//     >
//       {message}
//     </ReactMarkdown>
//   );
// }

// export default function MessageBubble({ message, isUser = false }) {
//   return (
//     <div
//       className={clsx(
//         'flex w-full items-start gap-2.5',
//         isUser ? 'justify-end' : 'justify-start'
//       )}
//     >
//       {!isUser && (
//         <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#101827] text-[10px] font-semibold text-slate-300 shadow-md shadow-black/20 sm:h-9 sm:w-9 sm:text-[11px]">
//           AI
//         </div>
//       )}

//       <div
//         className={clsx(
//           'flex max-w-[82%] flex-col sm:max-w-[76%]',
//           isUser ? 'items-end' : 'items-start'
//         )}
//       >
//         <div
//           className={clsx(
//             'relative w-fit rounded-[18px] text-[15px] shadow-md transition-all',
//             isUser
//               ? 'bg-[#0b84ff] text-white shadow-blue-950/20'
//               : 'border border-white/10 bg-[#151b26] text-slate-100 shadow-black/20'
//           )}
//           style={{
//             padding: isUser ? '8px 14px' : '12px 16px',
//             minHeight: '34px',
//           }}
//         >
//           {!isUser && (
//             <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />
//           )}

//           {isUser ? (
//             <p
//               className="m-0 whitespace-pre-wrap wrap-break-word"
//               style={{ lineHeight: '20px' }}
//             >
//               {message}
//             </p>
//           ) : (
//             <div className="prose prose-invert max-w-none prose-pre:m-0 prose-pre:bg-transparent">
//               <MarkdownMessage message={message} />
//             </div>
//           )}
//         </div>

//         {!isUser && <MessageActions message={message} />}
//       </div>

//       {isUser && (
//         <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#101827] text-[9px] font-semibold text-slate-300 shadow-md shadow-black/20 sm:h-9 sm:w-9 sm:text-[10px]">
//           You
//         </div>
//       )}
//     </div>
//   );
// }







import React, { useState } from 'react';
import clsx from 'clsx';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
  ArrowPathIcon,
  ArrowUpTrayIcon,
  ArrowsPointingOutIcon,
  ClipboardDocumentIcon,
  CodeBracketIcon,
  EllipsisHorizontalIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
  PlayIcon,
} from '@heroicons/react/24/outline';
import {
  formatLanguage,
  openCodeViewer,
  runCodePreview,
} from './OpenCodeViewer';

function copyText(text) {
  navigator.clipboard?.writeText(text);
}

function CodeBlock({ language = 'text', code = '' }) {
  const [copied, setCopied] = useState(false);
  const normalizedLanguage = language.toLowerCase();

  const handleCopy = async () => {
    await navigator.clipboard?.writeText(code);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1200);
  };

  const handleZoom = () => {
    openCodeViewer(code, normalizedLanguage);
  };

  const handleRun = () => {
    runCodePreview(code, normalizedLanguage);
  };

  return (
    <div className="my-4 max-w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0b1020] shadow-lg shadow-black/25">
      <div
        className="flex h-12 items-center justify-between border-b border-white/10 bg-[#111827]"
        style={{
          paddingLeft: 'clamp(14px, 3vw, 22px)',
          paddingRight: 'clamp(10px, 2vw, 14px)',
        }}
      >
        <div className="flex min-w-0 items-center gap-2.5">
          <CodeBracketIcon className="h-4.5 w-4.5 shrink-0 text-white/80" />

          <span className="truncate text-sm font-semibold text-white">
            {formatLanguage(normalizedLanguage)}
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-1 text-white/70 sm:gap-1.5">
          <button
            type="button"
            onClick={handleCopy}
            aria-label="Copy code"
            title="Copy code"
            className="grid h-8 w-8 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white"
          >
            <ClipboardDocumentIcon className="h-4.5 w-4.5" />
          </button>

          <button
            type="button"
            onClick={handleZoom}
            aria-label="Open code"
            title="Open code"
            className="grid h-8 w-8 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white"
          >
            <ArrowsPointingOutIcon className="h-4.5 w-4.5" />
          </button>

          <button
            type="button"
            onClick={handleRun}
            aria-label="Run code"
            title="Run code"
            className="grid h-8 w-8 place-items-center rounded-full bg-white/8 transition hover:bg-white/14 hover:text-white"
          >
            <PlayIcon className="h-4.5 w-4.5 translate-x-px" />
          </button>
        </div>
      </div>

      {copied && (
        <div className="border-b border-white/10 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-300">
          Copied code
        </div>
      )}

      <div className="max-w-full overflow-x-auto">
        <SyntaxHighlighter
          language={normalizedLanguage}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: 'clamp(14px, 3vw, 18px)',
            background: '#0b1020',
            fontSize: '14px',
            lineHeight: '1.65',
            minWidth: '100%',
          }}
          codeTagProps={{
            style: {
              fontFamily:
                'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
            },
          }}
          wrapLongLines={false}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

function MessageActions({ message }) {
  return (
    <div
      className="flex items-center gap-1 text-white/55"
      style={{ marginTop: '8px' }}
    >
      <button
        type="button"
        aria-label="Copy message"
        onClick={() => copyText(message)}
        className="grid h-7 w-7 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white"
      >
        <ClipboardDocumentIcon className="h-4.5 w-4.5" />
      </button>

      <button
        type="button"
        aria-label="Like message"
        className="grid h-7 w-7 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white"
      >
        <HandThumbUpIcon className="h-4.5 w-4.5" />
      </button>

      <button
        type="button"
        aria-label="Dislike message"
        className="grid h-7 w-7 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white"
      >
        <HandThumbDownIcon className="h-4.5 w-4.5" />
      </button>

      <button
        type="button"
        aria-label="Share message"
        className="grid h-7 w-7 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white"
      >
        <ArrowUpTrayIcon className="h-4.5 w-4.5" />
      </button>

      <button
        type="button"
        aria-label="Regenerate message"
        className="grid h-7 w-7 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white"
      >
        <ArrowPathIcon className="h-4.5 w-4.5" />
      </button>

      <button
        type="button"
        aria-label="More options"
        className="grid h-7 w-7 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white"
      >
        <EllipsisHorizontalIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

function MarkdownMessage({ message }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1({ children }) {
          return (
            <h1 className="mb-4 text-[28px] font-semibold leading-tight tracking-[-0.04em] text-white sm:text-[36px] md:text-[42px]">
              {children}
            </h1>
          );
        },

        h2({ children }) {
          return (
            <h2 className="mb-3 mt-5 text-[21px] font-semibold leading-tight text-white sm:text-[24px]">
              {children}
            </h2>
          );
        },

        h3({ children }) {
          return (
            <h3 className="mb-2 mt-4 text-[18px] font-semibold leading-snug text-white sm:text-[20px]">
              {children}
            </h3>
          );
        },

        p({ children }) {
          return (
            <p className="my-3 first:mt-0 last:mb-0 text-[15px] leading-7 text-slate-100">
              {children}
            </p>
          );
        },

        strong({ children }) {
          return (
            <strong className="font-semibold text-white">
              {children}
            </strong>
          );
        },

        ul({ children }) {
          return (
            <ul className="my-3 list-disc space-y-1 pl-5 text-[15px] leading-7">
              {children}
            </ul>
          );
        },

        ol({ children }) {
          return (
            <ol className="my-3 list-decimal space-y-1 pl-5 text-[15px] leading-7">
              {children}
            </ol>
          );
        },

        li({ children }) {
          return <li className="leading-7">{children}</li>;
        },

        code({ inline, className, children }) {
          const match = /language-(\w+)/.exec(className || '');
          const language = match?.[1] || 'text';
          const code = String(children).replace(/\n$/, '');

          if (inline) {
            return (
              <code className="rounded-md border border-white/10 bg-white/10 px-1.5 py-0.5 text-[13px] text-cyan-200">
                {children}
              </code>
            );
          }

          return <CodeBlock language={language} code={code} />;
        },
      }}
    >
      {message}
    </ReactMarkdown>
  );
}

export default function MessageBubble({ message, isUser = false }) {
  return (
    <div
      className={clsx(
        'flex w-full items-start gap-2.5 sm:gap-3',
        isUser ? 'justify-end' : 'justify-start'
      )}
    >
      {!isUser && (
        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#101827] text-[10px] font-semibold text-slate-300 shadow-md shadow-black/20 sm:h-9 sm:w-9 sm:text-[11px]">
          AI
        </div>
      )}

      <div
        className={clsx(
          'flex min-w-0 flex-col',
          isUser ? 'items-end' : 'items-start'
        )}
        style={{
          maxWidth: isUser ? 'min(82%, 680px)' : 'min(86%, 860px)',
        }}
      >
        <div
          className={clsx(
            'relative min-w-0 rounded-[18px] text-[15px] shadow-md transition-all',
            isUser
              ? 'w-fit bg-[#0b84ff] text-white shadow-blue-950/20'
              : 'w-full border border-white/10 bg-[#151b26] text-slate-100 shadow-black/20'
          )}
          style={{
            padding: isUser
              ? '8px 14px'
              : 'clamp(12px, 2vw, 18px) clamp(12px, 2.5vw, 20px)',
            minHeight: '34px',
          }}
        >
          {!isUser && (
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />
          )}

          {isUser ? (
            <p
              className="m-0 whitespace-pre-wrap wrap-break-word"
              style={{ lineHeight: '20px' }}
            >
              {message}
            </p>
          ) : (
            <div className="prose prose-invert max-w-none prose-pre:m-0 prose-pre:bg-transparent">
              <MarkdownMessage message={message} />
            </div>
          )}
        </div>

        {!isUser && <MessageActions message={message} />}
      </div>

      {isUser && (
        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#101827] text-[9px] font-semibold text-slate-300 shadow-md shadow-black/20 sm:h-9 sm:w-9 sm:text-[10px]">
          You
        </div>
      )}
    </div>
  );
}