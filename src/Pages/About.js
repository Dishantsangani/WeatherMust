import React from "react";
import "../App.css";
function About() {
  return (
    <>
      <main role="main" className="container-fluid">
        <div className="starter-template">
          <div className="starter-image">
            <h1>Weather Mast</h1>
          </div>
          <div className="lead">
            <b>
              This project is a React-based Weather Application that allows
              users to search for and view weather information for different
              cities. The application features a user interface built with
              Bootstrap for styling and responsiveness
            </b>
          </div>
        </div>
        <div className="starter-desc">
          <h3>Functions</h3>
          <p>
            ● getweather : An asynchronous function triggered when the user
            clicks the "Search" button.
          </p>
          <p>
            ● Makes an API call to the OpenWeatherMap API to fetch weather data
            for the entered city.
          </p>
          <p>
            ● If the API call is successful, it updates the Weatherdata state
            with the new weather data.
          </p>
          <h3>API Integration</h3>
          <p>
            ● The application fetches weather data from the OpenWeatherMap API
            using axios
          </p>
          <p>
            ● The API call includes parameters for the city name, API key, and
            units (metric).
          </p>
          <h3>Improvements and Considerations</h3>
          <p>
            ● <b>Error Handling </b>: More detailed error handling could be
            implemented to cover different types of errors (e.g., network
            issues).
          </p>
          <p>
            ● <b>Loading Indicator </b>: A loading indicator could be added to
            enhance the user experience while fetching data.
          </p>
          <p>
            ● <b>API Key Security </b>: The API key is hard-coded and exposed in
            the code. In a production application, it's advisable to secure the
            API key using environment variables or a server-side proxy.
          </p>
          <h5 className="footer">
            © 2024
            <a href="https://bento.me/dishantsangani" target="_blank">
              {" "}
              Dishant Sangani{"  "}
            </a>
            | All rights reserved.
          </h5>
        </div>
      </main>
    </>
  );
}

export default About;
