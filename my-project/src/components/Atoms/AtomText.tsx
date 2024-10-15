// TextAtom.tsx
import React from 'react';
import './AtomStyles.scss';

interface TextAtomProps {
 as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'strong';
 children: React.ReactNode;
 className?: string;
}

const AtomtText: React.FC<TextAtomProps> = ({ as = 'span', children, className }) => {
 const Element = as;

 return (
  <Element className={`text-atom ${className}`}>
   {children}
  </Element>
 );
};

export default AtomtText;
