import React from "react";
import styles from "./Hero.module.css";
import heroImg from "../../../assets/img/heroes/arena_right.png";

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <img src={heroImg} alt="Arena Games IFSul" className={styles.heroImg} />

      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1>Programação do Evento</h1>
        <p>
          Torneios de e-sports, xadrez e espaços de entretenimento — tudo em um
          só dia. Confira abaixo o que acontece no Arena Games IFSul.
        </p>
        <div className={styles.info}>
          <span>
            <i className="pi pi-calendar"></i> 09 de maio de 2026
          </span>
          <span>
            <i className="pi pi-clock"></i> A partir das 08:00
          </span>
          <span>
            <i className="pi pi-map-marker"></i> IFSul – Câmpus Passo Fundo
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
