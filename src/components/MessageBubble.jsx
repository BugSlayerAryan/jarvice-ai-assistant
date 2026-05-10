
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
//   OpenCodeViewer,
//   runCodePreview,
// } from '../utils/openCodeViewer';

// function copyText(text) {
//   navigator.clipboard?.writeText(text);
// }

// function formatFileSize(size = 0) {
//   if (size < 1024) return `${size} B`;
//   if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
//   return `${(size / (1024 * 1024)).toFixed(1)} MB`;
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
//     OpenCodeViewer(code, normalizedLanguage);
//   };

//   const handleRun = () => {
//     runCodePreview(code, normalizedLanguage);
//   };

//   return (
//     <div className="my-4 max-w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0b1020] shadow-lg shadow-black/25">
//       <div
//         className="flex h-11 items-center justify-between border-b border-white/10 bg-[#111827] sm:h-12"
//         style={{
//           paddingLeft: 'clamp(12px, 3vw, 22px)',
//           paddingRight: 'clamp(8px, 2vw, 14px)',
//         }}
//       >
//         <div className="flex min-w-0 items-center gap-2.5">
//           <CodeBracketIcon className="h-4 w-4 shrink-0 text-white/80 sm:h-4.5 sm:w-4.5" />

//           <span className="truncate text-[13px] font-semibold text-white sm:text-sm">
//             {formatLanguage(normalizedLanguage)}
//           </span>
//         </div>

//         <div className="flex shrink-0 items-center gap-0.5 text-white/70 sm:gap-1.5">
//           <button
//             type="button"
//             onClick={handleCopy}
//             aria-label="Copy code"
//             title="Copy code"
//             className="grid h-7 w-7 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white sm:h-8 sm:w-8"
//           >
//             <ClipboardDocumentIcon className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
//           </button>

//           <button
//             type="button"
//             onClick={handleZoom}
//             aria-label="Open code"
//             title="Open code"
//             className="grid h-7 w-7 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white sm:h-8 sm:w-8"
//           >
//             <ArrowsPointingOutIcon className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
//           </button>

//           <button
//             type="button"
//             onClick={handleRun}
//             aria-label="Run code"
//             title="Run code"
//             className="grid h-7 w-7 place-items-center rounded-full bg-white/8 transition hover:bg-white/14 hover:text-white sm:h-8 sm:w-8"
//           >
//             <PlayIcon className="h-4 w-4 translate-x-px sm:h-4.5 sm:w-4.5" />
//           </button>
//         </div>
//       </div>

//       {copied && (
//         <div className="border-b border-white/10 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-300">
//           Copied code
//         </div>
//       )}

//       <div className="max-w-full overflow-x-auto">
//         <SyntaxHighlighter
//           language={normalizedLanguage}
//           style={vscDarkPlus}
//           customStyle={{
//             margin: 0,
//             padding: 'clamp(12px, 3vw, 18px)',
//             background: '#0b1020',
//             fontSize: '13px',
//             lineHeight: '1.65',
//             minWidth: '100%',
//           }}
//           codeTagProps={{
//             style: {
//               fontFamily:
//                 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
//             },
//           }}
//           wrapLongLines={false}
//         >
//           {code}
//         </SyntaxHighlighter>
//       </div>
//     </div>
//   );
// }

// function MessageActions({ message }) {
//   return (
//     <div
//       className="flex items-center gap-1 text-white/55"
//       style={{ marginTop: '7px' }}
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

// function FilePreviews({ files = [] }) {
//   if (files.length === 0) return null;

//   return (
//     <div className="mb-2 flex flex-wrap gap-2">
//       {files.map((item, index) => {
//         const isImage = item.type?.startsWith('image/') && item.previewUrl;

//         return (
//           <div
//             key={`${item.name}-${index}`}
//             className="overflow-hidden rounded-xl border border-white/10 bg-black/15"
//           >
//             {isImage ? (
//               <img
//                 src={item.previewUrl}
//                 alt={item.name}
//                 className="h-28 w-36 rounded-xl object-cover"
//               />
//             ) : (
//               <div className="max-w-48 px-3 py-2">
//                 <p className="truncate text-xs font-medium text-white">
//                   {item.name}
//                 </p>
//                 <p className="text-[10px] text-white/60">
//                   {formatFileSize(item.size)}
//                 </p>
//               </div>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// function MarkdownMessage({ message }) {
//   return (
//     <ReactMarkdown
//       remarkPlugins={[remarkGfm]}
//       components={{
//         h1({ children }) {
//           return (
//             <h1 className="mb-4 text-[26px] font-semibold leading-tight tracking-[-0.04em] text-white sm:text-[36px] md:text-[42px]">
//               {children}
//             </h1>
//           );
//         },

