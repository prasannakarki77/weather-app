import Image from "next/image";

const WeatherCard = () => {
  return (
    <div className=" bg-custom-secondary p-4 flex flex-col justify-center gap-3  items-center">
      <p className="text-white text-md">Tomorrow</p>
      <Image
        src="/assets/HeavyCloud.png"
        alt="icon_weather"
        width={40}
        height={40}
      />
      <div className="flex gap-4">
        <span className="font-raleway">16 C</span>
        <span>11 F</span>
      </div>
    </div>
  );
};

export default WeatherCard;
