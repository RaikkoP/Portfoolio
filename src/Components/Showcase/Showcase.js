import "./Showcase.css";

const Showcase = () => {
  return (
    <div className="showcase-box">
      <h1 className="showcase-title">Give Postal Work A New Meaning</h1>
      <div className="steps">
        <div className="steps-item" id="color1">
          <div className="step-img"></div>
          <div className="step-text">
            <p>
              Open your phone and download the Postimehed app from the Appstore or Google Play
            </p>
          </div>
        </div>
        <div className="steps-item" id="color2">
          <div className="step-img"></div>
          <div className="step-text">
            <p>Log-in to the app using the credential given to you and choose the postal route that is assigned to you</p>
          </div>
        </div>
        <div className="steps-item" id="color1">
          <div className="step-img"></div>
          <div className="step-text">
            <p>
              Use the app as you work to track where your routes go, where to
              stop and what to drop off
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
