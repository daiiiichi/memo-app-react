import React from "react";
import styles from "../styles/globals.module.css";

export const MemoEdit = () => {
  return (
    <div className={styles.memoedit}>
      <textarea></textarea>
      <div className={styles.buttonarea}>
        <button>更新</button>
        <button>削除</button>
      </div>
    </div>
  );
};
