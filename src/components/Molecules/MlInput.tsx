// InputComponent.tsx
import React, { useState } from 'react';
import './MoleculeStyles.scss';
import { AtomImages, AtomInputs } from '../../ExAllCo';



const MlInput: React.FC = () => {
 const [isSelected, setIsSelected] = useState<boolean>(false);

 console.log(isSelected);

 return (
  <>
   <AtomInputs isClicked={setIsSelected} />
   <AtomImages src={`${isSelected ? '/assets/images/angle-small-up.png' : '/assets/images/angle-small-down.png'}`} width={24} height={24} alt='icon' className='isSelectedImage' />

  </>
 );
};

export default MlInput;
