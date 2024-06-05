import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div>
      <Navbar /> {/* Renders the Navbar at the top */}
      <Outlet /> {/* Renders the matched child route */}
      <Footer /> {/* Renders the Footer at the bottom */}
    </div>
  );
}

export default MainLayout;
