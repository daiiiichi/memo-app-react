import React from "react";
import styles from "../styles/globals.module.css";

export const MemoList = ({ props }) => {
  return (
    <div>
      <strong className="">memolist</strong>
      {props.memos.map((memo) => (
        <p
          key={memo.id}
          className={
            props.selectedMemo && props.selectedMemo.id === memo.id
              ? ""
              : styles.memoUnselected
          }
          onClick={() => props.setSelectedMemo(memo)}
        >
          {memo.text.split("\n")[0]}
        </p>
      ))}
      <p
        className={styles.newMemo}
        onClick={() => props.setSelectedMemo({ id: null, text: "" })}
      >
        ＋
      </p>
    </div>
  );
};
