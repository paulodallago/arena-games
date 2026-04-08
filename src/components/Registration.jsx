import React from "react";
import background from "../assets/img/general/background_registrations.jpg";
import { Button } from "primereact/button";

const Registration = () => {
  return (
    <>
      <section
        className="arena"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="arena-content">
            <h2 className="section-title">Inscrições</h2>

            <p>
              A Arena Games IFSul – Passo Fundo está te esperando! Competições,
              premiações e muito networking. Monte sua equipe, escolha sua
              modalidade e partiu campeonato!
            </p>

            <Button
              label="Inscrições"
              onClick={() =>
                window.open(
                  "https://painel.passofundo.ifsul.edu.br/syseve/inscricoes/",
                  "_blank",
                )
              }
            />
          </div>
        </div>
      </section>

      {/* CSS */}
      <style>{`
        .arena {
          position: relative;
          padding: 5rem 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          color: white;
          text-align: center;
          overflow: hidden;
        }

        /* OVERLAY (behind) */
        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          z-index: 1;
        }

        /* CONTENT (above overlay) */
        .container {
          position: relative;
          z-index: 2;
          width: 90%;
          max-width: 900px;
          margin: 0 auto;
        }

        .arena-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          align-items: center;
        }

        .section-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 2rem;
        }

        .section-text {
          font-size: 1rem;
        }

        .arena-content p {
          color: #e2e8f0;
          max-width: 600px;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </>
  );
};

export default Registration;
