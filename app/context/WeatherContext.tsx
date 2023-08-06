"use client";

import { createContext, useState } from "react";
import {
  Current,
  Weather,
  WeatherContextProps,
} from "../types/WeatherContextType";
import axios from "axios";

export const WeatherContext = createContext<WeatherContextProps>({
  city: "Kathmandu",
  setCity: () => {},
  weather: null,
  getCitiesByName: async () => {},
  searchResults: [],
  getWeather: async () => {},
});

interface WeatherProviderProps {
  children: React.ReactNode;
}

export const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const [city, setCity] = useState("Kathmandu");
  const [weather, setWeather] = useState<Weather | null>(null);
  const [searchResults, setsearchResults] = useState<string[] | []>([]);
  const getCitiesByName = async (city: string) => {
    setsearchResults([]);
    const cities: string[] = [];
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };

    // Create the data to be sent in the request body as URL-encoded form data
    const data = new URLSearchParams({
      grant_type: "client_credentials",
      client_id: process.env.NEXT_PUBLIC_LOCATION_API_KEY as string,
      client_secret: process.env.NEXT_PUBLIC_LOCATION_API_SECRET as string,
    });

    try {
      const res = await axios.post(
        "https://test.api.amadeus.com/v1/security/oauth2/token",
        data,
        { headers }
      );

      const cityResponse = await axios.get(
        `https://test.api.amadeus.com/v1/reference-data/locations/cities?keyword=${city}&max=5`,

        { headers: { Authorization: `Bearer ${res.data.access_token} ` } }
      );
      cityResponse.data.data.map((cityData: { name: any }) => {
        cities.push(cityData.name);
      });
    } catch (err) {
      console.log(err);
      setsearchResults([]);
    }
    setsearchResults(cities);
  };

  const getWeather = async (city: string) => {
    try {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?q=${city}&days=6&key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
      );
      setWeather({
        current: res.data.current,
        forecast: res.data.forecast.forecastday,
        location: res.data.location,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const value = {
    city,
    setCity,
    weather,
    getCitiesByName,
    searchResults,
    getWeather,
  };
  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
