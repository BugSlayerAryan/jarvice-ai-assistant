import { useEffect, useRef } from "react";

/**
 * useAutoScroll - Custom hook for auto-scrolling to the latest message.
 * @param {Array} deps - Dependency array (e.g., messages)
 * @returns {object} ref to attach to the scroll container
 */
export default function useAutoScroll(deps = []) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      // Smooth scroll to bottom
      el.scrollTo({
        top: el.scrollHeight,
        behavior: "smooth",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return scrollRef;
}

