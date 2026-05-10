


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








// import React, { useEffect, useRef, useState } from 'react';
// import {
//   ArrowUpIcon,
//   MicrophoneIcon,
//   PaperClipIcon,
// } from '@heroicons/react/24/outline';

// export default function ChatInput({
//   onSendMessage = () => {},
//   isLoading = false,
//   keyboardHeight = 0,
// }) {
//   const [message, setMessage] = useState('');
//   const textareaRef = useRef(null);

//   const keyboardOpen = keyboardHeight > 80;

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
//     <div
//       className="pointer-events-none absolute inset-x-0 z-30 flex justify-center px-3 sm:px-6"
//       style={{
//         bottom: keyboardOpen
//           ? `${keyboardHeight + 8}px`
//           : 'calc(env(safe-area-inset-bottom) + 12px)',
//       }}
//     >
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
//             className="hide-scrollbar min-h-9 max-h-28 flex-1 resize-none overflow-y-auto bg-transparent px-4 py-2 text-[16px] leading-5 text-white placeholder:text-white/40 focus:outline-none sm:max-h-35 sm:text-[15px] sm:leading-6"
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







// import React, { useEffect, useRef, useState } from 'react';
// import {
//   ArrowUpIcon,
//   MicrophoneIcon,
//   PaperClipIcon,
//   XMarkIcon,
// } from '@heroicons/react/24/outline';

// export default function ChatInput({
//   onSendMessage = () => {},
//   isLoading = false,
//   keyboardHeight = 0,
// }) {
//   const [message, setMessage] = useState('');
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [isListening, setIsListening] = useState(false);

//   const textareaRef = useRef(null);
//   const fileInputRef = useRef(null);
//   const recognitionRef = useRef(null);

//   const keyboardOpen = keyboardHeight > 80;

//   useEffect(() => {
//     const textarea = textareaRef.current;

//     if (!textarea) return;

//     textarea.style.height = '0px';
//     textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
//   }, [message]);

//   useEffect(() => {
//     const SpeechRecognition =
//       window.SpeechRecognition || window.webkitSpeechRecognition;

//     if (!SpeechRecognition) return;

//     const recognition = new SpeechRecognition();

//     recognition.continuous = false;
//     recognition.interimResults = true;
//     recognition.lang = 'en-US';

//     recognition.onresult = (event) => {
//       let transcript = '';

//       for (let i = event.resultIndex; i < event.results.length; i += 1) {
//         transcript += event.results[i][0].transcript;
//       }

//       setMessage((prev) => {
//         const nextText = transcript.trim();

//         if (!prev.trim()) return nextText;

//         return `${prev.trim()} ${nextText}`;
//       });
//     };

//     recognition.onend = () => {
//       setIsListening(false);
//     };

//     recognition.onerror = () => {
//       setIsListening(false);
//     };

//     recognitionRef.current = recognition;

//     return () => {
//       recognition.stop();
//     };
//   }, []);

//   useEffect(() => {
//     return () => {
//       selectedFiles.forEach((item) => {
//         if (item.previewUrl) {
//           URL.revokeObjectURL(item.previewUrl);
//         }
//       });
//     };
//   }, [selectedFiles]);

//   const handleSend = () => {
//     const nextMessage = message.trim();

//     if ((!nextMessage && selectedFiles.length === 0) || isLoading) return;

//     onSendMessage(nextMessage, selectedFiles);

