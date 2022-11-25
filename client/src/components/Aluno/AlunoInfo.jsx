import React from "react";

// CSS
import styles from "./AlunoInfo.module.css";

// Hooks
import useMedia from "../..//hooks/useMedia";

const AlunoInfo = ({ data }) => {
  const mobile = useMedia("(max-width: 48rem)");

  return (
    <>
      {mobile ? (
        <div className={styles.card} key={data.matricula}>
          <h4>{data.nome}</h4>
          <p>CPF: {data.cpf}</p>
          <p>Módulo {data.salaCod}</p>
        </div>
      ) : (
        <table className={styles.aluno}>
          <tbody>
            <tr>
              <td>{data.nome}</td>
              <td>CPF: {data.cpf}</td>
              <td>Módulo {data.salaCod}</td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};

export default AlunoInfo;
