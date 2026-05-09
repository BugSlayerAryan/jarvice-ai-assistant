/**
 * Format timestamp to readable format
 */
export const formatTime = (date) => {
  return date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
};

/**
 * Format timestamp to full date/time
 */
export const formatDateTime = (date) => {
  return date.toLocaleDateString([], {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

/**
 * Truncate long messages
 */
export const truncateMessage = (text, maxLength = 100) => {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

/**
 * Check if message contains emoji
 */
export const hasEmoji = (text) => {
  const emojiRegex =
    /(\u00d7|\u20e3|[\u0d800-\udbff][\udc00-\udfff]|[\u2600-\u27b0]|\u24c2|\u3030)/g;
  return emojiRegex.test(text);
};

/**
 * Generate random ID for messages
 */
export const generateId = () => {
  return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Validate message before sending
 */
export const validateMessage = (message) => {
  if (!message) return { valid: false, error: 'Message cannot be empty' };
  if (message.trim().length === 0) return { valid: false, error: 'Message cannot be blank' };
  if (message.length > 5000) return { valid: false, error: 'Message too long (max 5000 chars)' };
  return { valid: true };
};

/**
 * Parse message for special commands
 */
export const parseCommand = (message) => {
  if (message.startsWith('/')) {
    const [command, ...args] = message.slice(1).split(' ');
    return { isCommand: true, command, args };
  }
  return { isCommand: false };
};
