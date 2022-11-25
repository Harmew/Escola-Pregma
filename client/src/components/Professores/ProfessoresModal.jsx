import React from "react";
import { useNavigate } from "react-router-dom";

// CSS
import styles from "./ProfessoresModal.module.css";

// API
import { GET_DISCIPLINAS, CREATE_PROFESSOR } from "../../Api";

// Hooks
import useFetch from "../../hooks/useFetch";
import useForm from "../../hooks/useForm";

// Components
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";

const ProfessoresModal = ({ handleModal }) => {
  const disciplinaRef = React.useRef(null);
  const { data, loading, error, request } = useFetch();
  const navigate = useNavigate();

  // Form
  const nome = useForm();
  const cpf = useForm("cpf");
  const tituloAcademico = useForm();

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) handleModal(event);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (
      nome.validate() &&
      cpf.validate() &&
      tituloAcademico.validate() &&
      disciplinaRef.current.value !== "default"
    ) {
      let cpfFormatado = cpf.value
        .replace(".", "")
        .replace(".", "")
        .replace("-", "");

      const { url, options } = CREATE_PROFESSOR({
        disciplinaCod: disciplinaRef.current.value,
        nome: nome.value,
        cpf: cpfFormatado,
        tituloAcademico: tituloAcademico.value,
      });

      const { response } = await request(url, options);
      if (response.ok) {
        handleModal(event);
        navigate(0);
        return;
      } else {
        alert("Erro ao cadastrar professor");
      }
    }
  }

  React.useEffect(() => {
    const { url } = GET_DISCIPLINAS();
    request(url);
  }, [request]);

  if (loading)
    return (
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <Loading />
        </div>
      </div>
    );
  if (error)
    return (
      <div className={styles.modal} onClick={handleOutsideClick}>
        <div className={styles.modalContent}>
          <Error error={error} />
        </div>
      </div>
    );
  if (data)
    return (
      <div className={styles.modal} onClick={handleOutsideClick}>
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <h3>Adionar Professor</h3>
            <div
              onClick={handleModal}
              className={styles.btn}
              tabIndex="1"
            ></div>
          </div>
          <form onSubmit={handleSubmit}>
            <Input
              label="Nome"
              type="text"
              name="nome"
              tabIndex="2"
              {...nome}
            />
            <Input label="CPF" type="text" name="cpf" tabIndex="3" {...cpf} />
            <Input
              label="Título Academico"
              type="text"
              name="cpf"
              tabIndex="4"
              {...tituloAcademico}
            />
            <select defaultValue={"default"} ref={disciplinaRef}>
              <option disabled value="default">
                Disciplina
              </option>
              {data.map((disciplina) => (
                <option key={disciplina.cod} value={disciplina.cod}>
                  {disciplina.nome}
                </option>
              ))}
            </select>
            {loading ? (
              <Button disabled color="blue">
                Cadastrando...
              </Button>
            ) : (
              <Button tabIndex="6" color="blue">
                Cadastrar
              </Button>
            )}
          </form>
          <Error error={error} />
        </div>
      </div>
    );
};

export default ProfessoresModal;
