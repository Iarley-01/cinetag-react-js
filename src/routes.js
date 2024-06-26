import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "pages/Inicio";
import Favoritos from "pages/Favoritos";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;