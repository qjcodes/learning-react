// import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/global.module.css";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import useBodySize from "@/hooks/useBodySize";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const { bodyRef, bodySize } = useBodySize();
  return (
    <div ref={bodyRef}>
      <NavBar />
      <Outlet />
      <Footer />
      <Modal />
    </div>
  );
};

export default Layout;
