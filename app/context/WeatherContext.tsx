"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";
import {
  CitySearchResult,
  Current,
  WeatherContextProps,
} from "../types/WeatherContextType";

export const WeatherContext = createContext<WeatherContextProps>({
  city: "Kathmandu",
  setCity: () => {},
  current: null,
  getLatLng: async () => {},
  searchResults: [],
  getLocationWeather: async (lat: number, lon: number) => {},
  selectedPlace: "",
  getWeatherForecast: async (lat: number, lon: number) => {},
});

interface WeatherProviderProps {
  children: React.ReactNode;
}

export const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const [city, setCity] = useState("Kathmandu");
  const [selectedPlace, setSelectedPlace] = useState("");
  const [current, setCurrent] = useState<Current | null>(null);
  const [searchResults, setsearchResults] = useState<CitySearchResult[] | []>(
    []
  );
  const getLatLng = async (city: string) => {
    const res = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const data = await res.json();
    if (!data) {
      setsearchResults([]);
      return;
    }
    console.log(data);
    // Filter out duplicate data based on name and country
    const filteredData = data.filter(
      (result: any, index: number, self: any[]) =>
        self.findIndex(
          (r: any) => r.name === result.name && r.country === result.country
        ) === index
    );

    // Transform the filtered data to the desired format
    const transformedData = filteredData.map((result: any) => ({
      name: result.name,
      lat: result.lat,
      lon: result.lon,
      country: result.country,
    }));

    setsearchResults(transformedData);
  };

  const getLocationWeather = async (lat: number, lon: number, city: string) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=imperial`
    );
    const data = await res.json();
    setSelectedPlace(city);
    setCurrent({
      wind: data.wind,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      visibility: data.visibility,
      weather: data.weather,
      temp: data.main.temp,
    });
    getWeatherForecast(lat, lon, city);
  };
  const getWeatherForecast = async (lat: number, lon: number, city: string) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_API_KEY}&cnt=5`
    );
    const data = await res.json();
    console.log(data);
  };

  const value = {
    city,
    setCity,
    current,
    getLatLng,
    searchResults,
    getLocationWeather,
    getWeatherForecast,
    selectedPlace,
  };
  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
