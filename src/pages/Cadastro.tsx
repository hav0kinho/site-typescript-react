import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//SCSS
import "./Cadastro.scss";

//INTERFACES
import IUsuarioList from "../interfaces/IUsuarioList";
import IUsuario from "../interfaces/IUsuario";
import IAuthErros from "../interfaces/IAuthErros";

//CADASTRO
let newId = 0;

const Cadastro = ({ usuariosList, setUsuariosList }: IUsuarioList) => {
  const [usuarioText, setUsuarioText] = useState<string>("");
  const [passwordText, setPasswordText] = useState<string>("");
  const [emailText, setEmailText] = useState<string>("");
  const [authErros, setAuthErros] = useState<string>();
  const navigate = useNavigate();

  const handleInputOnChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    switch (e.target.name) {
      case "usuario":
        setUsuarioText(e.target.value);
        break;
      case "senha":
        setPasswordText(e.target.value);
        break;
      case "email":
        setEmailText(e.target.value);
        break;
    }
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAuthErros("");
    const newUser: IUsuario = {
      id: newId++,
      nome: usuarioText,
      senha: passwordText,
      email: emailText,
    };

    let authResponse: IAuthErros = authUser(newUser);

    if (authResponse.auth === true) {
      setUsuariosList([...usuariosList, newUser]);
      alert("Usuario Cadastrado");
      resetInputs();
      navigate("/home");
    } else {
      if (authResponse.erroNome != null) {
        setAuthErros(authResponse.erroNome);
      } else if (authResponse.erroSenha != null) {
        setAuthErros(authResponse.erroSenha);
      }
    }
  };

  const authUser = (newUser: IUsuario): IAuthErros => {
    let authResult: IAuthErros = { auth: false };

    if (newUser.nome.length < 4) {
      authResult.erroNome = "Nome deve ter pelo menos 4 caracteres";
      authResult.auth = false;
      return authResult;
    }
    if (newUser.senha.length < 6) {
      authResult.erroSenha = "Senha de ter pelo menos 6 caracteres";
      authResult.auth = false;
      return authResult;
    }

    authResult.auth = true;
    return authResult;
  };

  const resetInputs = (): void => {
    setUsuarioText("");
    setPasswordText("");
    setEmailText("");
  };

  return (
    <main>
      <h1>Cadastre-se</h1>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="usuario">Usuário: </label>
        <input
          onChange={handleInputOnChange}
          type="text"
          name="usuario"
          placeholder="Usuario"
          value={usuarioText}
          required
        />

        <label htmlFor="senha">Senha: </label>
        <input
          onChange={handleInputOnChange}
          type="password"
          name="senha"
          placeholder="Senha"
          value={passwordText}
          required
        />

        <label htmlFor="email">E-mail: </label>
        <input
          onChange={handleInputOnChange}
          type="email"
          name="email"
          placeholder="email@gmail.com"
          value={emailText}
          required
        />

        <input type="submit" value="Cadastrar" />
      </form>
      {authErros && (
        <div>
          <span>{authErros}</span>
        </div>
      )}
    </main>
  );
};

export default Cadastro;
