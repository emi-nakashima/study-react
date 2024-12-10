// import Image from "next/image";
import classes from "src/components/Header/Header.module.css";
import Link from "next/link";

export function Header() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.anchor}>
          <li>
            <Link href="/">Index</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