//         h2({ children }) {
//           return (
//             <h2 className="mb-3 mt-5 text-[20px] font-semibold leading-tight text-white sm:text-[24px]">
//               {children}
//             </h2>
//           );
//         },

//         h3({ children }) {
//           return (
//             <h3 className="mb-2 mt-4 text-[18px] font-semibold leading-snug text-white sm:text-[20px]">
//               {children}
//             </h3>
//           );
//         },

//         p({ children }) {
//           return (
//             <p className="my-3 first:mt-0 last:mb-0 text-[15px] leading-7 text-slate-100">
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
//           return (
//             <ul className="my-3 list-disc space-y-1 pl-5 text-[15px] leading-7">
//               {children}
//             </ul>
//           );
//         },

//         ol({ children }) {
//           return (
//             <ol className="my-3 list-decimal space-y-1 pl-5 text-[15px] leading-7">
//               {children}
//             </ol>
//           );
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

// export default function MessageBubble({
//   message,
//   files = [],
//   isUser = false,
// }) {
//   const isLongAssistantMessage =
//     !isUser && (message.length > 220 || message.includes('```'));

//   return (
//     <div
//       className={clsx(
//         'flex w-full items-start',
//         isUser ? 'justify-end gap-2' : 'justify-start gap-2.5 sm:gap-3'
//       )}
//     >
//       {!isUser && (
//         <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#101827] text-[10px] font-semibold text-slate-300 shadow-md shadow-black/20 sm:h-9 sm:w-9 sm:text-[11px]">
//           AI
//         </div>
//       )}

//       <div
//         className={clsx(
//           'flex min-w-0 flex-col',
//           isUser ? 'items-end' : 'items-start'
//         )}
//         style={{
//           maxWidth: isUser
//             ? 'min(78%, 640px)'
//             : isLongAssistantMessage
//               ? 'min(92%, 920px)'
//               : 'min(78%, 740px)',
//         }}
//       >
//         <div
//           className={clsx(
//             'relative min-w-0 rounded-[18px] text-[15px] shadow-md transition-all',
//             isUser
//               ? 'w-fit bg-[#0b84ff] text-white shadow-blue-950/20'
//               : 'w-full border border-white/10 bg-[#151b26] text-slate-100 shadow-black/20'
//           )}
//           style={{
//             padding: isUser
//               ? '8px 14px'
//               : isLongAssistantMessage
//                 ? 'clamp(12px, 1.8vw, 16px) clamp(10px, 1.8vw, 16px)'
//                 : 'clamp(11px, 1.8vw, 16px) clamp(12px, 2vw, 18px)',
//             minHeight: '34px',
//           }}
//         >
//           {!isUser && (
//             <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />
//           )}

//           <FilePreviews files={files} />

//           {isUser ? (
//             message ? (
//               <p
//                 className="m-0 whitespace-pre-wrap wrap-break-word"
//                 style={{ lineHeight: '20px' }}
//               >
//                 {message}
//               </p>
//             ) : null
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
//   DocumentTextIcon,
//   EllipsisHorizontalIcon,
//   HandThumbDownIcon,
//   HandThumbUpIcon,
//   PlayIcon,
// } from '@heroicons/react/24/outline';
// import {
//   formatLanguage,
//   OpenCodeViewer,
//   runCodePreview,
// } from '../utils/openCodeViewer';

// function copyText(text) {
//   navigator.clipboard?.writeText(text);
// }

// function formatFileSize(size = 0) {
//   if (size < 1024) return `${size} B`;
//   if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
//   return `${(size / (1024 * 1024)).toFixed(1)} MB`;
// }

// function getFileExtension(name = '') {
//   const extension = name.split('.').pop();

//   if (!extension || extension === name) return 'FILE';

//   return extension.slice(0, 5).toUpperCase();
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
//     OpenCodeViewer(code, normalizedLanguage);
//   };

//   const handleRun = () => {
//     runCodePreview(code, normalizedLanguage);
//   };

