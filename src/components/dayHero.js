import { useEffect } from "react";

const DayHero = (props) => {
  const days = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];

  useEffect(() => console.log(props), [props]);

  return (
    <>
      <div className="container my-4">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 shadow-lg bg-mine">
          <div className="col p-3 p-lg-5 pt-lg-3">
            <h1>{props.city}</h1>
            <h2>{props.date.getDate() + "-" + (props.date.getMonth() + 1) + "-" + props.date.getFullYear()}</h2>
            <h3>{days[props.date.getDay() - 1]}</h3>
          </div>
          <div className="col p-0 overflow-hidden h-100 d-flex justify-content-center align-items-center"></div>
        </div>
      </div>
    </>
  );
};

export default DayHero;
