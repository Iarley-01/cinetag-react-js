import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "pages/Inicio";
import Favoritos from "pages/Favoritos";

import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;