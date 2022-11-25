import React from "react";

// CSS
import styles from "./Escola.module.css";

// Context
import { EnderecoContext } from "../../../EnderecoContext";

const Escola = () => {
  const { nome } = React.useContext(EnderecoContext);

  return (
    <section className={styles.escola} aria-label="Escola">
      <div className={styles.escolaImg}></div>
      <h1>{nome}</h1>
      <div className={styles.itens}>
        <div className={styles.itensImg}></div>
        <div>
          <p>
            Fundada em 2014, a Pregma é uma escola de tecnologia, com a ideia de
            proporcionar ao estudante, uma maior libertade na área do ensino,
            com tudos os cursos totalmente disponiveis a todo momento.
          </p>
          <p>
            Buscando aideia de módulos, fazendo com que cada vez mais estudantes
            tenham vontade de apredender e a se desenvolver
          </p>
        </div>
      </div>
    </section>
  );
};

export default Escola;
