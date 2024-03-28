import searchIcon from "../../assets/searchIcon.svg";
import styles from "./search.module.css";
import navbarStyles from "../Navbar/navbar.module.css";


const Search = () => {
  return (
    <div>
      <div className={navbarStyles.searchField}>
        <input type="search" placeholder="Search a Song of Your Choice" />
        <div>
          <img
            src={searchIcon}
            alt="Search Icon"
            className={styles.searchIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
