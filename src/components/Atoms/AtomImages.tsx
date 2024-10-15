// InputComponent.tsx
import React from 'react';
import './AtomStyles.scss';

type Props = {
 src?: string;
 alt?: string;
 width?: string | number;
 height?: string | number;
 className?: string;

}


const AtomImages: React.FC<Props> = ({ src, alt, width, height, className }) => {
 return (
  <>
   <img src={src} alt={alt} width={width} height={height} className={`${className ?? 'imgStyle'}`} />
  </>
 );
};

export default AtomImages;