//     setMessage('');
//     setSelectedFiles([]);
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === 'Enter' && !event.shiftKey) {
//       event.preventDefault();
//       handleSend();
//     }
//   };

//   const handleAttachmentClick = () => {
//     fileInputRef.current?.click();
//   };

//   const handleFileChange = (event) => {
//     const files = Array.from(event.target.files || []);

//     if (files.length === 0) return;

//     const nextFiles = files.map((file) => ({
//       file,
//       name: file.name,
//       size: file.size,
//       type: file.type,
//       previewUrl: file.type.startsWith('image/')
//         ? URL.createObjectURL(file)
//         : null,
//     }));

//     setSelectedFiles((prev) => [...prev, ...nextFiles]);

//     event.target.value = '';
//   };

//   const removeFile = (indexToRemove) => {
//     setSelectedFiles((prev) => {
//       const fileToRemove = prev[indexToRemove];

//       if (fileToRemove?.previewUrl) {
//         URL.revokeObjectURL(fileToRemove.previewUrl);
//       }

//       return prev.filter((_, index) => index !== indexToRemove);
//     });
//   };

//   const handleVoiceInput = () => {
//     const recognition = recognitionRef.current;

//     if (!recognition) {
//       alert('Voice input is not supported in this browser.');
//       return;
//     }

//     if (isListening) {
//       recognition.stop();
//       setIsListening(false);
//       return;
//     }

//     setIsListening(true);
//     recognition.start();
//   };

//   const canSend = message.trim() || selectedFiles.length > 0;

//   return (
//     <div
//       className="pointer-events-none absolute inset-x-0 z-30 flex justify-center px-3 sm:px-6"
//       style={{
//         bottom: keyboardOpen
//           ? `${keyboardHeight + 8}px`
//           : 'calc(env(safe-area-inset-bottom) + 12px)',
//       }}
//     >
//       <div className="pointer-events-auto w-full max-w-[896px]">
//         {selectedFiles.length > 0 && (
//           <div className="mb-2 flex max-h-24 gap-2 overflow-x-auto rounded-2xl border border-white/10 bg-[#111827]/90 p-2 backdrop-blur-xl">
//             {selectedFiles.map((item, index) => (
//               <div
//                 key={`${item.name}-${index}`}
//                 className="relative flex min-w-[120px] max-w-[180px] items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-2 py-2"
//               >
//                 {item.previewUrl ? (
//                   <img
//                     src={item.previewUrl}
//                     alt={item.name}
//                     className="h-10 w-10 rounded-lg object-cover"
//                   />
//                 ) : (
//                   <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/10 text-[10px] font-semibold text-white/70">
//                     FILE
//                   </div>
//                 )}

//                 <div className="min-w-0 flex-1">
//                   <p className="truncate text-xs font-medium text-white/85">
//                     {item.name}
//                   </p>
//                   <p className="text-[10px] text-white/45">
//                     {(item.size / 1024).toFixed(1)} KB
//                   </p>
//                 </div>

//                 <button
//                   type="button"
//                   onClick={() => removeFile(index)}
//                   className="grid h-6 w-6 shrink-0 place-items-center rounded-lg text-white/55 transition hover:bg-white/10 hover:text-white"
//                   aria-label="Remove file"
//                 >
//                   <XMarkIcon className="h-4 w-4" />
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}

//         <div className="flex min-h-12 w-full items-center gap-2 rounded-2xl border border-white/10 bg-[#111827]/90 px-3 py-2 shadow-[0_16px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:min-h-14 sm:px-4">
//           <input
//             ref={fileInputRef}
//             type="file"
//             multiple
//             accept="image/*,.pdf,.doc,.docx,.txt,.csv,.xlsx,.ppt,.pptx"
//             onChange={handleFileChange}
//             className="hidden"
//           />

//           <button
//             type="button"
//             onClick={handleAttachmentClick}
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
//             placeholder={isListening ? 'Listening...' : 'Ask anything...'}
//             rows={1}
//             className="hide-scrollbar min-h-9 max-h-28 flex-1 resize-none overflow-y-auto bg-transparent px-4 py-2 text-[16px] leading-5 text-white placeholder:text-white/40 focus:outline-none sm:max-h-35 sm:text-[15px] sm:leading-6"
//           />

//           <button
//             type="button"
//             onClick={handleVoiceInput}
//             className={`relative grid h-9 w-9 shrink-0 place-items-center rounded-xl text-white/70 transition hover:bg-white/8 hover:text-white ${
//               isListening ? 'bg-red-500/15 text-red-300' : ''
//             }`}
//             aria-label={isListening ? 'Stop voice input' : 'Voice input'}
//           >
//             {isListening && (
//               <>
//                 <span className="absolute inset-0 animate-ping rounded-xl border border-red-400/50" />
//                 <span className="absolute -top-8 rounded-full border border-red-400/20 bg-red-500/20 px-2 py-0.5 text-[10px] font-medium text-red-200">
//                   Listening
//                 </span>
//               </>
//             )}

//             <MicrophoneIcon className="relative z-10 h-4.5 w-4.5" />
//           </button>

//           <button
//             type="button"
//             onClick={handleSend}
//             disabled={!canSend || isLoading}
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
  DocumentTextIcon,
  MicrophoneIcon,
  PaperClipIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

