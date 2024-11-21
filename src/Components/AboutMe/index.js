import React from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState, CSSProperties } from "react";

const AboutMe = () => {
  const [about, setAboutMe] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const aboutRef = ref(db, "about");

    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setAboutMe(data);
    });
  }, []);
  return (
    <>
      <style>
        {`
          .about-me {
            padding: 2rem;
            background: linear-gradient(135deg, #f0f4ff, #e8f7ff);
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            max-width: 800px;
            margin: 2rem auto;
            text-align: center;
            animation: fadeIn 1.5s ease-in-out;
          }

          .about-me h2 {
            font-size: 2.5rem;
            color: #4a90e2;
            margin-bottom: 1rem;
            font-family: 'Arial', sans-serif;
          }

          .about-me p {
            font-size: 1.2rem;
            line-height: 1.8;
            text-align: justify;
            color: #555;
            font-family: 'Arial', sans-serif;
            margin: 0 auto;
            max-width: 800px;
          }

          b {
            color: #4a90e2;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
      <section className="about-me fadeIn">
        <h2>{about.title}</h2>
        <p>{about.subtitle}</p>
      </section>
    </>
  );
};

export default AboutMe;
