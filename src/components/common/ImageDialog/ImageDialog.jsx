import React from "react";
import { Dialog } from "primereact/dialog";
import styles from "./ImageDialog.module.css";

// @ts-ignore
const ImageDialog = ({ image, visible, setVisible, alt = "" }) => {
  if (!image) return null;

  return (
    <Dialog
      visible={visible}
      onHide={() => setVisible(false)}
      dismissableMask
      showHeader={false}
      className={styles.dialog}
      contentClassName={styles.content}
      blockScroll={true}
    >
      <img src={image} alt={image} className={styles.image} />
    </Dialog>
  );
};

export default ImageDialog;
