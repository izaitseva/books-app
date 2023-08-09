import { Outlet } from "react-router";
import Header from "../components/Header";
import styles from "./SharedLayout.module.css";
// import { Login } from "./Login";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <div className={styles.page_container}>
        <Outlet />
      </div>
    </>
  );
};

export default SharedLayout;
