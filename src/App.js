import React, { useState } from "react";
import { MemoList } from "./components/memoList.tsx";
import { MemoEdit } from "./components/memoEdit.tsx";

function App() {
  const [selectedMemo, setSelectedMemo] = useState(null);

  return (
    <div className="App">
      <h2>{selectedMemo ? "編集" : "一覧"}</h2>
      <main>
        <div className="container">
          <MemoList props={{ selectedMemo, setSelectedMemo }} />
        </div>
        <div className="container">
          <MemoEdit />
        </div>
      </main>
    </div>
  );
}

export default App;
