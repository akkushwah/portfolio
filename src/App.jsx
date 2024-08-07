import { useEffect } from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import AOS from "aos";
import "aos/dist/aos.css"
import "./styles.css";

const siteProps = {
  name: "Akanksha Kushwah",
  title: "Frontend Developer",
  email: "akankshakushwah@gmail.com",
  gitHub: "https://github.com/akkushwah",
  linkedIn: "https://www.linkedin.com/in/akanksha1501/",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, [])

  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
