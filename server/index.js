const express = require("express");
const cors = require("cors");
const app = express();

// Json
app.use(express.json());

// Cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  app.use(cors());
  next();
});

// Controllers
const EscolaController = require("./controllers/EscolaController");
const TurmaController = require("./controllers/TurmaController");
const ProfessorController = require("./controllers/ProfessorController");
const AlunoController = require("./controllers/AlunoController");

// Routes
app.use("/api/endereco", EscolaController);
app.use("/api/turma", TurmaController);
app.use("/api/professor", ProfessorController);
app.use("/api/aluno", AlunoController);

app.listen(8080, () => {
  console.log("Servidor Rodando");
});
