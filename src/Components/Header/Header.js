import { useEffect, useState } from "react";
import "./Header.css";
import Axios from "axios";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const Header = () => {
  const [time, setTime] = useState(new Date());
  const [name, setName] = useState();
  const [region, setRegion] = useState();
  const [country, setCountry] = useState();
  const [temp, setTemp] = useState();
  const [text, setText] = useState();
  const [location, setLocation] = useState("Tallinn");
  const [formData, setFormData] = useState();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA7WszpCQYF0bX02RFWmMDGb7QtyJknoiw",
  });

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

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
      <div></div>
      <div>
        <GoogleMap
          zoom={5}
          key={"AIzaSyA7WszpCQYF0bX02RFWmMDGb7QtyJknoiw"}
          center={{ lat: 58, lng: 25 }}
          mapContainerClassName="map-container"
        ></GoogleMap>
      </div>
    </div>
  );
};

export default Header;
