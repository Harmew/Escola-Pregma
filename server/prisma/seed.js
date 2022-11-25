// Seed Prisma Database
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const Endereco = await prisma.endereco.create({
    data: {
      rua: "Rua Chile",
      numero: 1678,
      bairro: "Rebouças",
      cidade: "Curitiba",
      estado: "PR",
      cep: "80220181",
    },
  });

  const Escola = await prisma.escola.create({
    data: {
      nome: "Escola Pregma",
      cnpj: "56703895000185",
      endereco: {
        connect: {
          cod: Endereco.cod,
        },
      },
    },
    include: {
      endereco: true,
    },
  });

  const Sala1 = await prisma.sala.create({
    data: {
      modulo: 1,
    },
  });

  const Sala2 = await prisma.sala.create({
    data: {
      modulo: 2,
    },
  });

  const Sala3 = await prisma.sala.create({
    data: {
      modulo: 3,
    },
  });

  const Disciplina1 = await prisma.disciplina.create({
    data: {
      nome: "HTML",
    },
  });

  const Disciplina2 = await prisma.disciplina.create({
    data: {
      nome: "CSS",
    },
  });

  const Disciplina3 = await prisma.disciplina.create({
    data: {
      nome: "JavaScript",
    },
  });

  const Disciplina4 = await prisma.disciplina.create({
    data: {
      nome: "React",
    },
  });

  const Disciplina5 = await prisma.disciplina.create({
    data: {
      nome: "Angular",
    },
  });

  const Disciplina6 = await prisma.disciplina.create({
    data: {
      nome: "Vue",
    },
  });

  const Disciplina7 = await prisma.disciplina.create({
    data: {
      nome: "NodeJS",
    },
  });

  const Disciplina8 = await prisma.disciplina.create({
    data: {
      nome: "MongoDB",
    },
  });

  const Disciplina9 = await prisma.disciplina.create({
    data: {
      nome: "MySQL",
    },
  });

  const Aluno1 = await prisma.aluno.create({
    data: {
      nome: "Emanuel Leandro Matheus da Mata",
      cpf: "10302523782",
      sala: {
        connect: {
          cod: Sala1.cod,
        },
      },
    },
  });

  const Aluno2 = await prisma.aluno.create({
    data: {
      nome: "Clarice Carolina Luciana Teixeira",
      cpf: "09797691241",
      sala: {
        connect: {
          cod: Sala1.cod,
        },
      },
    },
  });

  const Aluno3 = await prisma.aluno.create({
    data: {
      nome: "Luana Allana da Paz",
      cpf: "31300408707",
      sala: {
        connect: {
          cod: Sala2.cod,
        },
      },
    },
  });

  const Aluno4 = await prisma.aluno.create({
    data: {
      nome: "Heloise Isabel Brito",
      cpf: "73096675147",
      sala: {
        connect: {
          cod: Sala2.cod,
        },
      },
    },
  });

  const Aluno5 = await prisma.aluno.create({
    data: {
      nome: "Letícia Helena Nascimento",
      cpf: "61394338279",
      sala: {
        connect: {
          cod: Sala3.cod,
        },
      },
    },
  });

  const Aluno6 = await prisma.aluno.create({
    data: {
      nome: "Bárbara Carolina da Mota",
      cpf: "66830232120",
      sala: {
        connect: {
          cod: Sala3.cod,
        },
      },
    },
  });

  const Professor1 = await prisma.professor.create({
    data: {
      nome: "Davi Luan Bryan Lima",
      cpf: "28500064676",
      tituloAcademico: "Professor doutor",
      disciplina: {
        connect: {
          cod: Disciplina1.cod,
        },
      },
    },
  });

  const Professor2 = await prisma.professor.create({
    data: {
      nome: "Carolina Isabella Sarah da Paz",
      cpf: "46880790364",
      tituloAcademico: "Professor titular",
      disciplina: {
        connect: {
          cod: Disciplina2.cod,
        },
      },
    },
  });

  const Professor3 = await prisma.professor.create({
    data: {
      nome: "Patricia Alessandra Barros",
      cpf: "38216428820",
      tituloAcademico: "Professor colaborador",
      disciplina: {
        connect: {
          cod: Disciplina3.cod,
        },
      },
    },
  });

  const Turma1 = await prisma.turma.create({
    data: {
      Professor: {
        connect: {
          cod: Professor2.cod,
        },
      },
    },
  });

  const Turma2 = await prisma.turma.create({
    data: {
      Professor: {
        connect: {
          cod: Professor3.cod,
        },
      },
    },
  });

  const Turma3 = await prisma.turma.create({
    data: {
      Professor: {
        connect: {
          cod: Professor1.cod,
        },
      },
    },
  });

  const AlunoTurma1 = await prisma.alunoTurma.create({
    data: {
      aluno: {
        connect: {
          matricula: Aluno1.matricula,
        },
      },
      turma: {
        connect: {
          cod: Turma1.cod,
        },
      },
    },
  });

  const AlunoTurma2 = await prisma.alunoTurma.create({
    data: {
      aluno: {
        connect: {
          matricula: Aluno2.matricula,
        },
      },
      turma: {
        connect: {
          cod: Turma1.cod,
        },
      },
    },
  });

  const AlunoTurma3 = await prisma.alunoTurma.create({
    data: {
      aluno: {
        connect: {
          matricula: Aluno3.matricula,
        },
      },
      turma: {
        connect: {
          cod: Turma2.cod,
        },
      },
    },
  });

  const AlunoTurma4 = await prisma.alunoTurma.create({
    data: {
      aluno: {
        connect: {
          matricula: Aluno4.matricula,
        },
      },
      turma: {
        connect: {
          cod: Turma2.cod,
        },
      },
    },
  });

  const AlunoTurma5 = await prisma.alunoTurma.create({
    data: {
      aluno: {
        connect: {
          matricula: Aluno5.matricula,
        },
      },
      turma: {
        connect: {
          cod: Turma3.cod,
        },
      },
    },
  });

  const AlunoTurma6 = await prisma.alunoTurma.create({
    data: {
      aluno: {
        connect: {
          matricula: Aluno6.matricula,
        },
      },
      turma: {
        connect: {
          cod: Turma3.cod,
        },
      },
    },
  });

  const Boletim1 = await prisma.boletim.create({
    data: {
      notaFinal: 6,
      aluno: {
        connect: {
          matricula: Aluno1.matricula,
        },
      },
    },
  });

  const Boletim2 = await prisma.boletim.create({
    data: {
      notaFinal: 9,
      aluno: {
        connect: {
          matricula: Aluno2.matricula,
        },
      },
    },
  });

  const Boletim3 = await prisma.boletim.create({
    data: {
      notaFinal: 7,
      aluno: {
        connect: {
          matricula: Aluno3.matricula,
        },
      },
    },
  });

  const Boletim4 = await prisma.boletim.create({
    data: {
      notaFinal: 8,
      aluno: {
        connect: {
          matricula: Aluno4.matricula,
        },
      },
    },
  });

  const Boletim5 = await prisma.boletim.create({
    data: {
      notaFinal: 10,
      aluno: {
        connect: {
          matricula: Aluno5.matricula,
        },
      },
    },
  });

  const Boletim6 = await prisma.boletim.create({
    data: {
      notaFinal: 3,
      aluno: {
        connect: {
          matricula: Aluno6.matricula,
        },
      },
    },
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
