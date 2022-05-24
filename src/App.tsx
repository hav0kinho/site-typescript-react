//REACT
import React, { Children } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//CSS
import "./App.scss";

//COMPONENTES
import Navbar from "./components/Navbar";

//PAGES
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";

//APP
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
