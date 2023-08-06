"use client";
import React, { useContext } from "react";
import WeatherForecast from "./WeatherForecast";
import TodayHighlight from "./TodayHighlight";
import { WeatherContext } from "../context/WeatherContext";

const Container = () => {
  const { weather } = useContext(WeatherContext);
  console.log(weather?.forecast);
  return (
    <div className=" p-8 mx-auto">
      {weather?.forecast && <WeatherForecast forecast={weather.forecast} />}
      {weather?.current && <TodayHighlight current={weather.current} />}
    </div>
  );
};

export default Container;
