import {useLocalStorage} from './useLocalStorage.jsx';
import { useEffect } from 'react';
export const useDarkMode=(key) => {
  const [darkMode,setDarkMode]=useLocalStorage(key,false);
  

 useEffect(()=>{
   const appDiv=document.querySelector('.App');
    if(darkMode) {
    appDiv.classList.add('dark-mode');
    } else{
    appDiv.classList.remove('dark-mode'); 
    }
  },[darkMode]);
  return [darkMode,setDarkMode];
};
  
  