//   return (
//     <div className="my-4 max-w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0b1020] shadow-lg shadow-black/25">
//       <div
//         className="flex h-11 items-center justify-between border-b border-white/10 bg-[#111827] sm:h-12"
//         style={{
//           paddingLeft: 'clamp(12px, 3vw, 22px)',
//           paddingRight: 'clamp(8px, 2vw, 14px)',
//         }}
//       >
//         <div className="flex min-w-0 items-center gap-2.5">
//           <CodeBracketIcon className="h-4 w-4 shrink-0 text-white/80 sm:h-4.5 sm:w-4.5" />

//           <span className="truncate text-[13px] font-semibold text-white sm:text-sm">
//             {formatLanguage(normalizedLanguage)}
//           </span>
//         </div>

//         <div className="flex shrink-0 items-center gap-0.5 text-white/70 sm:gap-1.5">
//           <button
//             type="button"
//             onClick={handleCopy}
//             aria-label="Copy code"
//             title="Copy code"
//             className="grid h-7 w-7 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white sm:h-8 sm:w-8"
//           >
//             <ClipboardDocumentIcon className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
//           </button>

//           <button
//             type="button"
//             onClick={handleZoom}
//             aria-label="Open code"
//             title="Open code"
//             className="grid h-7 w-7 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white sm:h-8 sm:w-8"
//           >
//             <ArrowsPointingOutIcon className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
//           </button>

//           <button
//             type="button"
//             onClick={handleRun}
//             aria-label="Run code"
//             title="Run code"
//             className="grid h-7 w-7 place-items-center rounded-full bg-white/8 transition hover:bg-white/14 hover:text-white sm:h-8 sm:w-8"
//           >
//             <PlayIcon className="h-4 w-4 translate-x-px sm:h-4.5 sm:w-4.5" />
//           </button>
//         </div>
//       </div>

//       {copied && (
//         <div className="border-b border-white/10 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-300">
//           Copied code
//         </div>
//       )}

//       <div className="max-w-full overflow-x-auto">
//         <SyntaxHighlighter
//           language={normalizedLanguage}
//           style={vscDarkPlus}
//           customStyle={{
//             margin: 0,
//             padding: 'clamp(12px, 3vw, 18px)',
//             background: '#0b1020',
//             fontSize: '13px',
//             lineHeight: '1.65',
//             minWidth: '100%',
//           }}
//           codeTagProps={{
//             style: {
//               fontFamily:
//                 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
//             },
//           }}
//           wrapLongLines={false}
//         >
//           {code}
//         </SyntaxHighlighter>
//       </div>
//     </div>
//   );
// }

// function MessageActions({ message }) {
//   return (
//     <div
//       className="flex items-center gap-1 text-white/55"
//       style={{ marginTop: '7px' }}
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

// function FilePreviews({ files = [], isUser = false }) {
//   if (files.length === 0) return null;

//   return (
//     <div
//       className={clsx(
//         'flex flex-wrap gap-3',
//         isUser ? 'justify-end' : 'justify-start'
//       )}
//     >
//       {files.map((item, index) => {
//         const isImage = item.type?.startsWith('image/') && item.previewUrl;

//         if (isImage) {
//           return (
//             <div
//               key={`${item.name}-${index}`}
//               className={clsx(
//                 'overflow-hidden rounded-[28px] shadow-lg transition-all',
//                 isUser
//                   ? 'w-[290px] bg-[#222222] shadow-black/30'
//                   : 'w-[260px] border border-white/10 bg-black/20 shadow-black/20'
//               )}
//             >
//               <div
//                 className={clsx(
//                   'flex w-full items-center justify-center overflow-hidden',
//                   isUser ? 'h-[290px] bg-[#222222]' : 'h-[240px] bg-black/20'
//                 )}
//               >
//                 <img
//                   src={item.previewUrl}
//                   alt={item.name}
//                   className="h-full w-full object-contain"
//                 />
//               </div>
//             </div>
//           );
//         }

//         return (
//           <div
//             key={`${item.name}-${index}`}
//             className={clsx(
//               'flex min-h-[72px] w-[240px] items-center gap-3 rounded-2xl border px-3 py-3 shadow-md transition-all',
//               isUser
//                 ? 'border-white/15 bg-[#222222] shadow-black/25'
//                 : 'border-white/10 bg-black/20 shadow-black/20'
//             )}
//           >
//             <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10">
//               <DocumentTextIcon className="h-5 w-5 text-white/80" />
//             </div>

//             <div className="min-w-0 flex-1">
//               <p className="truncate text-[13px] font-medium text-white/95">
//                 {item.name}
//               </p>

