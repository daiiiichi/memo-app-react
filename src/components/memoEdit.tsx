import React from "react";
import styles from "../styles/globals.module.css";

export const MemoEdit = ({ props }) => {
  const saveMemos = (updatedMemos) => {
    localStorage.setItem("memos", JSON.stringify(updatedMemos));
  };

  const addMemo = (newMemo) => {
    const updateNewMemo = { id: Date.now(), text: newMemo.text };
    const updatedMemos = [...props.memos, updateNewMemo];
    saveMemos(updatedMemos);
    props.setMemos(updatedMemos);
    props.setSelectedMemo(null);
  };

  const updateMemo = (selectedMemo) => {
    const updatedMemos = props.memos.map((memo) =>
      memo.id === selectedMemo.id ? selectedMemo : memo
    );
    saveMemos(updatedMemos);
    props.setMemos(updatedMemos);
    props.setSelectedMemo(null);
  };

  const deleteMemo = (id) => {
    const updatedMemos = props.memos.filter((memo) => memo.id !== id);
    saveMemos(updatedMemos);
    props.setMemos(updatedMemos);
    props.setSelectedMemo(null);
  };

  return (
    <div>
      {props.selectedMemo && (
        <div className={styles.memoedit}>
          <textarea
            value={props.selectedMemo.text}
            onChange={(e) =>
              props.setSelectedMemo({
                id: props.selectedMemo.id ?? null,
                text: e.target.value,
              })
            }
          ></textarea>
          <div className={styles.buttonarea}>
            <button
              onClick={() =>
                props.selectedMemo.id
                  ? updateMemo(props.selectedMemo)
                  : addMemo(props.selectedMemo)
              }
            >
              {props.selectedMemo.id ? "更新" : "新規追加"}
            </button>
            <button onClick={() => deleteMemo(props.selectedMemo.id)}>
              削除
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
