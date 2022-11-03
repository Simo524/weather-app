import { useEffect } from "react";

const Card = (props) => {
  // useEffect(() => console.log(props), [props]);

  return (
    <>
      <p>{props.date.getDate() + "-" + (props.date.getMonth() + 1) + "-" + props.date.getFullYear()}</p>
      <h1>{props.temp}°C</h1>
      <hr />
      <p>{props.descr}</p>
    </>
  );
};

export default Card;
