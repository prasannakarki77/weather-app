import React from "react";
import WeatherCard from "./WeatherCard";

const WeatherForecast = () => {
  return (
    <div className=" grid grid-cols-5 gap-4 ">
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
    </div>
  );
};

export default WeatherForecast;
