import React from "react";
import { Current } from "../types/WeatherContextType";
import { MdAssistantNavigation } from "react-icons/md";

interface Props {
  current: Current;
}

const TodayHighlight: React.FC<Props> = ({ current }) => {
  const { pressure_mb, vis_miles, wind_mph, wind_degree, wind_dir, humidity } =
    current;

  const iconRotationStyle = {
    transform: `rotate(${wind_degree}deg)`,
  };

  return (
    <div className="mt-10">
      <h1 className="text-white text-xl mb-6">Today&apos;s Highlight</h1>
      <div className=" text-white grid grid-cols-2  gap-8">
        <div className=" card  shadow-xl bg-custom-secondary p-4 flex flex-col justify-center gap-3  items-center">
          <h3>Wind status</h3>
          <p className=" text-4xl">
            <span className=" text-6xl">{wind_mph}</span> mph{" "}
          </p>
          <div className="flex gap-2 items-center justify-center">
            <MdAssistantNavigation size={40} style={iconRotationStyle} />
            <p>{wind_dir}</p>
          </div>
        </div>
        <div className=" card  shadow-xl bg-custom-secondary p-4 flex flex-col justify-center gap-3  items-center">
          <h3>Humidity</h3>
          <p className=" text-4xl">
            <span className=" text-6xl">{humidity}</span> %{" "}
          </p>
          <div className="flex gap-1 items-center flex-col ">
            <div className="flex justify-between  w-full text-gray-400 font-semibold">
              <span>0</span>
              <span>50</span>
              <span>100</span>
            </div>
            <progress
              className="progress progress-warning w-56 bg-white"
              value={humidity}
              max="100"
            ></progress>
            <span className="flex  justify-end w-full">%</span>
          </div>
        </div>
        <div className="card  shadow-xl bg-custom-secondary p-4 flex flex-col justify-center gap-3  items-center">
          <h3>Visibility</h3>
          <p className=" text-4xl">
            <span className=" text-6xl">{vis_miles}</span> miles{" "}
          </p>
        </div>
        <div className=" card  shadow-xl bg-custom-secondary p-4 flex flex-col justify-center gap-3  items-center">
          <h3>Air Pressure</h3>
          <p className=" text-4xl">
            <span className=" text-6xl">{pressure_mb}</span> mb{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TodayHighlight;
