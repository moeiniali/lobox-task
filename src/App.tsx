import React, { Suspense } from 'react';
import './App.scss';
import { lazy } from 'react';
import Loading from './utils/Loading';
import { Toaster } from 'react-hot-toast';
const App: React.FC = () => {
 const DropDownLazy = lazy(() => import('./components/modules/MainDropDown'))






 return (
  <div className="App">
   <Suspense fallback={<Loading />}>
    <Toaster />
    <DropDownLazy />
   </Suspense>
  </div >
 );
}

export default App;
