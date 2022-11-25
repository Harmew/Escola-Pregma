import React from "react";

// CSS
import styles from "./Cursos.module.css";

const Cursos = () => {
  return (
    <section className={`${styles.cursos} container`} aria-label="Cursos">
      <h2>Cursos</h2>

      <div className={styles.cards}>
        <div>
          <h3>Módulo 1</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <p>
            Focando no basico, um curso de 150 horas para os estudantes
            iniciarem com necssario para se começar a trabalhar
          </p>
        </div>

        <div>
          <h3>Módulo 2</h3>
          <ul>
            <li>React</li>
            <li>Angular</li>
            <li>Vue</li>
          </ul>
          <p>
            Avançando um pouco mais a fundo, iremos apredender sobre os
            Frameworks e Bibliotecas mais utilizados
          </p>
        </div>

        <div>
          <h3>Módulo 3</h3>
          <ul>
            <li>NodeJs</li>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
          <p>
            Por fim, iremos passar pelo lado de servidor para contruirmos uma
            aplicação completa ao final.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cursos;
