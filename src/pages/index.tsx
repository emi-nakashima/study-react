import Head from "next/head";
import localFont from "next/font/local";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useEffect } from "react";
import { useCallback } from "react";
import Link from "next/link";

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
  const foo = 1;

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      console.log(e.currentTarget.href);
      // e.preventDefault(); // リンク動作を防ぐ
      alert(foo);
    },
    []
  );

  useEffect(() => {
    //マウント時の処理
    console.log("マウント時");
    document.body.style.backgroundColor = "lightblue";

    return () => {
      //アンマウント時の処理
      console.log("アンマウント時");
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
      <Link href="/about" onClick={handleClick}>
        ボタン
      </Link>

      <Main page="index" />
      <Footer />
    </div>
  );
}
