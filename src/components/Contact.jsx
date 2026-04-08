import React from "react";
import logo from "../assets/img/arena/logo_dark.png";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="container">
          <div className="contact-content">

            {/* LEFT IMAGE */}
            <div className="contact-image">
              <img src={logo} alt="Entre em contato" />
            </div>

            {/* MIDDLE TEXT */}
            <div className="contact-intro">
              <h3>Tem interesse em apoiar?</h3>
              <p>
                Entre em contato com nós por meio de algum dos nossos contatos ao lado.
              </p>
            </div>

            {/* RIGHT INFO */}
            <div className="contact-text">
              <h2 className="section-title">Fale Conosco</h2>

              <div className="contact-info">
                <p>📍 Est. Perimetral Leste, 150. Passo Fundo - RS</p>
                <p>✉️ pf-arenagames@ifsul.edu.br</p>
                <p>📞 (54) 2024-0400</p>
              </div>

              <div className="footer-social">
                <a
                  href="https://www.instagram.com/arenagamesifsul/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="bi bi-instagram"></i>
                </a>

                <a
                  href="https://www.youtube.com/@ArenaGamesIFSULPF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CSS */}
      <style>{`
        .contact {
          padding: 4rem 0;
          background: #f9fafb;
        }

        .container {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 2rem;
          align-items: center;
        }

        .contact-image img {
          width: 100%;
          max-width: 250px;
          object-fit: contain;
        }

        .contact-intro h3 {
          font-family: 'Montserrat', sans-serif;
          margin-bottom: 1rem;
        }

        .contact-intro p {
          color: #555;
        }

        .contact-text {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .section-title {
          font-family: 'Montserrat', sans-serif;
        }

        .contact-info p {
          margin: 0.3rem 0;
          color: #333;
        }

        .footer-social {
          display: flex;
          gap: 1.5rem;
          margin-top: 1rem;
        }

        .social-icon {
          font-size: 1.5rem;
          color: #0f085a;
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .social-icon:hover {
          transform: scale(1.1);
          color: #145ab4;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .contact-content {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .contact-image img {
            margin: 0 auto;
          }

          .footer-social {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}

export default Contact;