import Head from "next/head";
import localFont from "next/font/local";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useEffect, useState } from "react";

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
  const [foo, setFoo] = useState(1);

  const handleClick = () => {
    setFoo((foo) => foo + 1);
  };

  useEffect(() => {
    //マウント時の処理
    document.body.style.backgroundColor = "lightblue";

    return () => {
      //アンマウント時の処理
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div
      className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
    >
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>{foo}</h1>
      <button onClick={handleClick}>ボタン</button>

      <Main page="index" />
      <Footer />
    </div>
  );
}
