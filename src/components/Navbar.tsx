import { Link, NavLink } from "react-router-dom";

//CSS
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div className="wrapper">
        <div className="logo-wrapper">
          <h1>
            <Link to={"/"}>Logo</Link>
          </h1>
        </div>
        <div className="links-wrapper">
          <NavLink
            to={"/login"}
            className={({ isActive }) => (isActive ? "isActive" : "")}
          >
            Login
          </NavLink>
          <NavLink
            to={"/cadastro"}
            className={({ isActive }) => (isActive ? "isActive" : "")}
          >
            Cadastro
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
