import classes from "src/components/Main/Main.module.css";
import { Links } from "src/components/Links";
import { Headline } from "src/components/Headline";
import { useState, useCallback } from "react"; // Reactフックをインポート

const ITEMS = [
  {
    id: 1, // ユニークなID
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy now",
  },
  {
    id: 2, // ユニークなID
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Read our docs",
  },
];

type MainProps = {
  page: string; // `page` は文字列型
};

export const Main = (props: MainProps) => {
  const [items, setItems] = useState(ITEMS); // 初期データITEMSでuseStateを定義

  // アイテムを1つ減らす処理
  const handleReduce = useCallback(() => {
    setItems((prevItems) => {
      // 配列の最後の1つを取り除く処理
      return prevItems.slice(0, prevItems.length - 1);
    });
  }, []);

  return (
    <main className={classes.main}>
      <Headline page={props.page}>
        <code>src/pages/{props.page}.tsx</code>
      </Headline>
      <div>
        アイテムの数は
        <span className={classes.itemCount}>{items.length}</span>
        個です
      </div>
      <Links items={items} handleReduce={handleReduce} />
    </main>
  );
};
