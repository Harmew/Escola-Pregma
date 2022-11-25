const express = require("express");
const router = express.Router();

// Prisma
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Get All Professores //
router.get("/", async (req, res) => {
  try {
    const professores = await prisma.professor.findMany();
    res.json(professores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    await prisma.$disconnect();
  }
});

// Create Professor //
router.post("/criar", async (req, res) => {
  const { nome, cpf, tituloAcademico, disciplinaCod } = req.body;
  try {
    if (nome && cpf && tituloAcademico && disciplinaCod) {
      const professor = await prisma.professor.create({
        data: {
          nome,
          cpf,
          tituloAcademico,
          disciplina: {
            connect: {
              cod: Number(disciplinaCod),
            },
          },
        },
      });
      res.json(professor);
    } else {
      res.status(400).json({ error: "Dados incompletos" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    await prisma.$disconnect();
  }
});

// Get Disciplinas //
router.get("/disciplina", async (req, res) => {
  try {
    const disciplinas = await prisma.disciplina.findMany();
    res.json(disciplinas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    await prisma.$disconnect();
  }
});

module.exports = router;
