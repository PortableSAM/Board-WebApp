import React from "react";

function WeatherInfo({
  data: { temp, maxTemp, minTemp, country, city, desc, speed, deg }
}) {
  return (
    <>
      <h3>
        {city},{country}
      </h3>
      <section className="weather-data-flex">
        <div className=" discription-header">
          <h4>Condition</h4>
          <p>{desc}</p>
        </div>
        <div className="discription-header">
          <h4>Temperature</h4>
          <p>Temp: {temp} °C </p>
          <p>Max : {maxTemp} °C </p>
          <p>Min : {minTemp} °C </p>
        </div>
        <div className="discription-header">
          <h4>Wind</h4>
          <p>Speed: {speed} m/s</p>
          <p>Deg: {deg} °</p>
        </div>
      </section>
    </>
  );
}

export default WeatherInfo;
