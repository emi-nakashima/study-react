import classes from "src/components/Headline/Headline.module.css";

type HeadlineProps = {
  page: string; // `page` は文字列型
  children: React.ReactNode; // `children` は React のノード型
};

export function Headline(props: HeadlineProps) {
  return (
    <div>
      <h1 className={classes.title}>{props.page} page</h1>
      <ol>
        <li>Get started by editing {props.children}.</li>
        <li>Save and see your changes instantly.</li>
      </ol>
    </div>
  );
}
