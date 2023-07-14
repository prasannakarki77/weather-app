"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";

interface Current {
  wind: number | null;
  humidity: number | null;
  visibility: number | null;
  pressure: number | null;
}

interface Forecast {
  day: string | Date | null;
  temp: number | null;
}

interface CitySearchResult {
  name: string;
  lat: number;
  lon: number;
  country: string;
}

interface WeatherContextProps {
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
  current: Current | null;
  getLatLng: (city: string) => Promise<void>;
  searchResults: CitySearchResult[] | [];
  // forecast: Forecast[] | null;
  // fetchCurrentWeather: () => undefined;
  // fetchWeatherForecast: () => undefined;
}

export const WeatherContext = createContext<WeatherContextProps>({
  city: "Kathmandu",
  setCity: () => {},
  current: null,
  getLatLng: async () => {},
  searchResults: [],
});

interface WeatherProviderProps {
  children: React.ReactNode;
}

export const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const [city, setCity] = useState("Kathmandu");
  const [current, setCurrent] = useState(null);
  const [searchResults, setsearchResults] = useState<CitySearchResult[] | []>(
    []
  );
  const getLatLng = async (city: string) => {
    const res = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const data = await res.json();
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

  const getLocationWeather = async () => {};

  const value = {
    city,
    setCity,
    current,
    getLatLng,
    searchResults,
  };
  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
