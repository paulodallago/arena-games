import React from "react";
import styles from "./Modalities.module.css";
import modalitiesContent from "../../../data/modalitiesContent";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const Modalities = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className={styles.gameModes}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} underline`}>Modalidades</h2>
          <div className={styles.upperSection}>
            <Button
              label="Programação completa"
              className={styles.button + " defaultHover"}
              onClick={() =>
                navigate("/programacao", {
                  state: { scrollTo: "modalidades" },
                })
              }
            />
          </div>

          <div className={styles.modesGrid}>
            {modalitiesContent.map((mode, index) => (
              <div key={index} className={styles.gameModeCard + " defaultLift"}>
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
