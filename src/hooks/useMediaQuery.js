import { useEffect, useState } from "react";

export const mediaQueryPoints = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
};

export default function useMediaQuery(query) {
  const getMatch = () => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState(getMatch);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const m = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    if (m.addEventListener) m.addEventListener("change", handler);
    else m.addListener(handler);
    setMatches(m.matches);
    return () => {
      if (m.removeEventListener) m.removeEventListener("change", handler);
      else m.removeListener(handler);
    };
  }, [query]);

  return matches;
}
