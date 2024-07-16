import { useRef, useCallback } from "react";

const useScrollTo = () => {
  const elementRef = useRef(null);

  const scrollToElement = useCallback(() => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return [elementRef, scrollToElement];
};

export default useScrollTo;
