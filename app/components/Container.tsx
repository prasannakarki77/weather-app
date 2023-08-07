"use client";
import React, { useContext, useEffect } from "react";
import WeatherForecast from "./WeatherForecast";
import TodayHighlight from "./TodayHighlight";
import { WeatherContext } from "../context/WeatherContext";

const Container = () => {
  const { weather, getWeather, city } = useContext(WeatherContext);
  console.log(weather?.forecast);
  useEffect(() => {
    getWeather(city);
  }, []);
  return (
    <div className=" p-8 mx-auto">
      {weather?.forecast && <WeatherForecast forecast={weather.forecast} />}
      {weather?.current && <TodayHighlight current={weather.current} />}
    </div>
  );
};

export default Container;
