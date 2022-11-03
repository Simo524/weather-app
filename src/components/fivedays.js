import { useEffect, useState } from "react";
import Card from "./card";
import { Link } from "react-router-dom";

const Fivedays = (props) => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    setDays([]);
    for (let i = 0; i < props.weather.length; i++) {
      if (i == 0) {
        setDays((current) => {
          return [...current, props.weather[i]];
        });
        continue;
      }

      if (new Date(props.weather[i].dt_txt).getDate() != new Date(props.weather[i - 1].dt_txt).getDate())
        setDays((current) => {
          return [...current, props.weather[i]];
        });
    }
    // console.log(days);
  }, [props]);

  return (
    <div className="container my-5">
      <div className="row">
        {days.map((e) => (
          <Link key={days.indexOf(e) + 1} to={"/days/" + days.indexOf(e)} relative="/" className="col bg-mine text-light mx-2 rounded-3 pt-4 pb-3 my-md-2 responsive-height">
            <Card date={new Date(e.dt_txt)} temp={e.main.temp.toFixed(0)} descr={e.weather[0].description} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Fivedays;
