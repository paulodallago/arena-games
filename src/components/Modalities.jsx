import React from "react";
import grid_cs from "../assets/img/grids/cs.png"
import grid_lol from "../assets/img/grids/lol.png"
import grid_valorant from "../assets/img/grids/valorant.png"
import grid_chess from "../assets/img/grids/chess.jpg"

const Modalities = () => {
  const modes = [
    {
      title: "Campeonato de Counter-Strike 2",
      image: grid_cs
    },
    {
      title: "Campeonato de Valorant",
      image: grid_valorant
    },
    {
      title: "Campeonato de Xadrez",
      image: grid_chess
    },
    {
      title: "Campeonato de League of Legends",
      image: grid_lol
    }
  ];

  return (
    <>
      <section className="game-modes">
        <div className="container">
          <h2 className="section-title">Modalidades</h2>

          <div className="modes-grid">
            {modes.map((mode, index) => (
              <div key={index} className="game-mode-card">
                <img src={mode.image} alt={mode.title} className="game-image" />
                <h3 className="game-title">{mode.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSS */}
      <style>{`
        .game-modes {
          padding: 4rem 0;
          background: linear-gradient(135deg, #1a1a2e, #16213e);
        }

        .container {
          width: 90%;
          max-width: 1100px;
          margin: 0 auto;
        }

        .section-title {
          color: white;
          text-align: center;
          margin-bottom: 3rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 2.2rem;
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 3px;
          background: linear-gradient(90deg, #304293, #4a90e2);
        }

        /* GRID (replaces bootstrap row/col) */
        .modes-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        /* CARD */
        .game-mode-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          padding: 1.5rem;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        .game-mode-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(48,66,147,0.2), rgba(74,144,226,0.2));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .game-mode-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }

        .game-mode-card:hover::before {
          opacity: 1;
        }

        .game-image {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 10px;
          margin-bottom: 1rem;
        }

        .game-title {
          color: white;
          font-size: 1.2rem;
          font-weight: 700;
          font-family: 'Montserrat', sans-serif;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .modes-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default Modalities;