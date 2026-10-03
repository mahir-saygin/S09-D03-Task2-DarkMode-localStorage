import {useState} from 'react';
export function useLocalStorage (key, initialValue) {
  const storedValue=localStorage.getItem(key);
  if (storedValue=== null) {
    localStorage.setItem(key,JSON.stringify(initialValue));
  }
  const initial=storedValue!== null?JSON.parse(storedValue):initialValue;
  
  const [value, setValue]= useState(initial);
    const setStoredValue=(newValue) => {
      setValue(newValue);
      localStorage.setItem(key,JSON.stringify(newValue));
    }
    return [value,setStoredValue];
}