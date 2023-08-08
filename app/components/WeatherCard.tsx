"use client";
import Image from "next/image";
import { Forecast } from "../types/WeatherContextType";
import { fDate } from "../utils/formatTime";
import { WeatherContext } from "../context/WeatherContext";
import { temp } from "../types/temperature";

interface Props {
  forecast: Forecast;
  tempFormat: temp.celsius | temp.fahrenheit;
}

const WeatherCard: React.FC<Props> = ({ forecast, tempFormat }) => {
  const { day, date } = forecast;
  return (
    <div className="card  shadow-xl bg-custom-secondary p-4 flex flex-col justify-center gap-3  items-center">
      <p className="text-white text-md">{fDate(date)}</p>
      <Image
        src={"http:" + day.condition.icon}
        alt="icon_weather"
        width={80}
        height={80}
      />
      <div className="flex gap-4">
        <span className="text-white">
          {tempFormat === temp.fahrenheit
            ? `${day.maxtemp_f} °F`
            : `${day.maxtemp_c} °C`}
        </span>
        <span>
          {tempFormat === temp.fahrenheit
            ? `${day.mintemp_f} °F`
            : `${day.mintemp_c} °C`}
        </span>
      </div>
    </div>
  );
};

export default WeatherCard;
