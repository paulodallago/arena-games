import { Carousel } from "primereact/carousel";
import styles from "./EntertainmentCarousel.module.css";

import React, { useState } from "react";
import { Button } from "primereact/button";
import entertainment from "../../assets/json/entertainment";
import InfoDialog from "../InfoDialog/InfoDialog";

const EntertainmentCarousel = () => {
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const itemTemplate = (item) => {
    return (
      <div className={`${styles.carouselItem} defaultHover`}>
        <img src={item.image} alt={item.title} className={styles.carouselImg} />
        <div className={styles.carouselContent}>
          <h3>{item.title}</h3>
          <div className={styles.info}>
            <p>
              <i className="pi pi-calendar" />
              {item.date}
            </p>
            <p>
              <i className="pi pi-clock" />
              {item.time}
            </p>
            <p>
              <i className="pi pi-map-marker" />
              {item.location}
            </p>
          </div>
          <Button
            label="Saiba mais"
            icon="pi pi-info-circle"
            className="transparent-button"
            onClick={() => {
              setSelectedItem(item);
              setVisible(true);
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <InfoDialog
        body={selectedItem}
        visible={visible}
        setVisible={setVisible}
      />
      <div className={styles.carouselContainer}>
        <div className={styles.carousel}>
          <Carousel
            value={entertainment}
            numVisible={2}
            numScroll={1}
            itemTemplate={itemTemplate}
            circular
            showNavigators={false}
            showIndicators={false}
            // autoplayInterval={4000}
          />
        </div>
      </div>
    </>
  );
};

export default EntertainmentCarousel;
