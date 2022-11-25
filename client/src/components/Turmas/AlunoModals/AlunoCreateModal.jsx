import React from "react";
import { useNavigate } from "react-router-dom";

// Hooks
import useFetch from "../../../hooks/useFetch";
import useForm from "../../../hooks/useForm";

// API
import { CREATE_ALUNO } from "../../../Api";

// Components
import Input from "../../Forms/Input";
import Button from "../../Forms/Button";
import Error from "../../Helper/Error";

const AlunoCreateModal = ({ handleModal }) => {
  const { loading, error, request } = useFetch();
  const navigate = useNavigate();

  // Form
  const nome = useForm();
  const cpf = useForm("cpf");

  async function handleCreateSubmit(event) {
    event.preventDefault();
    if (nome.validate() && cpf.validate()) {
      let cpfFormatado = cpf.value
        .replace(".", "")
        .replace(".", "")
        .replace("-", "");

      const { url, options } = CREATE_ALUNO({
        nome: nome.value,
        cpf: cpfFormatado,
      });
      const { response } = await request(url, options);
      if (response.ok) {
        handleModal(event);
        navigate(0);
        return;
      }
    }
  }

  return (
    <>
      <form onSubmit={handleCreateSubmit}>
        <Input label="Nome" type="text" name="nome" tabIndex="2" {...nome} />
        <Input label="CPF" type="text" name="cpf" tabIndex="3" {...cpf} />
        {loading ? (
          <Button disabled color="blue">
            Cadastrando...
          </Button>
        ) : (
          <Button tabIndex="4" color="blue">
            Cadastrar
          </Button>
        )}
      </form>
      <Error error={error} />
    </>
  );
};

export default AlunoCreateModal;
