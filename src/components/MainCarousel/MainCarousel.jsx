import { Carousel } from "primereact/carousel";
import React from "react";
import styles from "./MainCarousel.module.css";
import mainCarouselContent from "../../assets/json/mainCarouselContent";

const MainCarousel = () => {
  const itemTemplate = (item) => {
    return (
      <div className={styles.carouselItem}>
        <div
          className={styles.carouselImg}
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className={styles.carouselContent}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
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
        />
      </div>
    </>
  );
};

export default MainCarousel;
