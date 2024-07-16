import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Main = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div>
      {!isLoginPage && (
        <div>
          <Navbar />
        </div>
      )}
      <div className="min-h-screen mx-auto">
        <Outlet />
      </div>
      {!isLoginPage && <Footer />}
    </div>
  );
};

export default Main;
