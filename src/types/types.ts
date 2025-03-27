import React from "react";

export interface Memo {
  id: number | null;
  text: string;
}

export interface MemoStateProps {
  memos: Memo[];
  selectedMemo: Memo | null;
  setMemos: React.Dispatch<React.SetStateAction<Memo[]>>;
  setSelectedMemo: React.Dispatch<React.SetStateAction<Memo | null>>;
}
