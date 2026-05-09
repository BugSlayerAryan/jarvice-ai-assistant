
import React from "react";
import { ChatProvider } from "./src/context/ChatContext";
import ChatWindow from "./src/components/ChatWindow";

export default function App() {
  return (
    <ChatProvider>
      <ChatWindow />
    </ChatProvider>
  );
}