import classes from "src/components/Main/Main.module.css";
import { Links } from "src/components/Links";
import { Headline } from "src/components/Headline";

type MainProps = {
  page: string; // `page` は文字列型
};

export const Main = (props: MainProps) => {
  return (
    <main className={classes.main}>
      <Headline page={props.page}>
        <code>src/pages/{props.page}.tsx</code>
      </Headline>
      <Links />
    </main>
  );
};
