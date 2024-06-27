import { useContext, useState } from "react";

export const FavoritosContext = useContext();

export default function FavoritosProvider({children}) {
  const [favorito, setFavorito] = useState([]);
  
  return (
    <FavoritosContext.Provider
      value={{ favorito, setFavorito }}
    >
      {children}
    </FavoritosContext.Provider>
  );
}