import { Outlet } from "react-router";
import Header from "../components/Header";
// import { Login } from "./Login";

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
