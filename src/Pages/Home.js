import axios from "axios";
import React, { useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Component/Navbar";

function Home() {
  const [City, setCity] = useState("");
  const [Weatherdata, setWeatherdata] = useState([]);
  const [Error, setError] = useState(null);

  const getweather = async (e) => {
    if (City === "") {
      setError("Enter City");
    } else {
      e.preventDefault();
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${City}
            &appid=404fc6725f0ed295754502d3c6b76cb5&units=metr`
        );
        setWeatherdata((Prevdata) => [...Prevdata, response.data]);
        setError(null);
        setCity("");
      } catch (err) {
        setError("City Is Not Found");
      }
    }
  };
  return (
    <>
      <Navbar />
      <div className="col-md-12">
        <div className="Weatherbg">
          <h1 className="Headingmian">Weather Mast</h1>
          <h1 className="Heading">Weather App</h1>
          <div className="d-grid gap-2 col-4 mt-2">
            <input
              type="text"
              className="form-control"
              placeholder="Enter City"
              value={City}
              onChange={(e) => setCity(e.target.value)}
            />
            <button
              className="btn btn-primary"
              type="button"
              id="Button"
              onClick={getweather}
            >
              Search
            </button>
          </div>
          {Error && <h3 className="error">{Error}</h3>}
        </div>
        {/* Carousel */}
        <div
          id="weatherCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {Weatherdata.map((weather, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div className="col-md-12 d-flex justify-content-center text-center">
                  <div className="shadow rounded weatherResultBox">
                    <img
                      src="icon.png"
                      alt="icon.png"
                      className="weathericon"
                    />
                    <h5 className="weathercity">{weather.name}</h5>
                    <h5 className="weathertemp">{weather.main.temp} °C</h5>
                    <h3>{weather.wind.speed} Km/h</h3>
                    <h4>{weather.main.pressure} pressure</h4>
                    <h4>{weather.coord.lon} Longtitude</h4>
                    <h4>{weather.coord.lat} Latitude</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Button's */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#weatherCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#weatherCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
