import { useState, useEffect } from "react";

/**
 * Returns true when the page has been scrolled past the given threshold (in px).
 * Useful for toggling header styles when the user scrolls down.
 */
export function useScrolled(threshold = 20): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);

    // Set the correct initial value before any scroll event fires
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
