import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("メモリストの＋ボタン表示テスト", () => {
  test("ログインボタンをクリックすると＋ボタンが表示される", () => {
    render(<App />);
    expect(screen.queryByText("＋")).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "ログイン" }));
    expect(screen.getByText("＋")).toBeInTheDocument();
  });
});
