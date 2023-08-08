import { Dispatch, SetStateAction } from "react";
import { temp } from "./temperature";

export interface Current {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  lat: string;
  lon: string;
  tz_id: string;
  localtime_epoch: string;
  localtime: string;
}

export interface Forecast {
  date: "2023-08-06";
  date_epoch: 1691280000;
  day: {
    maxtemp_c: 23.2;
    maxtemp_f: 73.8;
    mintemp_c: 20;
    mintemp_f: 68;
    avgtemp_c: 21;
    avgtemp_f: 69.7;
    maxwind_mph: 2.2;
    maxwind_kph: 3.6;
    totalprecip_mm: 7.1;
    totalprecip_in: 0.28;
    totalsnow_cm: 0;
    avgvis_km: 7.6;
    avgvis_miles: 4;
    avghumidity: 93;
    daily_will_it_rain: 1;
    daily_chance_of_rain: 86;
    daily_will_it_snow: 0;
    daily_chance_of_snow: 0;
    condition: {
      text: "Moderate rain";
      icon: "//cdn.weatherapi.com/weather/64x64/day/302.png";
      code: 1189;
    };
    uv: 5;
  };
}

export interface Weather {
  current: Current;
  location: Location;
  forecast: Forecast[];
}

export interface WeatherContextProps {
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
  weather: Weather | null;
  getCitiesByName: (city: string) => Promise<void>;
  searchResults: string[];
  getWeather: (city: string) => Promise<void>;
  tempFormat: temp.celsius | temp.fahrenheit;
}
