import { NavLink } from "react-router-dom";
import styles from "./Registration.module.css";
import arrow from "../images/arrow.svg";
import { paths } from "../paths";

export const Registration = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.background_container}>
        <div className={styles.register_container}>
          <div className={styles.register_input__container}>
            <label className={styles.label}>
              Name<span className={styles.accent}>&#42;</span>
            </label>
            <input
              className={styles.input}
              type="text"
              id="username"
              placeholder="..."
            />
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
              placeholder="..."
            />
            <label className={styles.label}>
              Confirm password<span className={styles.accent}>&#42;</span>
            </label>
            <input
              className={styles.input}
              type="password"
              id="password"
              placeholder="..."
            />
            <button className={styles.register_btn} type="submit">
              Register
            </button>
          </div>
          <p className={styles.register_p}>
            Already have an account?
            <NavLink to={paths.login} className={styles.link}>
              {" "}
              Log in
            </NavLink>
          </p>
        </div>
      </div>

      <div className={styles.quote_container}>
        <h1 className={styles.main_header}>Books Reading</h1>
        <div className={styles.quote_container}>
          <div className={styles.quote_div}>
            <h2 className={styles.list_header}>Will help you to</h2>
            <ul className={styles.register_list}>
              <li className={styles.register_list__item}>
                <img className={styles.arrow} src={arrow} alt="arrow" />
                Create your goal faster and proceed to read
              </li>
              <li className={styles.register_list__item}>
                <img className={styles.arrow} src={arrow} alt="arrow" />
                Divide process proportionally for each day
              </li>
              <li className={styles.register_list__item}>
                <img className={styles.arrow} src={arrow} alt="arrow" />
                Track your success
              </li>
            </ul>
            <h2 className={styles.list_header}>You may also</h2>
            <ul className={styles.register_list}>
              <li className={styles.register_list__item}>
                <img className={styles.arrow} src={arrow} alt="arrow" />
                Pose your own independent point of view
              </li>
              <li className={styles.register_list__item}>
                <img className={styles.arrow} src={arrow} alt="arrow" />
                Improve your professional skills according to new knowledge
              </li>
              <li className={styles.register_list__item}>
                <img className={styles.arrow} src={arrow} alt="arrow" />
                Become an interesting interlocutor
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
