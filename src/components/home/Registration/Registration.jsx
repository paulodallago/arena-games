import React from "react";
import background from "../../../assets/img/general/background_registrations.jpg";
import { Button } from "primereact/button";
import styles from "./Registration.module.css";

const Registration = () => {
  return (
    <>
      <section
        className={styles.arena}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.arenaContent}>
            <h2 className={styles.sectionTitle}>Inscrições</h2>

            <p>
              A Arena Games IFSul – Passo Fundo está te esperando! Competições,
              premiações e muito networking. Monte sua equipe, escolha sua
              modalidade e partiu campeonato!
            </p>

            <Button
              label="INSCRIÇÕES"
              className={`${styles.btnRegister} defaultHover`}
              onClick={() =>
                window.open(
                  "https://painel.passofundo.ifsul.edu.br/syseve/inscricoes/",
                  "_blank",
                )
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
