import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "pages/Home";
import Favorites from "pages/Favorites";
import Player from "pages/Player";
import NotFound from "pages/NotFound";
import PageBase from "pages/PageBase";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageBase />}>
          <Route index path="/" element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path=":id" element={<Player />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
