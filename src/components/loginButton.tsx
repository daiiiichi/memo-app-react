import React, { useContext } from "react";
import { UserContext } from "../context/userContext.tsx";
import styles from "../styles/globals.module.css";

const LoginButton = () => {
  const { isLogin, setIsLogin } = useContext(UserContext);

  return (
    <button className={styles.loginbutton} onClick={() => setIsLogin(!isLogin)}>
      {isLogin ? "ログアウト" : "ログイン"}
    </button>
  );
};

export default LoginButton;
