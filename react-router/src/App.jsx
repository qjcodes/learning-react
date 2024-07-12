import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/css/base/base.css";
import "./assets/css/componentes/card.css";
import Sobre from "./pages/Sobre";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Header from "./components/Header";
import Post from "./pages/Post";
import Categoria from "./components/Categoria";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/categoria/:id/*" element={<Categoria />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
