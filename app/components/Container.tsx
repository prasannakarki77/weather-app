"use client";
import React, { useContext } from "react";
import WeatherForecast from "./WeatherForecast";
import TodayHighlight from "./TodayHighlight";
import { WeatherContext } from "../context/WeatherContext";

const Container = () => {
  const { current } = useContext(WeatherContext);
  return (
    <div className=" p-8 mx-auto">
      <WeatherForecast />
      {current && <TodayHighlight current={current} />}
    </div>
  );
};

export default Container;
