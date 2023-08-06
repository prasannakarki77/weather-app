import { Dispatch, SetStateAction } from "react";

export interface Wind {
  speed: number;
  degree: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Current {
  wind: Wind | null;
  humidity: number | null;
  visibility: number | null;
  pressure: number | null;
  weather: Weather[];
  temp: string;
}

export interface Forecast {
  day: string | Date | null;
  temp: number | null;
}

export interface WeatherContextProps {
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
  current: Current | null;
  getCitiesByName: (city: string) => Promise<void>;
  searchResults: string[];
  getWeatherForecast: (lat: number, lon: number, city: string) => Promise<void>;
}
