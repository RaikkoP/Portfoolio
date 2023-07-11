import "./Nav.css";

const Nav = () => {


  return (
    <div className="nav">
      <ul>-
        <ul className="nav-left">
            <li>Postimehed</li>
        </ul>
        <ul className="nav-right">
          <li>Home</li>
          <li>Contact</li>
          <li>
            <button id="button">Log-in</button>
          </li>
          <li>
            <button id="button">Register</button>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Nav;
