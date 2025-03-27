import React, { useContext } from "react";
import { UserContext } from "../context/userContext.tsx";

const UserNotification = () => {
  const { isLogin } = useContext(UserContext);

  return (
    <div>
      {isLogin ? (
        <div>
          ▶　ログインが完了しました。すべての機能をご利用いただけます。
        </div>
      ) : (
        <div>
          ▶　右上のボタンからログインしてください。メモの表示機能しかご利用できません。
        </div>
      )}
    </div>
  );
};

export default UserNotification;
