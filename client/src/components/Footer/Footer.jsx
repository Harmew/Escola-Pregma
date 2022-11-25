import React from "react";
import PropTypes from "prop-types";

// CSS
import styles from "./Footer.module.css";

// Context
import { EnderecoContext } from "../../EnderecoContext";

const Footer = () => {
  const { cnpj } = React.useContext(EnderecoContext);
  const newCnpj = cnpj.replace(
    /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
    "CNPJ $1.$2.$3/$4-$5"
  );

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer_itens} container`}>
        <p>Todos os direitos reservados</p>
        <p>{newCnpj}</p>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  cnpj: PropTypes.string,
};

export default Footer;
