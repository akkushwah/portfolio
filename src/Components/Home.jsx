
import React from "react";
import PropTypes from "prop-types";
import { IoIosArrowDropdown } from "react-icons/io";
import image from "../images/3dbackground.jpg";

const imageAltText = "3d elements background";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt={imageAltText} />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: 'translate(-50%,-50%)', width: "100vw", lineHeight: '4rem' }}>
        <div data-aos="zoom-in-up" data-aos-delay="400">
          <h1>{name}</h1>
          <h2>{title}</h2>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <a href="#about">
          <IoIosArrowDropdown style={{ height: "3rem", width: "3rem", fontWeight: 400 }} className="arrow" />
        </a>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
