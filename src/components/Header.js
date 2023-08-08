import { NavLink } from "react-router-dom";
import { paths } from "../paths";
import styles from "./Header.module.css"
import logo from "../images/header-logo.svg";

const Header = () => {
  return (
    <nav>
      <header className={styles.header_styles}>
        <NavLink to={paths.main}>
          <img src={logo} alt="logo" width="28"/>
        </NavLink>
      </header>
    </nav>
  );
};

export default Header;
