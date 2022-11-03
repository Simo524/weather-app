import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Day from "./components/day";
import Search from "./components/search";
import MyNavbar from "./components/navbar";

library.add(fas);

const App = () => {
  const [data, setData] = useState();
  const [show, setShow] = useState(false);
  const [todaysWeather, setTodaysWeather] = useState(false);
  const [fiveDaysWeather, setFiveDaysWeather] = useState(false);

  const fetchData = async (city = "casatenovo") => {
    city = city.toLowerCase();
    await fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&appid=eedeb250a443e01523f51077ae3198f5", {
      method: "GET",
      headers: {},
    })
      .then((response) => response.json())
      .then((data) => {
        setShow(true);

        let todaysDt = new Date(data.list[0].dt_txt);
        setTodaysWeather(data.list.filter((e) => new Date(e.dt_txt).getDate() == todaysDt.getDate()));
        setFiveDaysWeather(data.list.filter((e) => new Date(e.dt_txt).getDate() != todaysDt.getDate()));
        // console.log(data);
        setData(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (!show) fetchData();
  }, [show]);

  return (
    show && (
      <>
        <MyNavbar />
        <div className="back-page py-3">
          <Routes>
            <Route
              exact
              path="/"
              element={<Home fiveDaysWeather={fiveDaysWeather} todaysWeather={todaysWeather} sunset={data.city.sunset} sunrise={data.city.sunrise} city={data.city.name} />}
            ></Route>
            <Route exact path="/search" element={<Search fetchData={fetchData} />}></Route>
            <Route exact path="/days/:id" element={<Day fiveDaysWeather={fiveDaysWeather} city={data.city.name} />}></Route>
          </Routes>
        </div>
      </>
    )
  );
};

export default App;
