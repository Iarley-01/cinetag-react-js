import styles from "./Rodape.module.css";

function Rodape() {
  return (
    <footer className={styles.rodape}>
      <p>Desenvolvido por <a href="#" className={styles.rodapeLink}>Iarley</a></p>
    </footer>
  );
}

export default Rodape;