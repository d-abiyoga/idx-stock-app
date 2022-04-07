import { useState, useEffect, useRef } from 'react';

interface theme {
  mode: 'light' | 'dark';
}

const useTheme = (defaultTheme: theme = { mode: 'light' }) => {
  const [theme, _setTheme] = useState(getInitialTheme);

  function getInitialTheme() {
    const userPreferDark: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = window.localStorage.getItem('theme');

    if (userPreferDark && !savedTheme) return { mode: 'dark' };
    if (savedTheme) return JSON.parse(savedTheme);
    return defaultTheme;
  }

  useEffect(() => {
    window.localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return [theme, _setTheme];
};

export default useTheme;

function useLocalStorageState(
  key: string,
  defaultValue: String | Function = '',
  { serialize = JSON.stringify, deserialize = JSON.parse } = {},
) {
  const [state, setState] = useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage);
    }
    return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
  });

  const prevKeyRef = useRef(key);

  useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    window.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
}

export { useLocalStorageState };
