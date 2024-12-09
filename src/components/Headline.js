import styles from "@/styles/Home.module.css";

export function Headline(props) {
  return (
    <div>
      <h1 className={styles.title}>{props.page} page</h1>
      <ol>
        <li>
          Get started by editing {props.children}.
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>
    </div>
  );
}
