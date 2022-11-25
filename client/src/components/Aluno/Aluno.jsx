import React from "react";

// CSS
import styles from "./Aluno.module.css";

// Components
import Button from "../Forms/Button";
import Loading from "../Helper/Loading";
import Error from "../Helper/Error";
import AlunoInfo from "./AlunoInfo";
import AlunoBoletim from "./AlunoBoletim";

// Hooks
import useFetch from "../../hooks/useFetch";

// API
import { GET_ALUNO_NOTA } from "../../Api";

const Aluno = () => {
  const { data, error, loading, request } = useFetch();
  const raRef = React.useRef(null);

  async function handleSearchSubmit(event) {
    event.preventDefault();

    if (raRef.current.value == 0) return;
    const { url, options } = GET_ALUNO_NOTA(Number(raRef.current.value));
    request(url, options);
  }

  return (
    <section
      className={`${styles.wrapper} container`}
      aria-label="Àrea do Aluno"
    >
      <form className={styles.form} onSubmit={handleSearchSubmit}>
        <input type="text" name="ra" placeholder="RA" ref={raRef} />
        {loading ? (
          <Button disabled color="blue">
            BUSCANDO...
          </Button>
        ) : (
          <Button color="blue">BUSCAR</Button>
        )}
      </form>
      {loading && <Loading />}
      {error && <Error error={error} />}
      {data && (
        <>
          <AlunoInfo data={data} />
          <AlunoBoletim data={data} />
        </>
      )}
    </section>
  );
};

export default Aluno;
