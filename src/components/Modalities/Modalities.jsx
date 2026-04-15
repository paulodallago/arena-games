import React from "react";
import grid_cs from "../../assets/img/grids/cs.png";
import grid_lol from "../../assets/img/grids/lol.png";
import grid_valorant from "../../assets/img/grids/valorant.png";
import grid_chess from "../../assets/img/grids/chess.jpg";
import styles from "./Modalities.module.css";

const Modalities = () => {
  const modes = [
    {
      title: "Campeonato de Counter Strike 2",
      image: grid_cs,
    },
    {
      title: "Campeonato de Valorant",
      image: grid_valorant,
    },
    {
      title: "Campeonato de Xadrez",
      image: grid_chess,
    },
    {
      title: "Campeonato de League of Legends",
      image: grid_lol,
    },
  ];

  return (
    <>
      <section className={styles.gameModes}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} underline`}>Modalidades</h2>

          <div className={styles.modesGrid}>
            {modes.map((mode, index) => (
              <div key={index} className={styles.gameModeCard}>
                <img
                  src={mode.image}
                  alt={mode.title}
                  className={styles.gameImage}
                />
                <h3 className={styles.gameTitle}>{mode.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Modalities;
