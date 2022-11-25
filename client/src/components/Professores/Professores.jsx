import React from "react";

// CSS
import styles from "./Professores.module.css";

// Components
import Loading from "../Helper/Loading";
import Error from "../Helper/Error";

// Hooks
import useFetch from "../../hooks/useFetch";
import useMedia from "../../hooks/useMedia";

// API
import { GET_PROFESSORS } from "../../Api";
import ProfessoresModal from "./ProfessoresModal";

const Professor = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const mobile = useMedia("(max-width: 58rem)");
  const { data, loading, error, request } = useFetch();

  function handleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  React.useEffect(() => {
    const { url, options } = GET_PROFESSORS();
    request(url, options);
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <section
        className={`${styles.professores} container`}
        aria-label="Professores"
      >
        <div className={styles.professoresHeader}>
          <h3>Professores</h3>
          <button onClick={handleModal}>ADICIONAR</button>
        </div>
        {mobile ? (
          <div className={styles.card}>
            {data.map((professor) => (
              <div key={professor.cod} className={styles.cards}>
                <h4>{professor.nome}</h4>
                <p>CPF: {professor.cpf}</p>
                <p>Título: {professor.tituloAcademico}</p>
                <p>Disciplina: {professor.disciplinaCod}</p>
              </div>
            ))}
          </div>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Titulo Academico</th>
                <th>Disciplina</th>
              </tr>
            </thead>
            <tbody>
              {data.map((professor) => (
                <tr key={professor.cod}>
                  <td>{professor.nome}</td>
                  <td>{professor.cpf}</td>
                  <td>{professor.tituloAcademico}</td>
                  <td>{professor.disciplinaCod}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {modalIsOpen && <ProfessoresModal handleModal={handleModal} />}
      </section>
    );
};

export default Professor;
