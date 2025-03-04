import { NavLink } from "react-router-dom";
import mainLogo from "../../images/main-logo-one.svg";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <img src={mainLogo} alt="mainLogo" className={styles.mainLogo} />
      <ul className={styles.list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
            end
          >
            Головна
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Послуги
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Портфоліо
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Про нас
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacts"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Контакти
          </NavLink>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
