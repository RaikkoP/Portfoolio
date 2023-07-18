import { useEffect, useState } from "react";
import "./Header.css";
import Axios from "axios";

const Header = () => {
  const [time, setTime] = useState(new Date());
  const [name, setName] = useState();
  const [region, setRegion] = useState();
  const [country, setCountry] = useState();
  const [temp, setTemp] = useState();
  const [text, setText] = useState();
  const [location, setLocation] = useState("Tallinn");
  const [formData, setFormData] = useState();

  const handleForm = (event) => {
    event.preventDefault();
    const local = formData;
    setLocation(local);
    setFormData("");
  };

  useEffect(() => {
    Axios.get(
      `http://api.weatherapi.com/v1/current.json?key=a2122654d33a47c6b77144622231107&q=${location}&aqi=no`
    ).then((res) => {
      setName(res.data.location.name);
      setRegion(res.data.location.region);
      setCountry(res.data.location.country);
      setTemp(res.data.current.temp_c);
      setText(res.data.current.condition.text);
    });
  }, [location]);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="header-box">
      <div>
        <div className="box-top">
          <h2>{time.toLocaleDateString()} {time.toLocaleTimeString()}  </h2>
        </div>
        <form onSubmit={handleForm}>
          <input
            onChange={(e) => setFormData(e.target.value)}
            type="type"
            id="location_id"
            name="location_id"
            className="input"
          ></input>
          <button id="submit-button" type="submit">'->'</button>
        </form>
        <h2>
          {name}, {region}, {country}
        </h2>
        <h2>{temp}°C</h2>
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default Header;
