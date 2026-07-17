import { Outlet } from "react-router-dom";

import Footer from "./Footer/Footer";
import Navbar from './Navbar/Navbar'

function Layout() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden pt-20">

        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Layout;