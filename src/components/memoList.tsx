import React, { useContext } from "react";
import { UserContext } from "../context/userContext.tsx";
import styles from "../styles/globals.module.css";
import { MemoStateProps } from "../types/typs.ts";

export const MemoList: React.FC<MemoStateProps> = ({
  memos,
  selectedMemo,
  setMemos,
  setSelectedMemo,
}) => {
  const { isLogin } = useContext(UserContext);

  return (
    <div>
      <strong className="">memolist</strong>
      {memos.map((memo) => (
        <p
          key={memo.id}
          className={
            selectedMemo && selectedMemo.id === memo.id
              ? ""
              : styles.memoUnselected
          }
          onClick={() => setSelectedMemo(memo)}
        >
          {memo.text.split("\n")[0]}
        </p>
      ))}
      {isLogin && (
        <p
          className={styles.newMemo}
          onClick={() => setSelectedMemo({ id: null, text: "" })}
        >
          ＋
        </p>
      )}
    </div>
  );
};
