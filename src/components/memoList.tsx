import React from "react";
import styles from "../styles/globals.module.css";
import { MemoStateProps } from "../types/types.ts";

export const MemoList: React.FC<MemoStateProps> = ({
  memos,
  selectedMemo,
  setMemos,
  setSelectedMemo,
}) => {
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
          {memo.text.split("\n")[0] || "(1行目が空行のメモ)"}
        </p>
      ))}
      <p
        className={styles.newMemo}
        onClick={() => setSelectedMemo({ id: null, text: "" })}
      >
        ＋
      </p>
    </div>
  );
};
