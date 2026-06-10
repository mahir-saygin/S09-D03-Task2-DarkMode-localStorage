import { useState } from 'react';

export function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(() => {
    const storage = JSON.parse(localStorage.getItem(key));
    return storage ? storage : initialValue;
  });

  const updateStorage = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  };

  return [state, updateStorage];
}
