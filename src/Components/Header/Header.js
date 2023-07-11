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


  useEffect(() => {
    Axios.get(
      "http://api.weatherapi.com/v1/current.json?key=a2122654d33a47c6b77144622231107&q=Tallinn&aqi=no"
    ).then((res) => {
      setName(res.data.location.name);
      setRegion(res.data.location.region);
      setCountry(res.data.location.country);
      setTemp(res.data.current.temp_c);
      setText(res.data.current.condition.text)
    })
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="header-box">
      <h1>{time.toLocaleTimeString()}</h1>
      <h1>{time.toLocaleDateString()}</h1>
      <div>
        <h1>{name}, {region}, {country}</h1>
        <h1>{temp}°C</h1>
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default Header;
