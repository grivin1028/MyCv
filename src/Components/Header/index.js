import React from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState, CSSProperties } from "react";

const Header = () => {
  const [header, setHeader] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const headerRef = ref(db, "header");
    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setHeader(data);
    });
  }, []);

  return (
    <header className="left-side">
      <div className="banner">
        <h2 className="fadeIn">{header.cvy}</h2>
      </div>
      <img
        src={`data:image/jpeg;base64, ${header.profil}`}
        alt="Profile Image"
        className="profile-img fadeIn"
      />
      <h1 className="fadeIn">{header.title}</h1>
      <p className="subtitle fadeIn">{header.subtitle}</p>
      <section className="social-media fadeIn">
        <h3>{header.media}</h3>
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
