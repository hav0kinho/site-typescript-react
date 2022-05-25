import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import IUsuario from "../interfaces/IUsuario";
//SCSS
//Não entendi como o estilo Cadastro.scss está pegando esse componente também

//Interfaces
import IUsuarioList from "../interfaces/IUsuarioList";

const Login = ({ usuariosList, setUsuarioLogado }: IUsuarioList) => {
  const [userText, setUserText] = useState<string>("");
  const [passwordText, setPasswordText] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "usuario":
        setUserText(e.target.value);
        break;
      case "senha":
        setPasswordText(e.target.value);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [userExists, user] = verifyInUserList(userText, passwordText);

    if (userExists) {
      setUsuarioLogado!(user);
      alert("Você está logado! Bem-vindo " + user.nome);
      navigate("/home");
    } else {
      alert("Usuário ou senha incorretos");
    }
  };

  const verifyInUserList = (
    userName: string,
    userPassword: string
  ): [boolean, IUsuario] => {
    let userExists = false;
    let user: IUsuario;
    for (let i = 0; i < usuariosList.length; i++) {
      if (
        usuariosList[i].nome === userName &&
        usuariosList[i].senha === userPassword
      ) {
        userExists = true;
        user = usuariosList[i];
        break;
      }
    }

    return [userExists, user!];
  };

  return (
    <main>
      <h1>Login</h1>
      <section className="login-wrapper">
        <form onSubmit={handleSubmit}>
          <label htmlFor="usuario">Usuário: </label>
          <input
            type="text"
            name="usuario"
            onChange={handleChange}
            placeholder={"Usuario"}
          />

          <label htmlFor="senha">Senha: </label>
          <input
            type="password"
            name="senha"
            onChange={handleChange}
            placeholder={"Senha"}
          />

          <input type="submit" value="Entrar" />
        </form>
      </section>
    </main>
  );
};

export default Login;
