import Today from "./today";
import Fivedays from "./fivedays";
import { useEffect } from "react";
import { BsSunrise, BsSunset } from "react-icons/bs";

const Home = (props) => {
  // useEffect(() => console.log(props), [props]);

  return (
    <>
      <Today weather={props.todaysWeather} city={props.city} />
      <div className="container my-4">
        <div className="row align-items-center">
          <div className="col p-3 d-flex flex-row justify-content-between align-items-center fs-2">
            <div className="col d-flex justify-content-center align-items-center">
              <BsSunrise className="sun-icon" />
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <p>
                {"0" +
                  new Date(props.sunrise * 1000).getHours() +
                  ":" +
                  (new Date(props.sunrise * 1000).getMinutes() < 10 ? "0" + new Date(props.sunrise * 1000).getMinutes() : new Date(props.sunrise * 1000).getMinutes())}
              </p>
            </div>
          </div>
          <div className="col p-3 d-flex flex-row justify-content-between align-items-center fs-2">
            <div className="col d-flex justify-content-center align-items-center">
              <BsSunset className="sun-icon" />
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <p>
                {new Date(props.sunset * 1000).getHours() +
                  ":" +
                  (new Date(props.sunset * 1000).getMinutes() < 10 ? "0" + new Date(props.sunset * 1000).getMinutes() : new Date(props.sunset * 1000).getMinutes())}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Fivedays weather={props.fiveDaysWeather} city={props.city} />
    </>
  );
};

export default Home;
