import Head from "next/head";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { Footer } from "@/components/Footer";
import { Links } from "@/components/Links";
import Headline from "@/components/Headline";

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
    <div
    className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
  >
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <main className={styles.main}>
          <Headline page="about" />
          <Links/>
        </main>
        
        <Footer/>
    </div>
  );
}
