// @ts-nocheck
import React from "react";
import styles from "./Timer.module.css";
import Countdown from "react-countdown";

const Timer = () => {
  const date = new Date("2026-05-9T08:00:00-03:00");

  return (
    <div className={styles.timer}>
      {date > Date.now() ? (
        <Countdown
          date={date}
          renderer={({ days, hours, minutes, seconds }) => (
            <div>
              <span>A Arena Games IFSul começa em </span>
              <span className={styles.countdown}>
                {days}d {hours}h {minutes}m {seconds}s
              </span>
            </div>
          )}
        />
      ) : (
        <>Evento encerrado</>
      )}
    </div>
  );
};

export default Timer;
