export const sendChatMessage = async (message, apiUrl = '/api/chat') => {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Chat service error:', error);
    throw error;
  }
};

export const mockChatResponse = async (message) => {
  const responses = {
    hello: "Hi there! How can I assist you today?",
    hi: "Hey! What can I help you with?",
    help: "I'm here to help! Feel free to ask me anything.",
    how: "I'm doing great, thanks for asking! How can I help?",
    default: `I received your message: "${message}". This is a mock response. Connect to a real API to get smart responses!`,
  };

  const key = message.toLowerCase().match(/hello|hi|help|how/) || 'default';
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ reply: responses[key[0]] || responses.default });
    }, 500);
  });
};
