import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default Layout;
