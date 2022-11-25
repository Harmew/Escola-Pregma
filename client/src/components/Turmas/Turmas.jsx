import React from "react";

// CSS
import styles from "./Turmas.module.css";

// Hooks
import useFetch from "../../hooks/useFetch";

// API
import { GET_PROFESSORS, GET_ALUNOS_BY_PROFESSOR } from "../../Api";

// Components
import Alunos from "./Alunos";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import Button from "../Forms/Button";

const Turma = () => {
  const professorRef = React.useRef(null);
  const { data, loading, error, request } = useFetch(GET_PROFESSORS);
  const {
    data: alunos,
    loading: loadingAlunos,
    error: errorAlunos,
    request: requestAlunos,
  } = useFetch(GET_ALUNOS_BY_PROFESSOR);

  async function handleSubmit(event) {
    event.preventDefault();
    if (professorRef.current.value === "default") return;

    const { url } = GET_ALUNOS_BY_PROFESSOR(professorRef.current.value);
    await requestAlunos(url);
  }

  React.useEffect(() => {
    const { url } = GET_PROFESSORS();
    request(url);
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <section className={` ${styles.turma} container`} aria-label="Alunos">
        <form onSubmit={handleSubmit} className={styles.form}>
          <select ref={professorRef} defaultValue={"default"}>
            <option disabled value="default">
              Professor
            </option>
            {data.map((professor) => (
              <option key={professor.cod} value={professor.cod}>
                {professor.nome}
              </option>
            ))}
          </select>
          {loadingAlunos ? (
            <Button disabled color="blue">
              Carregando...
            </Button>
          ) : (
            <Button color="blue">BUSCAR</Button>
          )}
        </form>
        <Alunos data={alunos} loading={loadingAlunos} error={errorAlunos} />
      </section>
    );
};

export default Turma;
