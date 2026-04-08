import React from "react";
import { Menubar } from "primereact/menubar";
import logo_if from "../assets/img/if/logo.png"

const Header = () => {
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      url: "/home",
    },
    {
      label: "Cronograma",
      icon: "pi pi-calendar",
      url: "/programacao"
    }
  ];

  // LEFT (logo)
  const start = (
    <div className="menu-left">
        <img
        src={logo_if}
        alt="Logo Ifsul"
        height="40"
        className="logo"
        />
    </div>
  );

  // RIGHT (menu)
  const end = (
    <div className="menu-right">
      {items.map((item, i) => (
        <a key={i} href={item.url} className="menu-link">
          <i className={item.icon}></i>
          <span>{item.label}</span>
        </a>
      ))}
    </div>
  );

  return (
    <>
      <Menubar start={start} end={end} className="custom-menubar" />

      <style>{`
        .logo {
            height: 50px
        }

        .custom-menubar {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          background: white;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        /* Remove default menu */
        .p-menubar-root-list {
          display: none;
        }

        /* Right side container */
        .menu-right {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          margin-right: 5vw;
        }

        .menu-left {
            margin-left: 5vw;
        }

        .menu-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: #333;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .menu-link i {
          color: #333;
          font-size: 1rem;
        }

        .menu-link:hover {
          color: #0f085a;
        }

        .menu-link:hover i {
          color: #0f085a;
        }

        .p-menubar {
          padding: 0.5rem 1rem;
          background: white !important;
        }
      `}</style>
    </>
  );
}

export default Header;