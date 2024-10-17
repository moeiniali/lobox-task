import React, { useEffect, useState } from 'react';
import './Styles.scss';
import DropDown from './DropDown';
import { notifyError } from '../../utils/Notify'
import axios from 'axios';
import { dataType } from '../types';


const baseUrl = "https://6710de99a85f4164ef2fb71a.mockapi.io/api/data/list";

const OrgSelectBox = () => {
 const [data, setData] = useState<dataType[]>([]);



 //fetch data and handle errors---------------------------------
 useEffect(() => {
  const fetchData = async () => {
   try {
    const response = await axios(baseUrl);
    if (response.status !== 200) {
     notifyError('response error please try again!');
     throw new Error('response error');
    }
    const result = response.data;
    console.log(result);

    if (Array.isArray(result)) {
     setData(result);
    } else {
     console.error('Data is not an array:', data);
    }
   } catch (error) {
    console.error('response error', error);
    notifyError('response error, please try again!');
   }
  };
  fetchData();
 }, []);

 return (
  <div className='mainStyle'>
   <DropDown options={data} />
  </div>
 );
};

export default OrgSelectBox;