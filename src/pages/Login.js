import { NavLink } from "react-router-dom";
import lapki from "../images/lapki-icon.svg";
import styles from "./Login.module.css";

export const Login = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.background_container}>
        <div className={styles.login_container}>
          <div className={styles.login_input__container}>
            <label className={styles.label}>
              Email<span className={styles.accent}>&#42;</span>
            </label>
            <input
              className={styles.input}
              type="text"
              id="username"
              placeholder="your@email.com"
            />
            <label className={styles.label}>
              Password<span className={styles.accent}>&#42;</span>
            </label>
            <input
              className={styles.input}
              type="password"
              id="password"
              placeholder="Password"
            />
            <button className={styles.login_btn} type="submit">
              Login
            </button>
          </div>

          <NavLink className={styles.link}>Register</NavLink>
        </div>
      </div>

      <div className={styles.quote_container}>
        <div className={styles.quote_div}>
          <img src={lapki} alt="quote" />
          <h1 className={styles.main_quote}>
            Books are the ships of thoughts, wandering through the waves of
            time.
          </h1>
          <p className={styles.quote_name}>Francis Bacon</p>
        </div>
      </div>
    </div>
  );
};
