import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import NewVideo from "@/pages/NewVideo";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="new-video" element={<NewVideo />} />
          <Route path="*" element={<h1 style={{paddingTop: "150px", textAlign: "center"}}>404</h1>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
