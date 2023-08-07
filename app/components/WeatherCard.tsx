import Image from "next/image";
import { Forecast } from "../types/WeatherContextType";
import { fDate } from "../utils/formatTime";

interface Props {
  forecast: Forecast;
}

const WeatherCard: React.FC<Props> = ({ forecast }) => {
  const { day, date } = forecast;
  return (
    <div className="card  shadow-xl bg-custom-secondary p-4 flex flex-col justify-center gap-3  items-center">
      <p className="text-white text-md">{fDate(date)}</p>
      <Image
        src={"http:" + day.condition.icon}
        alt="icon_weather"
        width={40}
        height={40}
      />
      <div className="flex gap-4">
        <span className="font-raleway">{day.mintemp_c} °C</span>
        <span>{day.maxtemp_c} °C</span>
      </div>
    </div>
  );
};

export default WeatherCard;
