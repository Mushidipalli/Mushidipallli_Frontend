import { useState, useEffect } from 'react';

const useIntersection = (element, rootMargin,customThreshold) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin,threshold:customThreshold }
    );

    const currentElement = element.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [element, rootMargin, customThreshold]);

  return isVisible;
};

export default useIntersection;