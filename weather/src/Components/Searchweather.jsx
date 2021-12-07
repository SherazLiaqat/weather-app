import React,{useEffect,useState} from "react";
import nature from "./Static/Images/nature.jpg";
import SearchIcon from '@mui/icons-material/Search';
import CloudIcon from '@mui/icons-material/Cloud';
function Searchweather() {
  const [search, setSearch] = useState("London");
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  let mount=true;
  useEffect(() => {
    const fetchWeather=async()=>{
      const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=7372d97bec2d0e7ff6e622a2d691c770`);
         if(mount){
           setData(await response.json())
         }
         return()=>{
           mount=false;
         }
  }
  fetchWeather();
  }, [])
  let temp=(data.main.temp -273.15).toFixed(2)
  return (
    <div className="container mt-4 mb-4">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div class="card  text-white text-center border-0">
            <img src={nature} class="card-img" alt="nature" style={{height:'500px'}} />
            <div class="card-img-overlay">
              <form>
                <div class="input-group mb-4 w-75 mx-auto">
                  <input
                    type="search"
                    class="form-control"
                    placeholder="Search city"
                    aria-label="search"
                    aria-describedby="search"
                  />
                  <button class="input-group-text" id="basic-addon2" type="submit">
                  <SearchIcon/>
                  </button>
                </div>
              </form>
              <div className="bg-dark bg-opacity-50 py-3">
              <h2 class="card-title">Daska</h2>
              <p class="card-text lead">
               Thuresday,October 13,2021
              </p>
              <hr/>
              <CloudIcon/>              
<h1 classNam="fw-bolder mb-5">{temp} &deg;C</h1>
<p className="lead fw-bolder mb-0">Cloud</p>
<p className="lead mt-4">30.8 &deg;C | 40.8 &deg;C</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchweather;
