import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from "./Player.module.css";

import NaoEncontrada from "pages/NaoEncontrada";

import Banner from "components/Banner";
import Titulo from "components/Titulo";

function Player() {
  const [video, setVideo] = useState();
  
  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/Iarley-01/api-cinetag/videos?id=${parametros.id}`)
      .then(resposta => resposta.json())
      .then(dados => {
        setVideo(...dados)
      });
  }, []);
  
  const parametros = useParams();

  if (!video) {
    return <NaoEncontrada />;
  }
  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
        width="560"
        height="315"
        src={video.link}
        title={video.titulo}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </section>
    </>
  );
}

export default Player;