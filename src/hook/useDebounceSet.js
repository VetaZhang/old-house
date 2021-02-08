import React, { useState, useEffect } from 'react';

export function useDebounceSet(val, fn) {
  const [value, setValue] = useState(val);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
      setTimer(null);
    }
    setTimer(setTimeout(() => {
      fn && fn(value);
    }, 200));
  }, [value]);

  return [value, setValue];
}