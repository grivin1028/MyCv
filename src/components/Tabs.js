// src/components/Tabs.js
import React, { useState } from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <div className="tab-header">
        <button onClick={() => setActiveTab("about")}>About</button>
        <button onClick={() => setActiveTab("skills")}>Skills</button>
        <button onClick={() => setActiveTab("projects")}>Projects</button>
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default Tabs;
