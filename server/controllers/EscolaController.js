const express = require("express");
const router = express.Router();

// Prisma
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Get Adress 
router.get("/", async (req, res) => {
  try {
    const endereco = await prisma.endereco.findFirst({
      include: { escola: true },
    });
    res.send(endereco).status(200);
  } catch (error) {
    res.send(error).status(500);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
});

module.exports = router;
