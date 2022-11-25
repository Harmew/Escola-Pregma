import React from "react";

// API
import { GET_ADRESS } from "./Api";

// Hooks
import useFetch from "./hooks/useFetch";

// Components
import Loading from "./components/Helper/Loading";

// Context
export const EnderecoContext = React.createContext();

export const EnderecoStorage = ({ children }) => {
  // Endereco
  const [rua, setRua] = React.useState(null);
  const [numero, setNumero] = React.useState(null);
  const [bairro, setBairro] = React.useState(null);
  const [cidade, setCidade] = React.useState(null);
  const [estado, setEstado] = React.useState(null);
  const [cep, setCep] = React.useState(null);

  // Escola
  const [nome, setNome] = React.useState(null);
  const [cnpj, setCnpj] = React.useState(null);

  // Fetch
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchEndereco() {
      const { url, options } = GET_ADRESS();
      const { response, json } = await request(url, options);
      if (response.ok) {
        setRua(json.rua);
        setNumero(json.numero);
        setBairro(json.bairro);
        setCidade(json.cidade);
        setEstado(json.estado);
        setCep(json.cep);
        setNome(json.escola[0].nome);
        setCnpj(json.escola[0].cnpj);
      }
    }
    fetchEndereco();
  }, [request]);

  if (loading) return <Loading />;
  if (error)
    return (
      <p
        style={{
          display: "flex",
          width: "100%",
          height: "100vh",
          color: "red",
          justifyContent: "center",
          alignItems: "center",
          font: "var(--Nunito-14-b)",
        }}
      >
        Error no site, tente novamente mais tarde ou entre em contato com o
        administrador.
      </p>
    );
  if (data)
    return (
      <EnderecoContext.Provider
        value={{ rua, numero, bairro, cidade, estado, cep, nome, cnpj }}
      >
        {children}
      </EnderecoContext.Provider>
    );
};
