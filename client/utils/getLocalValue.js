import { useEffect, useState } from "react";

export const useLocalStorageLogin = () => {
  const [value, setValue] = useState(true);
  useEffect(() => {
    setValue(
      localStorage.getItem("isLogin")
        ? JSON.parse(localStorage.getItem("isLogin"))
        : false
    );
  }, []);
  return value;
};
