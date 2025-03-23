import React from "react";
import styles from "../styles/globals.module.css";
import { Memo, MemoStateProps } from "../types/types.ts";

export const MemoEdit: React.FC<MemoStateProps> = ({
  memos,
  selectedMemo,
  setMemos,
  setSelectedMemo,
}) => {
  const addMemo = (newMemo: Memo) => {
    const updateNewMemo: Memo = { id: Date.now(), text: newMemo.text };
    const updatedMemos: Memo[] = [...memos, updateNewMemo];
    setMemos(updatedMemos);
    setSelectedMemo(null);
  };

  const updateMemo = (selectedMemo: Memo) => {
    const updatedMemos: Memo[] = memos.map((memo) =>
      memo.id === selectedMemo.id ? selectedMemo : memo
    );
    setMemos(updatedMemos);
    setSelectedMemo(null);
  };

  const deleteMemo = (id: number | null) => {
    const updatedMemos: Memo[] = memos.filter((memo) => memo.id !== id);
    setMemos(updatedMemos);
    setSelectedMemo(null);
  };

  return (
    <div>
      {selectedMemo && (
        <div className={styles.memoedit}>
          <textarea
            value={selectedMemo.text}
            onChange={(e) =>
              setSelectedMemo({
                id: selectedMemo.id ?? null,
                text: e.target.value,
              })
            }
          ></textarea>
          <div className={styles.buttonarea}>
            <button
              onClick={() =>
                selectedMemo.id
                  ? updateMemo(selectedMemo)
                  : addMemo(selectedMemo)
              }
            >
              {selectedMemo.id ? "更新" : "新規追加"}
            </button>
            <button onClick={() => deleteMemo(selectedMemo.id)}>削除</button>
          </div>
        </div>
      )}
    </div>
  );
};
