import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DayHero from "./dayHero";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const weatherIcons = {
  sun: <FontAwesomeIcon icon="fa-solid fa-sun" />, // Clear
  rain: <FontAwesomeIcon icon="fa-solid fa-cloud-rain " />, // Rain
  clouds: <FontAwesomeIcon icon="fa-solid fa-cloud-sun " />, // Clouds
  thunderstorm: <FontAwesomeIcon icon="fa-solid fa-cloud-bolt " />,
  humidity: <FontAwesomeIcon icon="fa-solid fa-droplet" />, // goccia (umidità)
};

const Day = (props) => {
  const { id } = useParams();
  let days, theDayDate;
  const [theDay, setTheDay] = useState();

  useEffect(() => {
    days = [];

    for (let i = 0; i < props.fiveDaysWeather.length; i++) {
      if (i == 0) {
        days.push(props.fiveDaysWeather[i]);
        continue;
      }

      if (new Date(props.fiveDaysWeather[i].dt_txt).getDate() != new Date(props.fiveDaysWeather[i - 1].dt_txt).getDate()) days.push(props.fiveDaysWeather[i]);
    }

    theDayDate = new Date(days[id].dt_txt).getDate();
    setTheDay(props.fiveDaysWeather.filter((e) => new Date(e.dt_txt).getDate() == theDayDate));

    console.log(theDay);
  }, [props]);

  return (
    theDay && (
      <>
        <DayHero date={new Date(theDay[0].dt_txt)} city={props.city} />

        <div className="col-lg-4 p-0 overflow-hidden w-100 d-flex justify-content-center align-items-center">
          <table className="text-light mb-5 w-75">
            <tbody className="w-100 rounded-3">
              {theDay.map((e) => (
                <tr key={theDay.indexOf(e)}>
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
                  <td className="px-3 py-4" style={{ borderBottom: "1px solid white" }}>
                    <FontAwesomeIcon icon="fa-solid fa-wind" /> {e.wind.speed} m/s
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    )
  );
};

export default Day;
