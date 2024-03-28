import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <Logo />
        <div className={styles.searchBar}>
           <Search />
        </div>
       
        <Button text="GIVE FEEDBACK" />
      </nav>
    </>
  );
};

export default Navbar;
