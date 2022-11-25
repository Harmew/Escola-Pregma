import React from "react";
import PropTypes from "prop-types";

// CSS
import styles from "./Alunos.module.css";

// Components
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import AlunoModal from "./AlunoModal";

// Hooks
import useMedia from "../../hooks/useMedia";

const Alunos = ({ data, loading, error }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const mobile = useMedia("(max-width: 58rem)");
  const [aluno, setAluno] = React.useState(0);

  function handleModal(e) {
    setAluno(e.target.id);
    setModalIsOpen(!modalIsOpen);
  }

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <>
        <div className={styles.alunosHeader}>
          <h3>Alunos</h3>
          <button onClick={handleModal} id={0}>
            ADICIONAR
          </button>
        </div>

        {mobile ? (
          <div className={styles.card}>
            {data.map((aluno) => (
              <div key={aluno.matricula} className={styles.cards}>
                <h4>{aluno.nome}</h4>
                <p>CPF: {aluno.cpf}</p>
                <p>Matricula: {aluno.matricula}</p>
                <p>Sala: {aluno.salaCod}</p>
                <button id={aluno.matricula} onClick={handleModal}></button>
              </div>
            ))}
          </div>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th style={{ width: "35%" }}>Nome</th>
                <th>CPF</th>
                <th>RA</th>
                <th>Sala</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {data.map((aluno) => (
                <tr key={aluno.matricula}>
                  <td style={{ width: "35%" }}>{aluno.nome}</td>
                  <td>{aluno.cpf}</td>
                  <td>{aluno.matricula}</td>
                  <td>{aluno.salaCod}</td>
                  <td>
                    <button id={aluno.matricula} onClick={handleModal}></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {modalIsOpen && <AlunoModal handleModal={handleModal} aluno={aluno} />}
      </>
    );
  return null;
};

Alunos.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default Alunos;
