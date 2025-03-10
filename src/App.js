import React, { useState, useEffect } from "react";
import { MemoList } from "./components/memoList.tsx";
import { MemoEdit } from "./components/memoEdit.tsx";

function App() {
  const [memos, setMemos] = useState([]);
  const [selectedMemo, setSelectedMemo] = useState(null);

  useEffect(() => {
    const memoList = JSON.parse(localStorage.getItem("memos")) || [];
    setMemos(memoList);
  }, []);

  return (
    <div className="App">
      <h2>{selectedMemo ? "編集" : "一覧"}</h2>
      <main>
        <div className="container">
          <MemoList
            props={{ memos, setMemos, selectedMemo, setSelectedMemo }}
          />
        </div>
        <div className="container">
          <MemoEdit
            props={{ memos, setMemos, selectedMemo, setSelectedMemo }}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
