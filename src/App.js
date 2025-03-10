import React, { useState } from "react";
import { MemoList } from "./components/memoList.tsx";
import { MemoEdit } from "./components/memoEdit.tsx";

function App() {
  const [selectMemo, setSelectMemo] = useState(null);

  return (
    <div className="App">
      <h2>{selectMemo ? "編集" : "一覧"}</h2>
      <main>
        <div className="container">
          <MemoList />
        </div>
        <div className="container">
          <MemoEdit />
        </div>
      </main>
    </div>
  );
}

export default App;
