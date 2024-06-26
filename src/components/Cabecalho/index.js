import { Link } from "react-router-dom";

import styles from "./Cabecalho.module.css";
import logo from "./logo.png";

import CabecalhoLink from "./CabecalhoLink";

function Cabecalho() {
  return (
    <header>
      <Link to="./">
        <img src={logo} alt="Logo CineTag" />
      </Link>
      <nav>
        <CabecalhoLink url="./">
          Home
        </CabecalhoLink>
        <CabecalhoLink url="./Favoritos">
          Favoritos
        </CabecalhoLink>
      </nav>
    </header>
  );
}

export default Cabecalho;