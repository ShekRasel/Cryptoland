// useFadeUpOnScroll.js
import { useEffect, useRef, useState } from 'react';

const useFadeUpOnScroll = () => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const { top, bottom } = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Check if the element is in the viewport
    if (top < windowHeight && bottom > 0) {
      setIsVisible(true);
    //   window.removeEventListener('scroll', handleScroll); // Remove listener after visibility
    }else {
        setIsVisible(false); // Set to false when out of viewport
      }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Clean up
  }, []);

  return { ref, isVisible };
};

export default useFadeUpOnScroll;
