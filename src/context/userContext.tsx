import { createContext } from "react";

export const UserContext = createContext({
  isLogin: false,
  setIsLogin: (value: boolean) => {},
});
