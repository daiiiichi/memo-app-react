import React, { useState } from "react";
import { UserContext } from "./userContext.tsx";

const UserProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <UserContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
