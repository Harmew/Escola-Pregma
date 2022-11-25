export const API_URL = "http://localhost:8080";

// Rostas do servidor
export function GET_ADRESS() {
  return {
    url: API_URL + "/api/endereco",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
}

export function GET_PROFESSORS() {
  return {
    url: API_URL + "/api/professor",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
}

export function GET_ALUNOS_BY_PROFESSOR(id) {
  return {
    url: API_URL + "/api/turma/" + Number(id),
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
}

export function GET_ALUNO_NOTA(id) {
  return {
    url: API_URL + "/api/turma/aluno/" + Number(id),
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
}

export function CREATE_ALUNO(body) {
  return {
    url: API_URL + "/api/turma/aluno/criar",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function PUT_ALUNO_NOTA(body) {
  return {
    url: API_URL + "/api/turma/aluno/boletim",
    options: {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function DELETE_ALUNO(id) {
  return {
    url: API_URL + "/api/turma/aluno/" + Number(id),
    options: {
      method: "DELETE",
    },
  };
}

export function GET_DISCIPLINAS() {
  return {
    url: API_URL + "/api/professor/disciplina",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
}

export function CREATE_PROFESSOR(body) {
  return {
    url: API_URL + "/api/professor/criar",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function PUT_ALUNO_MATRICULA(body) {
  return {
    url: API_URL + "/api/aluno/matricula",
    options: {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}
