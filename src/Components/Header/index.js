import React from "react";

const Header = () => {
  return (
    <header className="left-side">
      <div className="banner">
        <h2 className="fadeIn">Welcome to My CV</h2>
      </div>
      <img
        src="https://via.placeholder.com/150"
        alt="Profile Image"
        className="profile-img fadeIn"
      />
      <h1 className="fadeIn">Sergio Poli</h1>
      <p className="subtitle fadeIn">Mahasiswa Universitas Klabat | FILKOM</p>
      <section className="social-media fadeIn">
        <h3>Follow Me</h3>
        <div className="social-icons">
          <a
            href="https://www.instagram.com/sergiooyp/"
            className="social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="https://x.com/sergiooyp"
            className="social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            href="https://github.com/sergiopoli77"
            className="social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github" />
          </a>
        </div>
      </section>
    </header>
  );
};

export default Header;
