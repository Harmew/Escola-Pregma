const express = require("express");
const router = express.Router();

// Prisma
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Get Alunos by Professor name 
router.get("/:cod", async (req, res) => {
  const cod = Number(req.params.cod);
  try {
    const alunos = await prisma.aluno.findMany({
      where: {
        salaCod: cod,
      },
    });
    res.json(alunos).status(200);
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    await prisma.$disconnect();
  }
});

// Get Aluno by Matricula with Boletim 
router.get("/aluno/:cod", async (req, res) => {
  try {
    const aluno = await prisma.aluno.findUnique({
      where: {
        matricula: parseInt(req.params.cod),
      },
      include: {
        boletim: true,
      },
    });
    res.json(aluno);
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    await prisma.$disconnect();
  }
});

// Put Aluno Boletim 
router.put("/aluno/boletim", async (req, res) => {
  const { notaFinal, cod } = req.body;
  try {
    if (notaFinal) {
      await prisma.aluno.update({
        where: { matricula: Number(cod) },
        data: {
          boletim: {
            update: {
              where: { cod: Number(cod) },
              data: {
                notaFinal: notaFinal,
              },
            },
          },
        },
      });
      res.json("Boletim Atualizado");
    } else {
      throw new Error("Nota Final não informada");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    await prisma.$disconnect();
  }
});

// Delete AlunoTurma with Alino and Boletim
router.delete("/aluno/:cod", async (req, res) => {
  const cod = Number(req.params.cod);
  try {
    await prisma.aluno.delete({
      where: {
        matricula: cod,
      },
    });
    res.json("Aluno excluido com sucesso");
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    await prisma.$disconnect();
  }
});

// Create Aluno with Boletim 
router.post("/aluno/criar", async (req, res) => {
  const { nome, cpf } = req.body;
  const salaCod = 1;
  const notaFinal = 0;
  try {
    if (nome && salaCod && cpf) {
      const aluno = await prisma.aluno.create({
        data: {
          nome: nome,
          salaCod: salaCod,
          cpf: cpf,
          boletim: {
            create: {
              notaFinal: notaFinal,
            },
          },
        },
      });
      res.json(aluno.matricula).status(200);
    } else {
      throw new Error("Dados do Aluno não informados");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    await prisma.$disconnect();
  }
});

module.exports = router;
