import { Button } from "primereact/button";
import React from "react";

const YouTubeCard = () => {
  return (
    <>
      <div className="yt-section">
        <div className="yt-card">

          <div className="left">
            <h1>Você já conhece a Arena Games?</h1>
            <p>Acompanhe nossa playlisrt no YouTube para conhecer nossas atividades.</p>
            <Button className="yt-button">
                <i className="pi pi-youtube"></i>
            </Button>
          </div>

            <div className="right">
              <iframe
                src="https://www.youtube.com/embed/Mwk04vJpkPk"
                title="YouTube video"
                allowFullScreen
              />
            </div>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        h1 {
            font-size: x-large;
        }

        .yt-section {
          width: 100vw;
          display: flex;
          justify-content: center;
          margin: 4rem 0;
        }

        .yt-card {
          width: 93vw;
          height: 50vh;
          background: #0f172a;
          color: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          display: flex;
          flex-direction: row;
        }

        .yt-button {
            background-color: #ff0000;
            padding: 0 3rem;
        }

        .pi-youtube {
          font-size: 3rem;
        }

        .left {
            flex: 0.5;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem
        }

        .right {
            flex: 0.5;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        iframe {
            height: 100%
        }

        .playlist-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
          color: white;
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .playlist-btn i {
          font-size: 3rem;
          color: #ff0000;
        }

        .playlist-btn:hover {
          transform: scale(1.05);
          color: #ff0000;
        }

        .playlist-btn:hover i {
          color: #ff4d4d;
        }

        @media (max-width: 768px) {
          .yt-card {
            width: 95%;
          }
        }
      `}</style>
    </>
  );
}

export default YouTubeCard;