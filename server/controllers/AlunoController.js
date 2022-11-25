const express = require("express");
const router = express.Router();

// Prisma
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Put Aluno Turma 
router.put("/matricula", async (req, res) => {
  const { matricula, cod } = req.body;

  try {
    if (matricula && cod) {
      const aluno = await prisma.aluno.update({
        where: {
          matricula: matricula,
        },
        data: {
          salaCod: cod,
          boletim: {
            update: {
              where: { cod: Number(matricula) },
              data: {
                notaFinal: 0,
              },
            },
          },
        },
      });
      res.json({ message: "Aluno Matriculado com Sucesso" });
    } else {
      res.status(400).json({ error: "Dados incompletos" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    await prisma.$disconnect();
  }
});

module.exports = router;
