import { useCallback, useRef, useState } from "react";

// *** カスタムフック（インプットボックス） *** //
export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // インプットボックスの制御 //
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 5) {
      alert("5文字以内で入力してください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  // インプットボックスに入力された文字をリストに追加 //
  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.includes(text)) {
        alert("同じ要素が既に存在します。");
        inputRef.current?.select(); // 入力された文字を全選択
        return prevArray;
      } else {
        setArray([...prevArray, text]);
        setText(""); // 入力された文字をクリア
        inputRef.current?.focus(); // インプットボックスにカーソルをフォーカス
        return [...prevArray, text];
      }
    });
  }, [text, setArray]);

  return { text, array, inputRef, handleChange, handleAdd };
};
