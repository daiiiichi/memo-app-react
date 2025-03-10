import React from "react";
import styles from "../styles/globals.module.css";

export const MemoList = ({ props }) => {
  return (
    <div>
      <strong className="">memolist</strong>
      <p
        className={styles.newMemo}
        onClick={() => props.setSelectedMemo({ id: 0, text: "" })}
      >
        ＋
      </p>
    </div>
  );
};
