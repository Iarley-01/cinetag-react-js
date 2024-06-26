import { Link } from "react-router-dom";

import styles from "./Cabecalho.module.css";
import logo from "./logo.png";

function Cabecalho() {
  return (
    <header>
      <Link to="./">
        <img src={logo} alt="Logo CineTag" />
      </Link>
      <nav>
        
      </nav>
    </header>
  );
}

export default Cabecalho;