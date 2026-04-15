import React from "react";
import styles from "./Timer.module.css";
import Countdown from "react-countdown";

const Timer = () => {
  return (
    <div className={styles.timer}>
      <Countdown
        date={new Date("2026-05-09T08:00:00-03:00")}
        renderer={({ days, hours, minutes, seconds }) => (
          <div>
            A Arena Games IFSul começa em{" "}
            <span className={styles.markers}>
              {days}d {hours}h {minutes}m {seconds}s
            </span>
          </div>
        )}
      />
    </div>
  );
};

export default Timer;
