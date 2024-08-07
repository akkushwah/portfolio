import React from "react";


// import image from "../images/read-3667768_1280.jpg";
// import image from '../images/abstract-design.png'
import image from '../images/motion-background.jpg'

const imageAltText = "purple and blue abstract background";

const description =
  "I'm Akanksha Kushwah, a passionate front-end developer with a B.Tech in Computer Science and currently pursuing a MERN Stack Development course. I've built several projects that highlight my problem-solving skills and attention to detail. I'm eager to learn, grow, and contribute to innovative web applications.";

const skillsList = [
  "HTML",
  "CSS",
  "Javascript",
  "Bootstrap",
  "React",
  "Redux",
  "Git",
  "Tailwind",
];
const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "#fff9",
          width: "60%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <h2>Skills</h2>
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            columns: 2,
            fontSize: "1.25rem",
            listStyle: "none",
            justifyContent: 'center'
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill} style={{ border: '1px solid black', paddingInline: '20px', paddingBlock: '20px', width: '8rem', borderRadius: '5px', margin: '10px' }}
              className="skills">{skill}</li>
          ))}
        </ul>

      </div>
    </section >
  );
};

export default About;
