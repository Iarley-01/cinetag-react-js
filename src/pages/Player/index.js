import styles from "./Player.module.css";

import Banner from "components/Banner";
import Titulo from "components/Titulo";

function Player() {
  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        
      </section>
    </>
  );
}

export default Player;