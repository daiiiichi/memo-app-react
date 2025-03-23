import React, { useState, useEffect } from "react";
import UserProvider from "./context/userProvider.tsx";
import { MemoList } from "./components/memoList.tsx";
import { MemoEdit } from "./components/memoEdit.tsx";
import LoginButton from "./components/loginButton.tsx";
import UserNotification from "./components/userNotification.tsx";
import styles from "./styles/globals.module.css";
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
    <UserProvider>
      <div>
        <div className={styles.appheader}>
          <h2>{selectedMemo ? "編集" : "一覧"}</h2>
          <LoginButton />
        </div>
        <UserNotification />
        <main>
          <div>
            <MemoList
              memos={memos}
              setMemos={setMemos}
              selectedMemo={selectedMemo}
              setSelectedMemo={setSelectedMemo}
            />
          </div>
          <div>
            <MemoEdit
              memos={memos}
              setMemos={setMemos}
              selectedMemo={selectedMemo}
              setSelectedMemo={setSelectedMemo}
            />
          </div>
        </main>
      </div>
    </UserProvider>
  );
}

export default App;
