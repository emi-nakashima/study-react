import classes from "@/components/MAin.module.css";
import { Links } from "@/components/Links";
import { Headline }  from "@/components/Headline";

export function Main(props) {
  return (
    <main className={classes.main}>
        <Headline page={props.page}>
          <code>src/pages/{props.page}.tsx</code>
        </Headline>
        <Links />
    </main>
  );
}