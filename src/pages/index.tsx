import Head from "next/head";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { Footer } from "@/components/Footer";
import { Links } from "@/components/Links";
import { Headline }  from "@/components/Headline";

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
  return (
    <>
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <Headline page="index" />
          <Links />
        </main>
        <Footer />
      </div>
    </>
  );
}