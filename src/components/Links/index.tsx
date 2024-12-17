// import Image from "next/image";
import classes from "src/components/Links/Links.module.css";

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

export const Links = () => {
  return (
    <>
      {/* <div className={classes.ctas}>
        {ITEMS.map((item) => {
          return (
            <a
              key={item.id} // ユニークなキーを設定
              className={classes.primary}
              href={item.href}
              target="_blank" // リンクを新しいタブで開く設定
              rel="noopener noreferrer" // セキュリティ対策として、リンク先に現在のページ情報を渡さない
            >
              <Image
                className={classes.logo}
                src="/vercel.svg" // 表示する画像ファイル（Vercelのロゴ）
                alt="Vercel logomark" // 画像が表示されない場合やスクリーンリーダー用の説明文
                width={20} // 画像の幅を20pxに設定
                height={20} // 画像の高さを20pxに設定
              />
              {item.title}
            </a>
          );
        })}
      </div> */}

      <div className={classes.ctas}>
        {ITEMS.map((item) => {
          return (
            <a
              key={item.id} // ユニークなキーを設定
              className={classes.secondary}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.title}
            </a>
          );
        })}
      </div>
    </>
  );
};
