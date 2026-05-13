// @ts-nocheck
import React from "react";
import styles from "./MainCarousel.module.css";
import mainCarouselContent from "../../../data/mainCarouselContent";
import { responsiveOptionsMain } from "../../../utils";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { Carousel } from "primereact/carousel";

const MainCarousel = () => {
  const mobile = window.innerWidth < 768;

  const navigate = useNavigate();

  const itemTemplate = (item) => {
    return (
      <div className={styles.carouselItem + " mainCarousel"}>
        <div
          className={styles.carouselImg}
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className={styles.carouselContent}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {item.title === "Entretenimento" ? (
              <Button
                label="Ver mais"
                onClick={() =>
                  navigate("/programacao", {
                    state: { scrollTo: "entretenimento" },
                  })
                }
                className="defaultHover"
              />
            ) : (
              <Button
                label="Inscrever-se"
                onClick={() =>
                  window.open(
                    "https://painel.passofundo.ifsul.edu.br",
                    "_blank",
                  )
                }
                className="defaultHover"
              />
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={styles.carouselContainer}>
        <Carousel
          value={mainCarouselContent}
          className={styles.carousel}
          numVisible={1}
          numScroll={1}
          itemTemplate={itemTemplate}
          circular
          autoplayInterval={4000}
          responsiveOptions={responsiveOptionsMain}
          showIndicators={!mobile}
          showNavigators={!mobile}
        />
      </div>
    </>
  );
};

export default MainCarousel;
