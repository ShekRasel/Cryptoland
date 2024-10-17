// FadeUpComponent.js
import React from 'react';
import useFadeUpOnScroll from '../CustomHooks/useFadeUpOnScroll';

const FadeUpComponent = ({children}) => {
  const { ref, isVisible } = useFadeUpOnScroll();

  return (
    <div
      ref={ref}
      className={`transition-all ease-out duration-1000 ${
        isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-32 opacity-0'
      }`}
    >
     {children}
    </div>
  );
};

export default FadeUpComponent;
