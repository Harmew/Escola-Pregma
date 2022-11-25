import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./components/Home/Home";
import Turmas from "./components/Turmas/Turmas";
import Professores from "./components/Professores/Professores";
import Aluno from "./components/Aluno/Aluno";

// Context
import { EnderecoStorage } from "./EnderecoContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <EnderecoStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/turmas" element={<Turmas />} />
            <Route path="/professor" element={<Professores />} />
            <Route path="/aluno" element={<Aluno />} />
          </Routes>
          <Footer />
        </EnderecoStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
