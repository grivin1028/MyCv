import React from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Works = () => {
  const [works, setWorks] = useState(null);

  useEffect(() => {
    const db = getDatabase();
    const worksRef = ref(db, "works");
    onValue(worksRef, (snapshot) => {
      const data = snapshot.val();
      setWorks(data);
    });
  }, []);

  if (!works) {
    return <p>Loading...</p>; // Tampilkan saat data belum termuat
  }

  return (
    <>
      <style>
        {`
          .works {
            padding: 2rem;
            background: linear-gradient(135deg, #f0f4ff, #e8f7ff);
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            max-width: 900px;
            margin: 2rem auto;
            text-align: center;
            animation: fadeIn 1.5s ease-in-out;
          }

          .works h2 {
            font-size: 2.5rem;
            color: #4a90e2;
            margin-bottom: 1rem;
            font-family: 'Arial', sans-serif;
          }

          .portfolio {
            display: flex;
            justify-content: space-around;
            gap: 1rem;
            flex-wrap: wrap;
            margin-top: 2rem;
          }

          .portfolio-item {
            background-color: #fff;
            border-radius: 12px;
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
            width: 250px;
            padding: 1rem;
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .portfolio-item:hover {
            transform: translateY(-10px);
            box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
          }

          .portfolio-item img {
            width: 100%;
            border-radius: 8px;
            margin-bottom: 1rem;
          }

          .portfolio-item h3 {
            font-size: 1.5rem;
            color: #4a90e2;
            margin-bottom: 0.5rem;
          }

          .portfolio-item p {
            font-size: 1.1rem;
            color: #555;
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
      <section className="works fadeIn">
        <h2>{works.title}</h2>
        <div className="portfolio">
          <div className="portfolio-item">
            <img
              src={`data:image/jpeg;base64, ${works.g1}`}
              alt="E-Business Project"
              className="project-img"
            />
            <h3>{works.p1}</h3>
            <p>{works.p1j}</p>
          </div>
          <div className="portfolio-item">
            <img
              src={`data:image/jpeg;base64, ${works.g2}`}
              alt="Front-End Web Project"
              className="project-img"
            />
            <h3>{works.p2}</h3>
            <p>{works.p2j}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
