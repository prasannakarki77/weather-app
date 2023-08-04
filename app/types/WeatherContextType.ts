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
}

export interface Forecast {
  day: string | Date | null;
  temp: number | null;
}

export interface CitySearchResult {
  name: string;
  lat: number;
  lon: number;
  country: string;
}

export interface WeatherContextProps {
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
  current: Current | null;
  getLatLng: (city: string) => Promise<void>;
  searchResults: CitySearchResult[] | [];
  getLocationWeather: (lat: number, lon: number, city: string) => Promise<void>;
  selectedPlace: string;
  // forecast: Forecast[] | null;
  // fetchCurrentWeather: () => undefined;
  // fetchWeatherForecast: () => undefined;
}
