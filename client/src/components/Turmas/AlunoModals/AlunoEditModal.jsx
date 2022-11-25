import React from "react";
import { useNavigate } from "react-router-dom";

// API
import { GET_ALUNO_NOTA, PUT_ALUNO_NOTA, DELETE_ALUNO } from "../../../Api";

// Hooks
import useFetch from "../../../hooks/useFetch";
import useForm from "../../../hooks/useForm";

// Components
import Input from "../../Forms/Input";
import Button from "../../Forms/Button";
import Error from "../../Helper/Error";
import Loading from "../../Helper/Loading";

const AlunoEditModal = ({ aluno, handleModal }) => {
  const { data, loading, error, request } = useFetch();
  const navigate = useNavigate();
  const nota = useForm("nota");

  async function handleEditSubmit(event) {
    event.preventDefault();
    if (nota.validate()) {
      const { url, options } = PUT_ALUNO_NOTA({
        cod: Number(data.matricula),
        notaFinal: Number(nota.value),
      });
      const { response } = await request(url, options);
      if (response.ok) {
        handleModal(event);
        navigate(0);
      }
    }
  }

  async function handleDeleteSubit(event) {
    event.preventDefault();
    const confirm = window.confirm(
      "Tem certeza que deseja excluir o aluno da turma?"
    );

    if (confirm) {
      const id = data.matricula;
      const { url, options } = DELETE_ALUNO(id);
      const { response } = await request(url, options);
      if (response.ok) {
        handleModal(event);
        navigate(0);
        return;
      }
    }
  }

  React.useEffect(() => {
    const { url, options } = GET_ALUNO_NOTA(Number(aluno));
    request(url, options);
  }, [aluno]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data) {
    return (
      <>
        <form
          onSubmit={handleEditSubmit}
          style={{ font: "var(--Nunito-14-r)" }}
        >
          <p>Nome: {data.nome}</p>
          <p>CPF: {data.cpf}</p>
          <p>Sala: {data.salaCod}</p>
          <p>Nota Atual: {data.boletim[0].notaFinal}</p>
          <Input label="Atualizar Nota" type="text" name="nota" {...nota} />
          <Button color="yellow">Editar</Button>
          <Button onClick={handleDeleteSubit} color="red">
            Excluir
          </Button>
        </form>
        <Error error={error} />
      </>
    );
  }
};

export default AlunoEditModal;
