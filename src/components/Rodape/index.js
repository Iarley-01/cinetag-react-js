import styles from "./Rodape.module.css";

function Rodape() {
  return (
    <footer className={styles.rodape}>
      <h2>Desenvolvido por <a href="#" className={styles.rodapeLink}>Iarley</a></h2>
    </footer>
  );
}

export default Rodape;