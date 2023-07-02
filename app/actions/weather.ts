import axios from "axios";

export const getWeatherByLocation = async (lat: string, lon: string) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return response.data;
};
