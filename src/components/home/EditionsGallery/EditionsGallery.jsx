import styles from "./EditionsGallery.module.css";
import React, { useState } from "react";
import ImageDialog from "../../common/ImageDialog/ImageDialog";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { Carousel } from "primereact/carousel";
import { responsiveOptions } from "../../../utils";

// @ts-ignore
const context = require.context(
  "../../../assets/img/editions",
  true,
  /\.(png|jpe?g|webp)$/,
);

// @ts-ignore
const entertainment = context.keys().map((key) => ({
  image: context(key),
}));

const EditionsGallery = () => {
  const [visible, setVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(false);

  const navigate = useNavigate();

  // @ts-ignore
  const itemTemplate = (item) => {
    return (
      <div className={`${styles.carouselItem} defaultLift`}>
        <img
          src={item.image}
          alt={item.title}
          className={styles.carouselImg}
          onClick={() => {
            setVisible(true);
            setSelectedImage(item.image);
          }}
        />
      </div>
    );
  };

  return (
    <>
      <ImageDialog
        image={selectedImage}
        visible={visible}
        setVisible={setVisible}
      />
      <h2 className={`${styles.sectionTitle} underline`}>Edições passadas</h2>
      <div className={styles.upperSection}>
        <Button
          label="Ver mais"
          className={styles.button + " defaultHover"}
          onClick={() => navigate("/edicoes")}
        />
      </div>
      <div className={styles.carouselContainer}>
        <div className={styles.carousel}>
          <Carousel
            itemTemplate={itemTemplate}
            value={entertainment}
            numVisible={4}
            numScroll={1}
            circular
            autoplayInterval={4000}
            responsiveOptions={responsiveOptions}
          />
        </div>
      </div>
    </>
  );
};

export default EditionsGallery;
