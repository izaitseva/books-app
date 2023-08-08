import { NavLink } from "react-router-dom";
import lapki from "../images/lapki.svg";
import styles from "./Login.module.css";

export const Login = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.background_container}>
        <div className={styles.login_container}>
          <div className={styles.login_input__container}>
            <label>
              Email
              <span className={styles.accent}>&#42;</span>
            </label>
            <input />
            <label>
              Password
              <span className={styles.accent}>&#42;</span>
            </label>
            <input />
          </div>
            <button type="submit">Login</button>
            <NavLink>Register</NavLink>
        </div>
      </div>

      <div className={styles.quote_container}>
        <img src={lapki} alt="quote" />
        <h1>
          Books are the ships of thoughts, wandering through the waves of time.
        </h1>
        <p className={styles.quote_name}>Francis Bacon</p>
      </div>
    </div>
  );
};
