import React from "react";
import WeatherCard from "./WeatherCard";
import { Forecast } from "../types/WeatherContextType";

interface Props {
  forecast: Forecast[];
}

const WeatherForecast: React.FC<Props> = ({ forecast }) => {
  const forecastT = forecast.slice(1);
  return (
    <div className=" grid md:grid-cols-5 gap-4 grid-cols-2 ">
      {forecastT.map((forecast, index) => (
        <WeatherCard key={index} forecast={forecast} />
      ))}
    </div>
  );
};

export default WeatherForecast;
