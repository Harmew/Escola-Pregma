import React from "react";

const types = {
  cpf: {
    regex: /^((\d{3}).(\d{3}).(\d{3})-(\d{2}))*$/,
    message: "Preencha um CPF válido",
  },
  nota: {
    regex: /^([1-9]|10{1})$/,
    message: "Preencha uma nota válida",
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
