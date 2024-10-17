// FadeUpComponent.js
import React from 'react';
import useFadeUpOnScroll from '../CustomHooks/useFadeUpOnScroll';

const FadeUpComponent = ({children, delay = 0}) => {
  const { ref, isVisible } = useFadeUpOnScroll();

  return (
    <div
      ref={ref}
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(80px)',
        opacity: isVisible ? 1 : 0,
        transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeUpComponent;
