// import React, { useState } from 'react';
// import ChatMessages from './ChatMessages';
// import ChatInput from './ChatInput';
// import { sendMessage } from '../../services/chatApi';

// export default function ChatContainer() {
//   const [messages, setMessages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSendMessage = async (message) => {
//     const trimmedMessage = message.trim();

//     if (!trimmedMessage || isLoading) return;

//     setMessages((prev) => [
//       ...prev,
//       {
//         text: trimmedMessage,
//         sender: 'user',
//       },
//     ]);

//     setIsLoading(true);

//     try {
//       const assistantMessage = await sendMessage(trimmedMessage);

//       setMessages((prev) => [
//         ...prev,
//         {
//           text: assistantMessage.content,
//           sender: 'bot',
//         },
//       ]);
//     } catch (error) {
//       setMessages((prev) => [
//         ...prev,
//         {
//           text: error.message || 'Sorry, something went wrong.',
//           sender: 'bot',
//         },
//       ]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <section className="relative flex h-full min-h-0 flex-col overflow-hidden bg-[#0b0f19]">
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.10),transparent_34%),radial-gradient(circle_at_bottom,rgba(34,197,94,0.05),transparent_25%)]" />

//       <div className="relative z-10 flex h-full min-h-0 flex-col overflow-hidden">
//         {/* Extra bottom padding so messages do not hide behind floating input */}
//         <div className="min-h-0 flex-1 overflow-hidden pb-27.5">
//           <ChatMessages
//             messages={messages}
//             isLoading={isLoading}
//             onSuggestionClick={handleSendMessage}
//           />
//         </div>

//         <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
//       </div>
//     </section>
//   );
// }



import React, { useState } from 'react';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import { sendMessage } from '../../services/chatApi';

export default function ChatContainer() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (message) => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage || isLoading) return;

    setMessages((prev) => [
      ...prev,
      {
        text: trimmedMessage,
        sender: 'user',
      },
    ]);

    setIsLoading(true);

    try {
      const assistantMessage = await sendMessage(trimmedMessage);

      setMessages((prev) => [
        ...prev,
        {
          text: assistantMessage.content,
          sender: 'bot',
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          text: error.message || 'Sorry, something went wrong.',
          sender: 'bot',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative flex h-[calc(100dvh-56px)] min-h-0 flex-col overflow-hidden bg-[#0b0f19] lg:h-[calc(100dvh-64px)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.10),transparent_34%),radial-gradient(circle_at_bottom,rgba(34,197,94,0.05),transparent_25%)]" />

      <div className="relative z-10 flex h-full min-h-0 flex-col overflow-hidden">
        <div className="min-h-0 flex-1 overflow-hidden">
          <ChatMessages
            messages={messages}
            isLoading={isLoading}
            onSuggestionClick={handleSendMessage}
          />
        </div>

        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    </section>
  );
}