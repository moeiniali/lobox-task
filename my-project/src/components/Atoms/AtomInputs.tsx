// InputComponent.tsx
import React, { useEffect, useRef, useState } from 'react';
import './AtomStyles.scss';

type InputClickProps = {
  isClicked: (value: boolean) => void;
}


const AtomInputs: React.FC<InputClickProps> = ({ isClicked }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputClick = (event: React.MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
    isClicked(true);
  };

  const handleDocumentClick = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      isClicked(false);
    }
  };


  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);







  return (
    <div className="input-wrapper">
      <input ref={inputRef} onClick={handleInputClick}
        type="text" placeholder="Enter text" className="styled-input" />
    </div>
  );
};

export default AtomInputs;
