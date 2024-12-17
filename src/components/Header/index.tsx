// import Image from "next/image";
import classes from "src/components/Header/Header.module.css";
import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/about", label: "About" },
];

export const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li className={classes.anchor}>
            {NAV_ITEMS.map((item) => {
              return (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              );
            })}
          </li>
        </ul>
      </nav>
    </header>
  );
};
