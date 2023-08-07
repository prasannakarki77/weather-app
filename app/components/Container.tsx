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
      <div className="flex justify-end gap-2 mb-6 ">
        <div className="flex items-center justify-center w-10 h-10 bg-gray-500 rounded-full text-white text-xl font-bold">
          °C
        </div>
        <div className="flex items-center justify-center w-10 h-10 bg-gray-500 rounded-full text-white text-xl font-bold">
          °F
        </div>
      </div>
      {weather?.forecast && <WeatherForecast forecast={weather.forecast} />}
      {weather?.current && <TodayHighlight current={weather.current} />}
    </div>
  );
};

export default Container;
