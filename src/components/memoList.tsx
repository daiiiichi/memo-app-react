import React from "react";
import styles from "../styles/globals.module.css";

export const MemoList = ({ props }) => {
  return (
    <div>
      <strong className="">memolist</strong>
      {props.memos.map((memo) => (
        <p
          key={memo.id}
          className={styles.newMemo}
          onClick={() => props.setSelectedMemo(memo)}
        >
          {memo.text}
        </p>
      ))}
      <p
        className={styles.newMemo}
        onClick={() => props.setSelectedMemo({ id: 0, text: "" })}
      >
        ＋
      </p>
    </div>
  );
};