function formatFileSize(size = 0) {
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

function getFileExtension(name = '') {
  const extension = name.split('.').pop();

  if (!extension || extension === name) return 'FILE';

  return extension.slice(0, 4).toUpperCase();
}

function readFileAsDataUrl(file) {
  return new Promise((resolve) => {
    if (!file.type.startsWith('image/')) {
      resolve(null);
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = () => {
      resolve(null);
    };

    reader.readAsDataURL(file);
  });
}

export default function ChatInput({
  onSendMessage = () => {},
  isLoading = false,
  keyboardHeight = 0,
}) {
  const [message, setMessage] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isListening, setIsListening] = useState(false);

  const textareaRef = useRef(null);
  const fileInputRef = useRef(null);
  const recognitionRef = useRef(null);

  const keyboardOpen = keyboardHeight > 80;

  useEffect(() => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    textarea.style.height = '0px';
    textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
  }, [message]);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      let transcript = '';

      for (let i = event.resultIndex; i < event.results.length; i += 1) {
        transcript += event.results[i][0].transcript;
      }

      setMessage((prev) => {
        const nextText = transcript.trim();

        if (!prev.trim()) return nextText;

        return `${prev.trim()} ${nextText}`;
      });
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.stop();
    };
  }, []);

  const handleSend = () => {
    const nextMessage = message.trim();

    if ((!nextMessage && selectedFiles.length === 0) || isLoading) return;

    onSendMessage(nextMessage, selectedFiles);

    setMessage('');
    setSelectedFiles([]);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  const handleAttachmentClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event) => {
    const files = Array.from(event.target.files || []);

    if (files.length === 0) return;

    const nextFiles = await Promise.all(
      files.map(async (file) => ({
        file,
        name: file.name,
        size: file.size,
        type: file.type,
        previewUrl: await readFileAsDataUrl(file),
      }))
    );

    setSelectedFiles((prev) => [...prev, ...nextFiles]);

    event.target.value = '';
  };

  const removeFile = (indexToRemove) => {
    setSelectedFiles((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleVoiceInput = () => {
    const recognition = recognitionRef.current;

    if (!recognition) {
      alert('Voice input is not supported in this browser.');
      return;
    }

    if (isListening) {
      recognition.stop();
      setIsListening(false);
      return;
    }

    setIsListening(true);
    recognition.start();
  };

  const canSend = message.trim() || selectedFiles.length > 0;

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
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111827]/90 shadow-[0_16px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          {selectedFiles.length > 0 && (
            <div className="border-b border-white/10 px-3 pb-2 pt-3 sm:px-4">
              <div className="hide-scrollbar flex gap-2 overflow-x-auto">
                {selectedFiles.map((item, index) => {
                  const isImage = item.type.startsWith('image/') && item.previewUrl;

                  return (
                    <div
                      key={`${item.name}-${index}`}
                      className="group relative flex h-16 min-w-[180px] max-w-[220px] shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] p-2 transition hover:bg-white/[0.07]"
                    >
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="absolute -right-1.5 -top-1.5 grid h-5 w-5 place-items-center rounded-full bg-[#2a3140] text-white/75 shadow-md transition hover:bg-red-500 hover:text-white"
                        aria-label="Remove attachment"
                      >
                        <XMarkIcon className="h-3.5 w-3.5" />
                      </button>

                      {isImage ? (
                        <div className="h-11 w-11 shrink-0 overflow-hidden rounded-lg bg-white/8">
                          <img
                            src={item.previewUrl}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white/8">
                          <DocumentTextIcon className="h-5 w-5 text-white/70" />
                        </div>
                      )}

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[13px] font-medium leading-5 text-white/90">
                          {item.name}
                        </p>

                        <div className="flex items-center gap-1.5">
                          <span className="text-[11px] font-medium uppercase text-white/45">
                            {getFileExtension(item.name)}
                          </span>
                          <span className="h-1 w-1 rounded-full bg-white/25" />
                          <span className="text-[11px] text-white/45">
                            {formatFileSize(item.size)}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="flex min-h-12 w-full items-center gap-2 px-3 py-2 sm:min-h-14 sm:px-4">
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*,.pdf,.doc,.docx,.txt,.csv,.xlsx,.ppt,.pptx"
              onChange={handleFileChange}
              className="hidden"
            />

            <button
              type="button"
              onClick={handleAttachmentClick}
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
              placeholder={isListening ? 'Listening...' : 'Ask anything...'}
              rows={1}
              className="hide-scrollbar min-h-9 max-h-28 flex-1 resize-none overflow-y-auto bg-transparent px-4 py-2 text-[16px] leading-5 text-white placeholder:text-white/40 focus:outline-none sm:max-h-35 sm:text-[15px] sm:leading-6"
            />

            <button
              type="button"
              onClick={handleVoiceInput}
              className={`relative grid h-9 w-9 shrink-0 place-items-center rounded-xl text-white/70 transition hover:bg-white/8 hover:text-white ${
                isListening ? 'bg-red-500/15 text-red-300' : ''
              }`}
              aria-label={isListening ? 'Stop voice input' : 'Voice input'}
            >
              {isListening && (
                <>
                  <span className="absolute inset-0 animate-ping rounded-xl border border-red-400/50" />
                  <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-400" />
                </>
              )}

              <MicrophoneIcon className="relative z-10 h-4.5 w-4.5" />
            </button>

            <button
              type="button"
              onClick={handleSend}
              disabled={!canSend || isLoading}
              aria-label="Send message"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:text-white/40"
            >
              <ArrowUpIcon className="h-4.5 w-4.5 stroke-[2.4]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}