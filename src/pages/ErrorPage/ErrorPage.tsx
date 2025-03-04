import { NavLink } from "react-router-dom";
import styles from "./errorPage.module.scss";

const ErrorPage = () => {
  return (
    <div className={styles.errorPage}>
      <h1>Oooooooooooooooops!</h1>
      <h6>Error occured</h6>
      <p>navigate to Home Page</p>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.active : "")}
        end
      >
        Home
      </NavLink>
    </div>
  );
};

export default ErrorPage;
