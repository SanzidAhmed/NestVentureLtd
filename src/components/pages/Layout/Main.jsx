import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Main = () => {
  return (
    <div>
      <div className="">
        <Navbar></Navbar>
      </div>
      <div className="min-h-screen mx-auto ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
