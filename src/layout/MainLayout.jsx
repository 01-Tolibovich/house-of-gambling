import { Outlet } from "react-router";
import { Header, Footer } from "../components";

import dotLigth from "../assets/images/dot-Light.png"
import dotLigth2 from "../assets/images/dot-Light-2.png"

import "./styles.scss"

const MainLayout = () => {
  return (
    <div className="main-layout-wrapper">
      <img className="dot-light-1" src={dotLigth} alt="" />
      <img className="dot-light-2" src={dotLigth2} alt="" />
      <div className="container main-layout">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;