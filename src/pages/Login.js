import { NavLink } from "react-router-dom";
import lapki from "../images/lapki-icon.svg";
import styles from "./Login.module.css";
import { paths } from "../paths";
import { useState, useRef, useEffect } from "react";

export const Login = () => {
  const userRef = useRef();
  const errorRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    setSuccess(true);
    console.log(email, password);
  };

  return (
    <div className={styles.main_container}>
      {success ? (
        <p>youhoooo!</p>
      ) : (
        <section className={styles.background_container}>
          <p ref={errorRef}>{errMsg}</p>
          <div className={styles.login_container}>
            <form
              className={styles.login_input__container}
              onSubmit={handleSubmit}
            >
              <label className={styles.label}>
                Email<span className={styles.accent}>&#42;</span>
              </label>
              <input
                className={styles.input}
                type="text"
                ref={userRef}
                id="username"
                placeholder="your@email.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
              <label className={styles.label}>
                Password<span className={styles.accent}>&#42;</span>
              </label>
              <input
                className={styles.input}
                type="password"
                id="password"
                autoComplete="off"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
              <button className={styles.login_btn} type="submit">
                Login
              </button>
            </form>

            <NavLink to={paths.registration} className={styles.link}>
              Register
            </NavLink>
          </div>
        </section>
      )}

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