//               <div className="mt-1 flex items-center gap-1.5 text-[10px] text-white/60">
//                 <span className="rounded-full bg-white/10 px-2 py-0.5 font-medium uppercase tracking-wide">
//                   {getFileExtension(item.name)}
//                 </span>
//                 <span>{formatFileSize(item.size)}</span>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// function MarkdownMessage({ message }) {
//   return (
//     <ReactMarkdown
//       remarkPlugins={[remarkGfm]}
//       components={{
//         h1({ children }) {
//           return (
//             <h1 className="mb-4 text-[26px] font-semibold leading-tight tracking-[-0.04em] text-white sm:text-[36px] md:text-[42px]">
//               {children}
//             </h1>
//           );
//         },

//         h2({ children }) {
//           return (
//             <h2 className="mb-3 mt-5 text-[20px] font-semibold leading-tight text-white sm:text-[24px]">
//               {children}
//             </h2>
//           );
//         },

//         h3({ children }) {
//           return (
//             <h3 className="mb-2 mt-4 text-[18px] font-semibold leading-snug text-white sm:text-[20px]">
//               {children}
//             </h3>
//           );
//         },

//         p({ children }) {
//           return (
//             <p className="my-3 first:mt-0 last:mb-0 text-[15px] leading-7 text-slate-100">
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
//           return (
//             <ul className="my-3 list-disc space-y-1 pl-5 text-[15px] leading-7">
//               {children}
//             </ul>
//           );
//         },

//         ol({ children }) {
//           return (
//             <ol className="my-3 list-decimal space-y-1 pl-5 text-[15px] leading-7">
//               {children}
//             </ol>
//           );
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

// export default function MessageBubble({
//   message,
//   files = [],
//   isUser = false,
// }) {
//   const isLongAssistantMessage =
//     !isUser && (message.length > 220 || message.includes('```'));

//   const hasFiles = files.length > 0;

//   return (
//     <div
//       className={clsx(
//         'flex w-full items-start',
//         isUser ? 'justify-end gap-2' : 'justify-start gap-2.5 sm:gap-3'
//       )}
//     >
//       {!isUser && (
//         <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#101827] text-[10px] font-semibold text-slate-300 shadow-md shadow-black/20 sm:h-9 sm:w-9 sm:text-[11px]">
//           AI
//         </div>
//       )}

//       <div
//         className={clsx(
//           'flex min-w-0 flex-col',
//           isUser ? 'items-end' : 'items-start'
//         )}
//         style={{
//           maxWidth: isUser
//             ? hasFiles
//               ? 'min(86%, 640px)'
//               : 'min(78%, 640px)'
//             : isLongAssistantMessage
//               ? 'min(92%, 920px)'
//               : 'min(78%, 740px)',
//         }}
//       >
//         <div
//           className={clsx(
//             'relative min-w-0 text-[15px] shadow-md transition-all',
//             isUser
//               ? hasFiles
//                 ? 'w-fit bg-transparent text-white shadow-none'
//                 : 'w-fit rounded-[18px] bg-[#0b84ff] text-white shadow-blue-950/20'
//               : 'w-full rounded-[18px] border border-white/10 bg-[#151b26] text-slate-100 shadow-black/20'
//           )}
//           style={{
//             padding: isUser
//               ? hasFiles
//                 ? '0'
//                 : '10px 14px'
//               : isLongAssistantMessage
//                 ? 'clamp(12px, 1.8vw, 16px) clamp(10px, 1.8vw, 16px)'
//                 : 'clamp(11px, 1.8vw, 16px) clamp(12px, 2vw, 18px)',
//             minHeight: hasFiles && isUser ? '0px' : '34px',
//           }}
//         >
//           {!isUser && (
//             <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />
//           )}

//           <FilePreviews files={files} isUser={isUser} />

//           {isUser ? (
//             message ? (
//               <p
//                 className={clsx(
//                   'm-0 whitespace-pre-wrap wrap-break-word',
//                   hasFiles
//                     ? 'mt-2 rounded-full bg-[#0b84ff] px-5 py-2.5 text-[15px] shadow-md shadow-blue-950/20'
//                     : ''
//                 )}
//                 style={{ lineHeight: '20px' }}
//               >
//                 {message}
//               </p>
//             ) : null
//           ) : (
//             <div
//               className={clsx(
//                 hasFiles ? 'mt-3' : '',
//                 'prose prose-invert max-w-none prose-pre:m-0 prose-pre:bg-transparent'
//               )}
//             >
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
  DocumentTextIcon,
  EllipsisHorizontalIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
  PlayIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import {
  formatLanguage,
  OpenCodeViewer,
  runCodePreview,
} from '../utils/openCodeViewer';

