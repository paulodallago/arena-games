import React, { useState } from "react";
import { Menubar } from "primereact/menubar";
import logo_if from "../../../assets/img/if/logo.png";
import styles from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      url: "/arena-games/",
    },
    {
      label: "Próxima Edição",
      icon: "pi pi-calendar",
      url: "/arena-games/#/programacao",
    },
    {
      label: "Edições passadas",
      icon: "pi pi-history",
      url: "/arena-games/#/edicoes",
    },
  ];

  const start = (
    <div className={styles.menuLeft}>
      <img src={logo_if} alt="Logo Ifsul" className={styles.logo} />
    </div>
  );

  const end = (
    <>
      <div className={styles.menuRight}>
        {items.map((item, i) => (
          <a key={i} href={item.url} className={styles.menuLink}>
            <i className={item.icon}></i>
            <span>{item.label}</span>
          </a>
        ))}
        <a
          href="https://painel.passofundo.ifsul.edu.br/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.register + " defaultHover"}
        >
          <span>Inscrever-se</span>
        </a>
      </div>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className="pi pi-bars"></i>
      </button>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {items.map((item, i) => (
            <a
              key={i}
              href={item.url}
              className={styles.mobileLink}
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </a>
          ))}
          <a
            href="https://painel.passofundo.ifsul.edu.br/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileRegister}
          >
            Inscrever-se
          </a>
        </div>
      )}
    </>
  );

  return <Menubar start={start} end={end} className={styles.menuBar} />;
};

export default Header;
