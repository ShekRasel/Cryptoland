// FadeUpComponent.js
import React from 'react';
import useFadeUpOnScroll from '../CustomHooks/useFadeUpOnScroll';

const GrowUpElem = ({children}) => {
  const { ref, isVisible } = useFadeUpOnScroll();

  return (
    <div
      ref={ref}
      className={`transition-all ease-out duration-1000 ${
        isVisible ? 'transform scale-100 opacity-100' : 'transform scale-0 opacity-0'
      }`}
    >
     {children}
    </div>
  );
};

export default GrowUpElem;
