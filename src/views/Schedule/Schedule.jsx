// @ts-nocheck
import React, { useEffect, useRef } from "react";
import styles from "./Schedule.module.css";
import Hero from "../../components/schedule/Hero/Hero";
import ModalitiesCarousel from "../../components/schedule/ModalitiesCarousel/ModalitiesCarousel";
import EntertainmentCarousel from "../../components/schedule/EntertainmentCarousel/EntertainmentCarousel";
import { useLocation } from "react-router-dom";

const Schedule = () => {
  const location = useLocation();
  const entertainmentRef = useRef(null);
  const modalitiesRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollTo === "entretenimento") {
      entertainmentRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    } else if (location.state?.scrollTo === "modalidades") {
      modalitiesRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [location]);

  return (
    <>
      <Hero />

      <div className={styles.schedule}>
        <section ref={modalitiesRef}>
          <h1 className={styles.scheduleTitle}>Arena Games</h1>
          <ModalitiesCarousel />
        </section>
        <section ref={entertainmentRef}>
          <h1 className={styles.scheduleTitle}>Entretenimento</h1>
          <EntertainmentCarousel />
        </section>
      </div>
    </>
  );
};

export default Schedule;
