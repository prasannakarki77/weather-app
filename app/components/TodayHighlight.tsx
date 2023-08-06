import React from "react";
import { Current } from "../types/WeatherContextType";

interface Props {
  current: Current;
}

const TodayHighlight: React.FC<Props> = ({ current }) => {
  const { pressure_mb, vis_miles, wind_mph, wind_degree, humidity } = current;
  return (
    <div className="mt-10">
      <h1 className="text-white text-xl mb-6">Today&apos;s Highlight</h1>
      <div className=" grid grid-cols-2 grid-rows-2 gap-4">
        <div className=" bg-custom-secondary p-4 flex flex-col justify-center gap-3  items-center">
          <h3>Wind status</h3>
          <p className=" text-xl">
            <span className=" text-6xl">{wind_mph}</span>mph{" "}
          </p>
        </div>
        <div className=" bg-custom-secondary p-4 flex flex-col justify-center gap-3  items-center">
          <h3>Humidity</h3>
          <p className=" text-xl">
            <span className=" text-6xl">{humidity}</span>%{" "}
          </p>
        </div>
        <div className=" bg-custom-secondary p-4 flex flex-col justify-center gap-3  items-center">
          <h3>Visibility</h3>
          <p className=" text-xl">
            <span className=" text-6xl">{vis_miles}</span> miles{" "}
          </p>
        </div>
        <div className=" bg-custom-secondary p-4 flex flex-col justify-center gap-3  items-center">
          <h3>Air Pressure</h3>
          <p className=" text-xl">
            <span className=" text-6xl">{pressure_mb}</span>mb{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TodayHighlight;
