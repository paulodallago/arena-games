import { Carousel } from "primereact/carousel";
import hero_arena from "../assets/img/heroes/arena.png"
import hero_cs from "../assets/img/heroes/cs.png"
import hero_valorant from "../assets/img/heroes/valorant.jpg"
import hero_lol from "../assets/img/heroes/lol.png"
import hero_chess from "../assets/img/heroes/chess.jpg"
import React from "react";
import { Button } from "primereact/button";

const MainCarousel = () => {
  const carousel = [
    {
      title: "Arena Games",
      description: "Participe do maior evento de games do IFSul.",
      image: hero_arena
    },
    {
      title: "CS",
      description: "Monte seu time e dispute o campeonato.",
      image: hero_cs
    },
    {
      title: "League of Legends",
      description: "Mostre sua habilidade no Rift.",
      image: hero_lol
    },
    {
      title: "Valorant",
      description: "Monte seu time e dispute o campeonato.",
      image: hero_valorant
    },
    {
      title: "Xadrez",
      description: "Monte seu time e dispute o campeonato.",
      image: hero_chess
    },
  ];

  const itemTemplate = (item) => {
    return (
      <div className="carousel-item">
        <img src={item.image} alt={item.title} className="carousel-img" />
        <div className="carousel-content">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <Button label="Saiba mais" />
        </div>
      </div>
    );
  };

    return (
      <>
      <div className="carousel-container">
        <div className="carousel">
          <Carousel
            value={carousel}
            numVisible={1}
            numScroll={1}
            itemTemplate={itemTemplate}
            circular
            autoplayInterval={4000}
          />
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        .carousel-container {
          margin-top: 10vh;
        }

        .carousel {
          width: 90vw;
          margin: 0 auto;
        }

        .carousel-item {
          position: relative;
          width: 100%;
          overflow: hidden;
          border-radius: 10px;
        }

        .carousel-content {
          width: 100%;
          position: absolute;
          bottom: 20px;
          left: 20px;
          color: white;
          background: rgba(0,0,0,0.5);
          padding: 1rem;
          border-radius: 8px;
        }

        .carousel-img {
          width: 100%;
          object-fit: cover;
        }

        .carousel-content h3 {
          margin: 0;
          font-size: 1.5rem;
        }

        .carousel-content p {
          margin: 0.5rem 0;
        }
      `}</style>
      </>
    )
}

export default MainCarousel;