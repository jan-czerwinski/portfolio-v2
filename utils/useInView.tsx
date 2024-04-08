import { useEffect, useState } from "react";

export const useInView = (id: string) => {
  const [inView, setIsInView] = useState(false);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin
      threshold: 0.5, // Trigger when half or more of the target is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsInView(entry.isIntersecting);
      });
    }, options);

    const target = document.getElementById(id);
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [id]);

  return { inView };
};
