import React from "react";
import { useNavigate } from "react-router-dom";

// CSS
import styles from "./AlunoBoletim.module.css";

// API
import { PUT_ALUNO_MATRICULA } from "../../Api";

// Hooks
import useMedia from "../..//hooks/useMedia";
import useFetch from "../../hooks/useFetch";

const AlunoBoletim = ({ data }) => {
  const { request } = useFetch();
  const mobile = useMedia("(max-width: 48rem)");
  const navigate = useNavigate();

  async function handleClick(event) {
    event.preventDefault();
    // Nota maior que 6 e sala menor que 3
    if (data.boletim[0].notaFinal >= 6 && data.salaCod < 3) {
      const { url, options } = PUT_ALUNO_MATRICULA({
        matricula: data.matricula,
        cod: data.salaCod + 1,
      });
      request(url, options);
      alert("Aluno Matriculado!");
      navigate(0);
      return;
    }

    // Nota menor que 6 e sala menor que 3
    if (data.boletim[0].notaFinal < 6 && data.salaCod < 4) {
      const { url, options } = PUT_ALUNO_MATRICULA({
        matricula: data.matricula,
        cod: data.salaCod,
      });
      request(url, options);
      alert("Aluno Rematriculado!");
      navigate(0);
      return;
    }
  }

  return (
    <>
      {mobile ? (
        <div className={styles.boletimMobile}>
          <h3>Boletim</h3>
          <div className={styles.card}>
            <div>
              <p>RA: {data.matricula}</p>
              <p>Turma: {data.salaCod}</p>
              <p>Média: 7</p>
              <p>
                Situação:{" "}
                {data.boletim[0].notaFinal >= 6 ? "Aprovado" : "Reprovado"}
              </p>
              {data.salaCod >= 3 && data.boletim[0].notaFinal >= 6 ? (
                <button>Chegou ao Fim</button>
              ) : (
                <button onClick={handleClick}>
                  {data.boletim[0].notaFinal >= 6
                    ? "Próximo Módulo"
                    : "Rematricular"}
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.boletim}>
          <h3>Boletim</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>RA</th>
                <th>Turma</th>
                <th>Média</th>
                <th>Situação</th>
                <th>Inscrição</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data.matricula}</td>
                <td>{data.salaCod}</td>
                <td>{data.boletim[0].notaFinal}</td>
                <td>
                  {data.boletim[0].notaFinal >= 6 ? "Aprovado" : "Reprovado"}
                </td>
                <td>
                  {data.salaCod >= 3 && data.boletim[0].notaFinal >= 6 ? (
                    <button>Chegou ao Fim</button>
                  ) : (
                    <button onClick={handleClick}>
                      {data.boletim[0].notaFinal >= 6
                        ? "Próximo Módulo"
                        : "Rematricular"}
                    </button>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default AlunoBoletim;
