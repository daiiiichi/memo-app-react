import React, { useState, useEffect } from "react";
import { MemoList } from "./components/memoList.tsx";
import { MemoEdit } from "./components/memoEdit.tsx";
import { Memo } from "./types/types.ts";

function App() {
  const [memos, setMemos] = useState<Memo[]>([]);
  const [selectedMemo, setSelectedMemo] = useState<Memo | null>(null);

  useEffect(() => {
    const storedMemos = localStorage.getItem("memos");
    const memoList: Memo[] = storedMemos ? JSON.parse(storedMemos) : [];
    setMemos(memoList);
  }, []);

  useEffect(() => {
    if (memos.length > 0) {
      localStorage.setItem("memos", JSON.stringify(memos));
    }
  }, [memos]);

  return (
    <div className="App">
      <h2>{selectedMemo ? "編集" : "一覧"}</h2>
      <main>
        <div className="container">
          <MemoList
            memos={memos}
            setMemos={setMemos}
            selectedMemo={selectedMemo}
            setSelectedMemo={setSelectedMemo}
          />
        </div>
        <div className="container">
          <MemoEdit
            memos={memos}
            setMemos={setMemos}
            selectedMemo={selectedMemo}
            setSelectedMemo={setSelectedMemo}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
