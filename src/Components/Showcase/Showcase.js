import "./Showcase.css";

const Showcase = () => {
  return (
    <div className="showcase-box">
      <h1 className="showcase-title">What To Expect</h1>
      <div className="steps">
        <div className="steps-item" id="color1">
          <div className="step-img"></div>
          <div className="step-text">
            <p>
              React applications
            </p>
          </div>
        </div>
        <div className="steps-item" id="color2">
          <div className="step-img"></div>
          <div className="step-text">
            <p>Java applications</p>
          </div>
        </div>
        <div className="steps-item" id="color1">
          <div className="step-img"></div>
          <div className="step-text">
            <p>
              Database usages
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
