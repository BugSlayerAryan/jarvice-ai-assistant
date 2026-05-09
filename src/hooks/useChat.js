import { useState, useCallback } from "react";
import { sendMessage } from "../services/chatApi";
import { formatMessage } from "../utils/formatMessage";

export default function useChat(initialMessages = []) {
  const [messages, setMessages] = useState(initialMessages);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendUserMessage = useCallback(
    async (text) => {
      const trimmedText = text.trim();

      if (!trimmedText || loading) {
        return;
      }

      setError(null);

      const userMessage = formatMessage({
        role: "user",
        content: trimmedText,
      });

      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setLoading(true);

      try {
        const assistantMessage = await sendMessage(trimmedText);

        setMessages((prevMessages) => [
          ...prevMessages,
          assistantMessage,
        ]);
      } catch (err) {
        const errorMessage =
          err.message || "Something went wrong. Please try again.";

        setError(errorMessage);

        const assistantErrorMessage = formatMessage({
          role: "assistant",
          content: errorMessage,
        });

        setMessages((prevMessages) => [
          ...prevMessages,
          assistantErrorMessage,
        ]);
      } finally {
        setLoading(false);
      }
    },
    [loading]
  );

  const clearConversation = useCallback(() => {
    setMessages([]);
    setError(null);
    setLoading(false);
  }, []);

  return {
    messages,
    loading,
    error,
    sendUserMessage,
    clearConversation,
    setMessages,
  };
}