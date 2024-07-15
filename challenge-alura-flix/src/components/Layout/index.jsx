// import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/global.module.css";
import Footer from "@/components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
