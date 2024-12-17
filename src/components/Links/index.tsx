// import Image from "next/image";
import classes from "src/components/Links/Links.module.css";

// 型定義
type LinkItem = {
  id: number; // 一意のID
  href: string; // リンク先のURL
  title: string; // リンクのタイトル
};

type LinksProps = {
  items: LinkItem[]; // リンク項目の配列
  handleReduce: () => void; // 「減らす」ボタンのクリック時に呼ばれる関数
};

export const Links: React.FC<LinksProps> = ({ items, handleReduce }) => {
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

      {/* ボタン：クリックするとアイテムを減らす */}
      <div>
        <button onClick={handleReduce}>減らす</button>
      </div>

      {/* 配列itemsをマッピングしてリンクを表示 */}
      <div className={classes.ctas}>
        {items.map((item) => {
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