function copyText(text) {
  navigator.clipboard?.writeText(text);
}

function formatFileSize(size = 0) {
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

function getFileExtension(name = '') {
  const extension = name.split('.').pop();

  if (!extension || extension === name) return 'FILE';

  return extension.slice(0, 5).toUpperCase();
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
    OpenCodeViewer(code, normalizedLanguage);
  };

  const handleRun = () => {
    runCodePreview(code, normalizedLanguage);
  };

  return (
    <div className="my-4 max-w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0b1020] shadow-lg shadow-black/25">
      <div
        className="flex h-11 items-center justify-between border-b border-white/10 bg-[#111827] sm:h-12"
        style={{
          paddingLeft: 'clamp(12px, 3vw, 22px)',
          paddingRight: 'clamp(8px, 2vw, 14px)',
        }}
      >
        <div className="flex min-w-0 items-center gap-2.5">
          <CodeBracketIcon className="h-4 w-4 shrink-0 text-white/80 sm:h-4.5 sm:w-4.5" />

          <span className="truncate text-[13px] font-semibold text-white sm:text-sm">
            {formatLanguage(normalizedLanguage)}
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-0.5 text-white/70 sm:gap-1.5">
          <button
            type="button"
            onClick={handleCopy}
            aria-label="Copy code"
            title="Copy code"
            className="grid h-7 w-7 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white sm:h-8 sm:w-8"
          >
            <ClipboardDocumentIcon className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
          </button>

          <button
            type="button"
            onClick={handleZoom}
            aria-label="Open code"
            title="Open code"
            className="grid h-7 w-7 place-items-center rounded-lg transition hover:bg-white/10 hover:text-white sm:h-8 sm:w-8"
          >
            <ArrowsPointingOutIcon className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
          </button>

          <button
            type="button"
            onClick={handleRun}
            aria-label="Run code"
            title="Run code"
            className="grid h-7 w-7 place-items-center rounded-full bg-white/8 transition hover:bg-white/14 hover:text-white sm:h-8 sm:w-8"
          >
            <PlayIcon className="h-4 w-4 translate-x-px sm:h-4.5 sm:w-4.5" />
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
            padding: 'clamp(12px, 3vw, 18px)',
            background: '#0b1020',
            fontSize: '13px',
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
      style={{ marginTop: '7px' }}
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

function ImageZoomModal({ image, onClose }) {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-md"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        aria-label="Close image preview"
      >
        <XMarkIcon className="h-5 w-5" />
      </button>

      <img
        src={image.previewUrl}
        alt={image.name}
        className="max-h-[88vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl shadow-black/60"
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );
}

function FilePreviews({ files = [], isUser = false, onImageClick = () => {} }) {
  if (files.length === 0) return null;

  const imageFiles = files.filter(
    (item) => item.type?.startsWith('image/') && item.previewUrl
  );

  const otherFiles = files.filter(
    (item) => !(item.type?.startsWith('image/') && item.previewUrl)
  );

  const compactImages = imageFiles.length >= 3;

  return (
    <div
      className={clsx(
        'flex w-full flex-col gap-2.5',
        isUser ? 'items-end' : 'items-start'
      )}
    >
      {imageFiles.length > 0 && (
        <div
          className={clsx(
            'flex flex-wrap gap-2.5',
            isUser ? 'justify-end' : 'justify-start'
          )}
          style={{
            maxWidth: compactImages ? 'min(82vw, 420px)' : 'min(68vw, 230px)',
          }}
        >
          {imageFiles.map((item, index) => (
            <button
              key={`${item.name}-${index}`}
              type="button"
              onClick={() => onImageClick(item)}
              className={clsx(
                'group overflow-hidden bg-[#222222] shadow-lg shadow-black/30 transition hover:brightness-110',
                compactImages ? 'rounded-2xl' : 'rounded-[22px]'
              )}
              style={{
                width: compactImages
                  ? 'clamp(76px, 22vw, 118px)'
                  : 'min(68vw, 230px)',
              }}
              aria-label="Open uploaded image"
            >
              <img
                src={item.previewUrl}
                alt={item.name}
                className="block w-full object-cover"
                style={{
                  height: compactImages
                    ? 'clamp(82px, 22vw, 118px)'
                    : 'auto',
                  maxHeight: compactImages
                    ? '118px'
                    : 'min(36vh, 300px)',
                }}
              />
            </button>
          ))}
        </div>
      )}

      {otherFiles.length > 0 && (
        <div
          className={clsx(
            'flex w-full flex-col gap-2',
            isUser ? 'items-end' : 'items-start'
          )}
        >
          {otherFiles.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className={clsx(
                'flex min-h-[68px] items-center gap-3 rounded-2xl border px-3 py-3 shadow-md transition-all',
                isUser
                  ? 'border-white/12 bg-black/35 shadow-black/25'
                  : 'border-white/10 bg-black/20 shadow-black/20'
              )}
              style={{
                width: 'min(76vw, 360px)',
              }}
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-red-500 text-white shadow-md shadow-red-950/20">
                <DocumentTextIcon className="h-6 w-6" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-[14px] font-semibold leading-5 text-white">
                  {item.name}
                </p>

                <div className="mt-1 flex items-center gap-2 text-[12px] text-white/70">
                  <span className="font-medium uppercase">
                    {getFileExtension(item.name)}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-white/35" />
                  <span>{formatFileSize(item.size)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
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
            <h1 className="mb-4 text-[26px] font-semibold leading-tight tracking-[-0.04em] text-white sm:text-[36px] md:text-[42px]">
              {children}
            </h1>
          );
        },

        h2({ children }) {
          return (
            <h2 className="mb-3 mt-5 text-[20px] font-semibold leading-tight text-white sm:text-[24px]">
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

function UserTextMessage({ message = '', hasFiles = false }) {
  const [expanded, setExpanded] = useState(false);

  const isLongText = message.length > 420 || message.split('\n').length > 8;

  if (!message) return null;

  return (
    <div
      className={clsx(
        'relative ml-auto overflow-hidden rounded-[28px] bg-[#0b84ff] px-5 py-3 text-[15px] text-white shadow-md shadow-blue-950/20',
        hasFiles ? 'mt-2' : '',
        isLongText && !expanded ? 'max-h-[220px]' : ''
      )}
      style={{
        width: 'fit-content',
        maxWidth: 'min(72vw, 620px)',
      }}
    >
      <p className="m-0 whitespace-pre-wrap break-words leading-6">
        {message}
      </p>

      {isLongText && !expanded && (
        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#0b84ff] via-[#0b84ff]/95 to-transparent px-5 pb-3 pt-14">
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="text-sm font-semibold text-white transition hover:opacity-80"
          >
            Show more⌄
          </button>
        </div>
      )}
    </div>
  );
}

export default function MessageBubble({
  message,
  files = [],
  isUser = false,
}) {
  const [zoomImage, setZoomImage] = useState(null);

  const isLongAssistantMessage =
    !isUser && (message.length > 220 || message.includes('```'));

  const hasFiles = files.length > 0;

  return (
    <>
      <ImageZoomModal image={zoomImage} onClose={() => setZoomImage(null)} />

      <div
        className={clsx(
          'flex w-full items-start',
          isUser ? 'justify-end gap-2' : 'justify-start gap-2.5 sm:gap-3'
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
            maxWidth: isUser
              ? hasFiles
                ? 'min(78%, 560px)'
                : 'min(78%, 680px)'
              : isLongAssistantMessage
                ? 'min(92%, 920px)'
                : 'min(78%, 740px)',
          }}
        >
          <div
            className={clsx(
              'relative min-w-0 text-[15px] transition-all',
              isUser
                ? hasFiles
                  ? 'w-fit bg-transparent text-white shadow-none'
                  : 'w-fit'
                : 'w-full rounded-[18px] border border-white/10 bg-[#151b26] text-slate-100 shadow-md shadow-black/20'
            )}
            style={{
              padding: isUser
                ? '0'
                : isLongAssistantMessage
                  ? 'clamp(12px, 1.8vw, 16px) clamp(10px, 1.8vw, 16px)'
                  : 'clamp(11px, 1.8vw, 16px) clamp(12px, 2vw, 18px)',
              minHeight: hasFiles && isUser ? '0px' : '34px',
            }}
          >
            {!isUser && (
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />
            )}

            <FilePreviews
              files={files}
              isUser={isUser}
              onImageClick={setZoomImage}
            />

            {isUser ? (
              <UserTextMessage message={message} hasFiles={hasFiles} />
            ) : (
              <div
                className={clsx(
                  hasFiles ? 'mt-3' : '',
                  'prose prose-invert max-w-none prose-pre:m-0 prose-pre:bg-transparent'
                )}
              >
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
    </>
  );
}