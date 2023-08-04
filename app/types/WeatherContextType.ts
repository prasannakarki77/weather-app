import { Dispatch, SetStateAction } from "react";

export interface Current {
  wind: number | null;
  humidity: number | null;
  visibility: number | null;
  pressure: number | null;
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
