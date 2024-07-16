// import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/global.module.css";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import useBodySize from "@/hooks/useBodySize";

const Layout = ({ children }) => {
  const { bodyRef, bodySize } = useBodySize();
  return (
    <div ref={bodyRef}>
      <NavBar />
      {children}
      <Footer />
      <Modal />
    </div>
  );
};

export default Layout;
