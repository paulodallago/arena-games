import { Carousel } from "primereact/carousel";
import grid_cs from "../../assets/img/grids/cs.png";
import styles from "./Editions.module.css";

import React from "react";

const Editions = () => {
  const carousel = [
    {
      title: "Arena Games",
      image: grid_cs,
    },
    {
      title: "Valorant Championship",
      description: "Monte seu time e dispute o campeonato.",
      image: grid_cs,
    },
    {
      title: "League of Legends",
      description: "Mostre sua habilidade no Rift.",
      image: grid_cs,
    },
  ];

  const itemTemplate = (item) => {
    return (
      <div className={styles.carouselItem}>
        <img src={item.image} alt={item.title} className={styles.carouselImg} />
      </div>
    );
  };

  return (
    <>
      <h2 className={`${styles.sectionTitle} underline`}>Edições anteriores</h2>
      <div className={styles.carouselContainer}>
        <div className={styles.carousel}>
          <Carousel
            value={carousel}
            numVisible={3}
            numScroll={1}
            itemTemplate={itemTemplate}
            circular
            autoplayInterval={4000}
          />
        </div>
      </div>
    </>
  );
};

export default Editions;
