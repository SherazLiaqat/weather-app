import React, { useEffect, useState } from "react";
import nature from "./Static/Images/nature.jpg";
import SearchIcon from "@mui/icons-material/Search";
import CloudIcon from "@mui/icons-material/Cloud";
function Searchweather() {
  const [search, setSearch] = useState("London");
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7372d97bec2d0e7ff6e622a2d691c770`;
      const response = await fetch(url);
      const resjson = await response.json();
      setData(resjson.main);
      console.log(data);
    };
    fetchWeather();
  }, [search]);
  {
    /*  let temp=(data.temp -273).toFixed(2);
  let temp_min=(data.temp_min -273).toFixed(2);
  let temp_max=(data.temp_max -273).toFixed(2)*/
  }

  //Date
  let d = new Date();
  let date = d.getDate();
  let year = d.getFullYear();
  let month = d.toLocaleString("default", { month: "long" });
  let day = d.toLocaleString("default", { weekday: "long" });
  //Time
  let time = d.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const handleSubmit = (event) => {
    event.preventDafault();
    setSearch(input);
  };
  return (
    <div className="container mt-4 mb-4">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card  text-white text-center border-0">
            <img
              src={nature}
              className="card-img"
              alt="nature"
              style={{ height: "500px" }}
            />
            <div className="card-img-overlay">
              <div className="input-group mb-4 w-75 mx-auto">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search city"
                  aria-label="search"
                  name="search"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  required
                />
              </div>

              {!data ? (
                <p>No city Found</p>
              ) : (
                <div className="bg-dark bg-opacity-50 py-3">
                  <h2 className="card-title text-uppercase">{search}</h2>
                  <p className="card-text lead">
                    {day}, {month} {date} ,{year}
                    <br />
                    {time}
                  </p>
                  <hr />
                  <CloudIcon />

                  <h1 className="fw-bolder mb-5">{data.temp}&deg;C</h1>
                  <p className="lead fw-bolder mb-0">rain</p>
                  <p className="lead ">
                    {data.temp_min} &deg;C | {data.temp_max} &deg;C
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchweather;
