import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const weatherIcons = {
  sun: <FontAwesomeIcon icon="fa-solid fa-sun" />, // Clear
  rain: <FontAwesomeIcon icon="fa-solid fa-cloud-rain " />, // Rain
  clouds: <FontAwesomeIcon icon="fa-solid fa-cloud-sun " />, // Clouds
  thunderstorm: <FontAwesomeIcon icon="fa-solid fa-cloud-bolt " />,
  humidity: <FontAwesomeIcon icon="fa-solid fa-droplet" />, // goccia (umidità)
};

<FontAwesomeIcon icon="fa-solid fa-droplet" />; // goccia (umidità)

const Today = (props) => {
  // useEffect(() => console.log("today.js", props), [props]);

  return (
    <>
      <div className="container my-4">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 shadow-lg bg-mine">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="text-light fw-bold pb-4 display-3">{props.city}</h1>
            <h1 className="display-4 fw-bold lh-1 text-light d-flex align-items-center">
              <span className="me-5">{props.weather[0].main.temp.toFixed(0)}°C </span>
              {props.weather[0].weather[0].main == "Rain" && weatherIcons.rain}
              {props.weather[0].weather[0].main == "Clouds" && weatherIcons.clouds}
              {props.weather[0].weather[0].main == "Clear" && weatherIcons.sun}
            </h1>
            <p className="lead text-light py-5">
              <FontAwesomeIcon icon="fa-solid fa-wind" className="pe-3" />
              {props.weather[0].wind.speed} m/s
            </p>
          </div>
          <div className="col-lg-4 p-0 overflow-hidden h-100 d-flex justify-content-center align-items-center">
            <table className="text-light mb-5">
              <tbody className="w-100 rounded-3">
                {props.weather.map((e) => (
                  <tr key={props.weather.indexOf(e)}>
                    <td className="px-3 py-4" style={{ borderBottom: "1px solid white" }}>
                      {new Date(e.dt_txt).getHours()}:00
                    </td>
                    <td className="px-3 py-4" style={{ borderBottom: "1px solid white" }}>
                      {e.weather[0].main == "Rain" && weatherIcons.rain}
                      {e.weather[0].main == "Clouds" && weatherIcons.clouds}
                      {e.weather[0].main == "Clear" && weatherIcons.sun}
                    </td>
                    <td className="px-3 py-4" style={{ borderBottom: "1px solid white" }}>
                      {weatherIcons.humidity} {e.main.humidity}%
                    </td>
                    <td className="px-3 py-4" style={{ borderBottom: "1px solid white" }}>
                      <FontAwesomeIcon icon="fa-solid fa-arrow-down" /> {e.main.temp_min.toFixed(0)} °C
                    </td>
                    <td className="px-3 py-4" style={{ borderBottom: "1px solid white" }}>
                      <FontAwesomeIcon icon="fa-solid fa-arrow-up" /> {e.main.temp_max.toFixed(0)}°C
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Today;
