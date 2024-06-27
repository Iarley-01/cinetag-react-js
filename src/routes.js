import { BrowserRouter, Routes, Route } from "react-router-dom";

import FavoritosProvider from "contexts/Favoritos";

import Inicio from "pages/Inicio";
import Favoritos from "pages/Favoritos";
import Player from "pages/Player";
import NaoEncontrada from "pages/NaoEncontrada";

import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import Container from "components/Container";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <FavoritosProvider>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/:id" element={<Player />} />
            <Route path="*" element={<NaoEncontrada />} />
          </Routes>
        </FavoritosProvider>
      </Container>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;