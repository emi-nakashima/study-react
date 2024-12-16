import "src/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBgColor } from "src/hooks/useBgColor";

// 型定義
interface AppPropsWithExtras extends AppProps {
  pageProps: {
    count: number;
    isShow: boolean;
    handleClick: () => void;
    handleDisplay: () => void;
    text: string;
    array: string[];
    inputRef: React.RefObject<HTMLInputElement>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleAdd: () => void;
  };
}

export default function App({ Component, pageProps }: AppPropsWithExtras) {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgColor();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} {...counter} {...inputArray} />
    </>
  );
}
