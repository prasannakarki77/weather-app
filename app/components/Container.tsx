"use client";
import React, { useContext, useEffect } from "react";
import WeatherForecast from "./WeatherForecast";
import TodayHighlight from "./TodayHighlight";
import { WeatherContext } from "../context/WeatherContext";
import { temp } from "../types/temperature";

const Container = () => {
  const { weather, getWeather, city, setTempFormat, tempFormat } =
    useContext(WeatherContext);
  useEffect(() => {
    getWeather(city);
  }, []);
  return (
    <div className=" p-8 mx-auto">
      <div className="flex justify-end gap-2 mb-6 cursor-pointer ">
        <div
          className={`flex items-center justify-center w-10 h-10 transition bg-gray-500  rounded-full text-white text-xl font-bold ${
            tempFormat === temp.celsius && " bg-white text-black "
          }`}
          onClick={() => setTempFormat(temp.celsius)}
        >
          °C
        </div>
        <div
          className={`flex items-center justify-center w-10 h-10 transition   bg-gray-500 rounded-full text-white text-xl font-bold ${
            tempFormat === temp.fahrenheit && " bg-white text-black "
          }`}
          onClick={() => setTempFormat(temp.fahrenheit)}
        >
          °F
        </div>
      </div>
      {weather?.forecast && <WeatherForecast forecast={weather.forecast} />}
      {weather?.current && <TodayHighlight current={weather.current} />}
    </div>
  );
};

export default Container;
