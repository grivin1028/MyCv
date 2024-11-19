import React from "react";

const Works = () => {
  return (
    <section className="works fadeIn">
      <h2>My Projects</h2>
      <div className="portfolio">
        <div className="portfolio-item">
          <img
            src="./images/alaise.png"
            alt="Visual Programming Project"
            className="project-img"
          />
          <h3>Visual Programming</h3>
          <p>Desktop Aplikasi Inventory Admin</p>
        </div>
        <div className="portfolio-item">
          <img
            src="./images/tomatikweb.png"
            alt="Front-End Web Project"
            className="project-img"
          />
          <h3>Front-End Web</h3>
          <p>Tomatik, website informasi tentang tomat</p>
        </div>
        <div className="portfolio-item">
          <img
            src="./images/scifigame.jpeg"
            alt="Unity 3D Game Project"
            className="project-img"
          />
          <h3>Unity 3D Game</h3>
          <p>Game FPS Shooter bertemakan sci-fi</p>
        </div>
      </div>
    </section>
  );
};

export default Works;
