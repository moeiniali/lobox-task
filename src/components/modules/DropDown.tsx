import './Styles.scss';
import React, { useEffect, useRef, useState } from 'react';
import { OptionTypes } from '../types';



type Props = {
 options: OptionTypes[];
};



const DropDown: React.FC<Props> = ({ options }) => {
 const divRef = useRef<HTMLDivElement | null>(null)
 const [isOpen, setIsOpen] = useState<boolean>(false);
 const [selected, setSelected] = useState<OptionTypes | null>(null);



 //toggleDropdown
 const toggleDropdown = () => {
  setIsOpen(!isOpen);
 };

 //check dropDown selected
 const handleSelect = (item: OptionTypes) => {
  setSelected(item);
  setIsOpen(false);
 };

 //Check Dom close dropdown
 const handleCloseBox = (event: MouseEvent) => {
  if (divRef.current && !divRef.current.contains(event.target as Node)) {
   setIsOpen(false);
  }


 }
 // Get clicks on the whole document
 useEffect(() => {
  document.addEventListener('click', handleCloseBox)
  return () => {
   document.removeEventListener('click', handleCloseBox)
  }
 }, []);


 return (

  <div className='custom-select' >
   <div ref={divRef} className={`${isOpen && 'selectedStyle'} selected`} onClick={toggleDropdown}>
    {selected ? (
     <>
      {selected.title}
     </>
    ) : (
     ' Select an option'
    )}
    <img src={`./assets/images/${isOpen ? 'angle-small-up.png' : 'angle-small-down.png'}`}
     alt="icon" width={16} height={16} />
   </div>



   {isOpen && (
    <div className='options'>
     {options.map((item) => (
      <div key={item.id} className='option' onClick={() => handleSelect(item)}>
       {item.title}
       <img src={item.images} alt='icon' width={16} height={16} className='imageStyles' />
      </div>
     ))}
    </div>
   )}


  </div>

 )
}

export default DropDown;




