// @ts-nocheck
import React from "react";
import { Dialog } from "primereact/dialog";
import styles from "./InfoDialog.module.css";

const InfoDialog = ({ body, visible, setVisible }) => {
  if (!body) return null;

  return (
    <Dialog
      header={body.title}
      visible={visible}
      className={styles.dialog}
      onHide={() => setVisible(false)}
      dismissableMask={true}
    >
      <p>
        <strong>Data:</strong> {body.date}
      </p>
      <p>
        <strong>Horário:</strong> {body.time}
      </p>
      <p>
        <strong>Local:</strong> {body.location}
      </p>
      {body.description && (
        <p>
          <strong>Descrição:</strong> {body.description}
        </p>
      )}

      <hr />

      {body.rules &&
        body.rules.map((element, idx) => (
          <div key={idx}>
            <h3>{element.header}</h3>

            <ul>
              {element.content.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
    </Dialog>
  );
};

export default InfoDialog;
