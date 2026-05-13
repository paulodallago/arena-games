import { Button } from "primereact/button";
import React from "react";
import styles from "./YouTubeCard.module.css";

const YouTubeCard = () => {
  return (
    <>
      <div className={styles.ytSection}>
        <div className={styles.ytCard}>
          <div className={styles.left}>
            <h1>Você já conhece a Arena Games?</h1>
            <p>
              Acompanhe nossa playlist no YouTube para conhecer nossas
              atividades.
            </p>
            <Button
              className={`${styles.ytButton} defaultHover`}
              onClick={() =>
                window.open(
                  "https://www.youtube.com/watch?v=Mwk04vJpkPk&list=PLaFNDyGrPJFZQLgfX7lj0XwpeyJmw4W2h",
                  "_blank",
                )
              }
            >
              <i className="pi pi-youtube" style={{ fontSize: "3rem" }} />
            </Button>
          </div>

          <div className={styles.right}>
            <iframe
              src="https://www.youtube.com/embed/Mwk04vJpkPk"
              title="YouTube video"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default YouTubeCard;
