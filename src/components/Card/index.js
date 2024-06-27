import styles from "./Card.module.css";

import { useFavoritosContext } from "contexts/Favoritos";

import iconeFavoritar from "./favoritar.png";
import iconeDesfavoritar from "./desfavoritar.png";

function Card({ id, titulo, capa }) {
  const { favorito, adicionarFavorito } = useFavoritosContext();
  const isFavorito = favorito.some((fav) => fav.id === id);
  const icone = !isFavorito ? iconeFavoritar : iconeDesfavoritar;
  return (
    <div className={styles.container}>
      <img 
        src={capa} 
        alt={titulo} 
        className={styles.capa} 
      />
      <h2>{titulo}</h2>
      <img
        src={icone}
        alt="Favoritar Filme"
        className={styles.favoritar}
        onClick={() => {
          adicionarFavorito({id, titulo, capa})
        }
        }
      />
    </div>
  );
}

export default Card;