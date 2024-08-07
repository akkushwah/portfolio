import React from "react";

import todo from "../images/Todo-image.png";
import todesktop from "../images/Todesktop.png";
import reastaurant from "../images/restaurant.png";
import gemini from "../images/gemini.png";


const projectList = [
  {
    id: 1,
    title: "Restaurant Web",
    description:
      "Designed using React and Tailwind CSS, featuring a beautiful UI and smooth animations.",
    url: "https://github.com/akkushwah/Restaurant_Web",
    image: reastaurant
  },
  {
    id: 2,
    title: "Your Gemini",
    description: "Developed a React-based Gemini clone with full API integration, question history, and data loaders",
    url: "https://github.com/akkushwah/gemini_clone",
    image: gemini
  },
  {
    id: 3,
    title: "ToDesktop Site",
    description:
      "Todo Desktop is a site built with Tailwind CSS and React, featuring a modern and attractive UI.",
    url: "https://github.com/akkushwah/ToDesktop_Tailwind_Web",
    image: todesktop
  },
  {
    id: 4,
    title: "Todo App",
    description:
      "Todo app built for managing tasks, Users can add, delete, update tasks to stay organized and efficient.",
    url: "https://github.com/akkushwah/TodoApp",
    image: todo
  },
];


const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.id}  >
              <img src={project.image}></img>
              <a href={project.url} target="_blank">
                <div class="box-content">
                  <h2>{project.title}</h2>
                  <p style={{ paddingInline: '10px', paddingBlock: '10px', fontWeight: 400 }}>{project.description}</p>
                </div>
              </a>
            </div>
          ))}

        </div>
      </div>
    </section >
  );
};

export default Portfolio;
