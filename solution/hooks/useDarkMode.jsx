import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
export function useDarkMode(initialValue) {
  const [geceModu, setGeceModu] = useLocalStorage('geceModu', initialValue);

  useEffect(() => {
    setGeceModu(geceModu);
  }, [geceModu]);

  return [geceModu, setGeceModu];
}
