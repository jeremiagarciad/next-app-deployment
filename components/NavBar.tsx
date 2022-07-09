import styles from "./Navbar.module.css";
import { ActiveLink } from "./ActiveLink";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const NavbBar = () => {
  return (
    <nav className={styles.menu}>
      {menuItems.map(({ text, href }) => {
        return <ActiveLink key={text} text={text} href={href} />;
      })}
    </nav>
  );
};
