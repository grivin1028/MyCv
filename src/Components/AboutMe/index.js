import React from "react";

const AboutMe = () => {
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
        <h2>About Me</h2>
        <p>
          Saya adalah mahasiswa <b>Universitas Klabat</b>, prodi Sistem
          Informasi tahun ajaran 2022. Saya memiliki ketertarikan besar pada
          dunia teknologi informasi, pengembangan perangkat lunak, dan inovasi
          digital.
        </p>
      </section>
    </>
  );
};

export default AboutMe;
