import Head from "next/head";
import localFont from "next/font/local";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback, useEffect, useRef, useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState<string[]>([]);

  // *** カウントアップの制御 *** //
  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [count]);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  // *** インプットボックスの制御 *** //
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 5) {
      alert("5文字以内で入力してください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  // *** インプットボックスに入力された文字をリストに追加 *** //
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
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

  // *** バックカラーの変更 *** //
  useEffect(() => {
    // マウント時の処理
    document.body.style.backgroundColor = "lightblue";
    return () => {
      // アンマウント時の処理
      document.body.style.backgroundColor = "";
    };
  }, []);

  // console.log(text);

  return (
    <div
      className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
    >
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input ref={inputRef} type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="index" />
      <Footer />
    </div>
  );
}
