"use client";
import React, { useContext } from "react";
import WeatherCard from "./WeatherCard";
import { Forecast } from "../types/WeatherContextType";
import { WeatherContext } from "../context/WeatherContext";

interface Props {
  forecast: Forecast[];
}

const WeatherForecast: React.FC<Props> = ({ forecast }) => {
  const forecastT = forecast.slice(1);
  const { tempFormat } = useContext(WeatherContext);

  return (
    <div className=" grid md:grid-cols-5 gap-4 grid-cols-2 ">
      {forecastT.map((forecast, index) => (
        <WeatherCard key={index} forecast={forecast} tempFormat={tempFormat} />
      ))}
    </div>
  );
};

export default WeatherForecast;
