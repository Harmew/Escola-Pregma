import React from "react";
import PropTypes from "prop-types";

// CSS
import styles from "./Header.module.css";

// Components
import Navbar from "../Navbar/Navbar";

// Context
import { EnderecoContext } from "../../EnderecoContext";

const Header = () => {
  const { rua, numero, bairro, cidade, estado, cep } =
    React.useContext(EnderecoContext);

  return (
    <header className={styles.header}>
      <div className={styles.info_bg}>
        <div className={`${styles.info} container`}>
          <p>{`${rua} ${numero}, ${bairro}, ${cidade} - ${estado} - ${cep}`}</p>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

Header.propTypes = {
  rua: PropTypes.string,
  numero: PropTypes.number,
  bairro: PropTypes.string,
  cidade: PropTypes.string,
  estado: PropTypes.string,
  cep: PropTypes.string,
};

export default Header;
