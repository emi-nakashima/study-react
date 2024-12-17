import classes from "src/components/Headline/Headline.module.css";

type HeadlineProps = {
  // `HeadlineProps` は型定義の名前
  page: string; // `page` は文字列型のプロパティ
  children: React.ReactNode; // `children` は React のノード型。要素やテキストを受け取ることができる
};

export const Headline = (props: HeadlineProps) => {
  return (
    <div>
      <h1 className={classes.title}>{props.page} page</h1>
      <ol>
        <li>Get started by editing {props.children}.</li>
        <li>Save and see your changes instantly.</li>
      </ol>
    </div>
  );
};
