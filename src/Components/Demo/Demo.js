import "./Demo.css";

const Demo = () => {
  return (
    <div className="demo-border">
      <div className="split-screen">
        <div>
          <h1>Who am I</h1>
          <p>Our app works by using Google's free to use API, that allows us to use
            Google Maps as a base for your application. The rest is done using a database
            containing all the postal routes and workers of the postal service who has hired us.
            For example if "John" a postalworker who works for Omniva would like to use our app,
            he would first need to talk to his manager about getting him signed up for the app.
            After that "John" gets made an account and the postal route is taken from the database
            and translated into our application.
          </p>
          <p>The application is made using Java and is compatible with most smartphones,
            and tablets. The app can also be customized by the worker from our desktop website.
            That can also run our application.
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Demo;
