import React from "react";
import logo_if from "../assets/img/if/logo_pf.png";
import logo_off from "../assets/img/partners/off.jpg";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">

          {/* SUPPORT */}
          <div className="footer-support">

            {/* REALIZAÇÃO */}
            <div className="footer-section">
              <h3>Realização</h3>
              <div className="support-logos">
                <a href="https://passofundo.ifsul.edu.br" target="_blank" rel="noopener noreferrer">
                  <img src={logo_if} alt="IFSul Logo" />
                </a>
              </div>
            </div>

            <hr className="footer-divider" />

            {/* APOIO */}
            <div className="footer-section">
              <h3>Apoio</h3>
              <div className="support-logos">
                <a href="https://www.instagram.com/offclubpf/" target="_blank" rel="noopener noreferrer">
                  <img src={logo_off} alt="OffClub Logo" />
                </a>
              </div>
            </div>

          </div>

          {/* COPYRIGHT */}
          <div className="footer-content">
            <p className="footer-copyright">
              © 2025 - IFSul - Câmpus Passo Fundo:{" "}
              <a href="https://passofundo.ifsul.edu.br" target="_blank" rel="noopener noreferrer">
                passofundo.ifsul.edu.br
              </a>
            </p>
          </div>

        </div>
      </footer>

      {/* CSS */}
      <style>{`
        .footer {
          background-color: white;
          padding: 2rem 0;
          border-top: 1px solid #eee;
        }

        .container {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-support {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 2rem;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .footer-section h3 {
          margin-bottom: 1rem;
          color: #333;
          font-family: 'Montserrat', sans-serif;
        }

        .support-logos {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: center;
          align-items: center;
        }

        .support-logos img {
          max-height: 80px;
          max-width: 150px;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .support-logos img:hover {
          transform: scale(1.05);
        }

        .footer-divider {
          width: 80%;
          margin: 1.5rem 0;
          border: none;
          border-top: 1px solid #ddd;
        }

        .footer-content {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .footer-copyright {
          color: #666;
          font-size: 0.9rem;
          text-align: center;
        }

        .footer-copyright a {
          color: #333;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-copyright a:hover {
          color: #0f085a;
        }

        @media (max-width: 768px) {
          .support-logos {
            width: 100%;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </>
  );
}