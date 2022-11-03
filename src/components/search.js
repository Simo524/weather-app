import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Search = (props) => {
  // useEffect(() => console.log(props), [props]);
  const { register, handleSubmit } = useForm();
  const [cityName, setCityName] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    e.preventDefault();

    setCityName(e.value);
  };

  return (
    <div className="container my-4">
      <form
        onSubmit={handleSubmit((data) => {
          setCityName("");
          navigate("/");
          props.fetchData(data.cityName);
        })}
        className="d-flex justify-content-center align-items-center w-100"
      >
        <label className="fs-4 d-flex justify-content-center align-items-center w-100">
          City name
          <input className="ms-3 text-dark p-2 rounded-3 fs-4 w-75" {...register("cityName", { required: true })} value={cityName} onChange={onChange} />
          <input className="ms-3 btn btn-dark fs-4" type="submit" value={"Search"} />
        </label>
      </form>
    </div>
  );
};

export default Search;
