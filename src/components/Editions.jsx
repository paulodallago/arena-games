import { Carousel } from "primereact/carousel";
import grid_cs from "../assets/img/grids/cs.png"
import grid_lol from "../assets/img/grids/cs.png"
import grid_valorant from "../assets/img/grids/cs.png"
import grid_chess from "../assets/img/grids/cs.png"

import React from "react";
import { Button } from "primereact/button";

const Editions = () => {
  const carousel = [
    {
      title: "Arena Games",
      description: "Participe do maior evento de games do IFSul.",
      image: grid_cs
    },
    {
      title: "Valorant Championship",
      description: "Monte seu time e dispute o campeonato.",
      image: grid_cs
    },
    {
      title: "League of Legends",
      description: "Mostre sua habilidade no Rift.",
      image: grid_cs
    }
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
            numVisible={3}
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
          height: 50vh;
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

export default Editions;