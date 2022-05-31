import { useEffect, useState } from "react";

export const useLocalStorage = (name) => {
  const [value, setValue] = useState(null);
  useEffect(() => {
    setValue(JSON.parse(localStorage.getItem(name)));
  }, []);
  return value;
};
