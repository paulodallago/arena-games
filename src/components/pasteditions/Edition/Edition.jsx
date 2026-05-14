import React, { useState } from "react";
import styles from "./Edition.module.css";
import ImageDialog from "../../common/ImageDialog/ImageDialog";
import { Carousel } from "primereact/carousel";

const context = require.context(
  "../../../assets/img/editions/",
  true,
  /\.(png|jpe?g|webp)$/,
);

// @ts-ignore
const Edition = (props) => {
  const [visible, setVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(false);

  const images = context
    .keys()
    .filter((key) => key.includes(`./${props.item.path}`))
    .map((key) => ({
      image: context(key),
      title: key,
    }));

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
    <div className={styles.container}>
      <ImageDialog
        image={selectedImage}
        visible={visible}
        setVisible={setVisible}
      />
      <h2 className={`underlineText ${styles.title}`}>{props.item.title}</h2>
      <p className={styles.text}>{props.item.text}</p>
      <div className={styles.carouselContainer}>
        <div className={styles.carousel}>
          <Carousel value={images} itemTemplate={itemTemplate} numVisible={4} />
        </div>
      </div>
    </div>
  );
};

export default Edition;
