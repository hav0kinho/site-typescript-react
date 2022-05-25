//REACT
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//CSS
import "./App.scss";

//COMPONENTES
import Navbar from "./components/Navbar";

//PAGES
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro/Cadastro";
import Login from "./pages/Login";

//INTERFACES
import IUsuario from "./interfaces/IUsuario";

//APP
function App() {
  const [usuarios, setUsuarios] = useState<IUsuario[]>([]);
  const [usuarioLogado, setUsuarioLogado] = useState<IUsuario | null>();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={usuarioLogado!} />
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} />} />

          <Route path="/home" element={<Home />} />

          <Route
            path="/cadastro"
            element={
              <Cadastro usuariosList={usuarios} setUsuariosList={setUsuarios} />
            }
          />

          <Route
            path="/login"
            element={
              <Login
                usuariosList={usuarios}
                setUsuarioLogado={setUsuarioLogado}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
