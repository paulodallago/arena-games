import { Carousel } from "primereact/carousel";
import styles from "./ModalitiesCarousel.module.css";

import React, { useState } from "react";
import { Button } from "primereact/button";
import InfoDialog from "../InfoDialog/InfoDialog";
import modalities from "../../assets/json/modalities";

const ModalitiesCarousel = () => {
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
            <hr className="separator" />
          </div>
          <Button
            icon="pi pi-info-circle"
            label="Saiba mais"
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
            value={modalities}
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

export default ModalitiesCarousel;
