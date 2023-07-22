import "./Showcase.css";
import ReactLogo from  "../images/React.svg";
import Javascript from "../images/JavaScript.png";
import Java from "../images/Java.png";


const Showcase = () => {
  return (
    <div className="showcase-box">
      <div className="title">
        <h1>Skills</h1>
      </div>
      <div className="skill-container">
        <div className="skill" id="color1">
          <img className="skill-pic" src={ReactLogo} alt="ReactLogo"></img>
        </div>
        <div className="skill" id="color2">
        <img className="skill-pic" src={Javascript} alt="ReactLogo"></img>
        </div>
        <div className="skill" id="color1">
        <img className="skill-pic" src={Java} id="larger-width"  alt="ReactLogo"></img>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
