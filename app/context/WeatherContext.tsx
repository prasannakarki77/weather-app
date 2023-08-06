"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";
import { Current, WeatherContextProps } from "../types/WeatherContextType";
import axios from "axios";

export const WeatherContext = createContext<WeatherContextProps>({
  city: "Kathmandu",
  setCity: () => {},
  current: null,
  getCitiesByName: async () => {},
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
  const [searchResults, setsearchResults] = useState<string[] | []>([]);
  const getCitiesByName = async (city: string) => {
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
      if (res) {
        const cityResponse = await axios.get(
          `https://test.api.amadeus.com/v1/reference-data/locations/cities?keyword=${city}&max=5`,

          { headers: { Authorization: `Bearer ${res.data.access_token} ` } }
        );
        cityResponse.data.data.map((cityData: { name: any }) => {
          cities.push(cityData.name);
        });
      }
    } catch (err) {
      console.log(err);
    }

    setsearchResults(cities);

    console.log(cities);
  };

  const getLocationWeather = async (
    lat: number,
    lon: number,
    city: string
  ) => {};
  const getWeatherForecast = async (
    lat: number,
    lon: number,
    city: string
  ) => {};

  const value = {
    city,
    setCity,
    current,
    getCitiesByName,
    searchResults,
    getLocationWeather,
    getWeatherForecast,
    selectedPlace,
  };
  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
