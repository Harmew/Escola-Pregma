import React from "react";
import { NavLink } from "react-router-dom";

// CSS
import styles from "./Navbar.module.css";

// SVG
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={`${styles.navItens} container`}>
        <NavLink to="/">
          <Logo />
        </NavLink>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/turmas">Turmas</NavLink>
          </li>
          <li>
            <NavLink to="/professor">Professores</NavLink>
          </li>
          <li>
            <NavLink to="/aluno">Àrea do Aluno</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
