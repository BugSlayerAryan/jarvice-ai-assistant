import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import AppLayout from './components/layout/AppLayout';
import ChatContainer from './components/chat/ChatContainer';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

function App() {
  const [chatKey, setChatKey] = useState(0);

  const handleNewChat = () => {
    setChatKey((prev) => prev + 1);
  };

  return (
    <>
      <AppLayout onNewChat={handleNewChat}>
        <ChatContainer key={chatKey} />
      </AppLayout>

      <ToastContainer
        position="top-right"
        autoClose={2800}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
        toastClassName="!rounded-2xl !bg-[#111827] !text-white !border !border-white/10 !shadow-2xl"
        progressClassName="!bg-blue-500"
      />
    </>
  );
}

export default App;