import React from "react";
import "../../assets/css/style.css";

const Header = () => {
  return (
    <header className="left-side">
      <div className="banner">
        <h2 className="fadeIn">Welcome to My CV</h2>
      </div>
      <img
        src="/image/profil1.jpeg" // Path menuju file di folder public
        alt="Profile Image"
        className="profile-img fadeIn"
      />
      <h1 className="fadeIn">Grivin Brayen Keyeh</h1>
      <p className="subtitle fadeIn">Mahasiswa Universitas Klabat | FILKOM</p>
      <section className="social-media fadeIn">
        <h3>Follow Me In</h3>
        <div className="social-icons">
          <a
            href="https://www.instagram.com/grivinbrayen/"
            className="social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="https://x.com/vinnnk28"
            className="social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            href="https://github.com/grivin1028"
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
