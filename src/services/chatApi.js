const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export async function sendMessage(message) {
  const trimmedMessage = message.trim();

  if (!trimmedMessage) {
    throw new Error("Message is required.");
  }

  const response = await fetch(`${API_BASE_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: trimmedMessage,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error || "Backend error");
  }

  if (!data?.reply) {
    throw new Error("No reply from backend");
  }

  return {
    id: `assistant_${Date.now()}`,
    role: "assistant",
    content: data.reply,
    timestamp: new Date().toISOString(),
  };
}