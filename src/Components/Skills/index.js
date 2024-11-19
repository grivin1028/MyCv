import React from "react";

const Skills = () => {
  return (
    <>
      <style>
        {`
          .skills {
            padding: 2rem;
            background: linear-gradient(135deg, #f0f4ff, #e8f7ff);
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            max-width: 800px;
            margin: 2rem auto;
            text-align: center;
            animation: fadeIn 1.5s ease-in-out;
          }

          .skills h2 {
            font-size: 2.5rem;
            color: #4a90e2;
            margin-bottom: 1rem;
            font-family: 'Arial', sans-serif;
          }

          .skills ul {
            list-style: none;
            padding: 0;
          }

          .skills li {
            display: flex;
            align-items: center;
            gap: 1rem;
            font-size: 1.2rem;
            color: #333;
            margin: 1rem 0;
            font-family: 'Arial', sans-serif;
          }

          .skills li i {
            font-size: 2rem;
            color: #4a90e2;
            transition: transform 0.3s ease, color 0.3s ease;
          }

          .skills li:hover i {
            transform: scale(1.2);
            color: #ff5f5f;
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
      <section className="skills fadeIn">
        <h2>My Skills</h2>
        <ul>
          <li>
            <i className="fab fa-html5" /> <span>HTML, CSS, JavaScript</span>
          </li>
          <li>
            <i className="fab fa-react" /> <span>React Js</span>
          </li>
          <li>
            <i className="fab fa-git-alt" /> <span>Git</span>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Skills;
