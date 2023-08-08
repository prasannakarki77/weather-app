"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import SearchResult from "./SearchResult";
import { WeatherContext } from "../context/WeatherContext";
import { MdLocationOn } from "react-icons/md";
import { fDate } from "../utils/formatTime";
import { temp } from "../types/temperature";
const Searchbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const {
    setCity,
    city,
    weather,
    getCitiesByName,
    searchResults,
    getWeather,
    tempFormat,
  } = useContext(WeatherContext);
  const handleSearchClose = () => {
    setSearchOpen(false);
  };
  const handleSearchOpen = () => {
    setSearchOpen(true);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className=" lg:w-[460px]  bg-[#1E213A] p-4 flex justify-between flex-col py-7  ">
      {searchOpen ? (
        <div className="flex flex-col w-full gap-3 ">
          <div className=" w-full flex justify-end mb-3">
            <button className="btn btn-ghost " onClick={handleSearchClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <form className="flex gap-2" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setCity(e.target.value)}
            />
            <button
              className="btn btn-primary"
              type="submit"
              onClick={() => getCitiesByName(city)}
            >
              Search
            </button>
          </form>
          <div className="flex flex-col gap-3 mt-5 ">
            {searchResults.map((city) => (
              <SearchResult
                key={city.countryCode}
                city={city.name}
                countryCode={city.countryCode}
                setSearchOpen={setSearchOpen}
                onClick={getWeather}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex gap-11 flex-col justify-between items-center ">
          <button
            className="btn btn-active btn-neutral w-full"
            onClick={handleSearchOpen}
          >
            Search for places
          </button>
          <div className=" w-full h-full bg-weather-background bg-contain bg-center bg-no-repeat bg-opacity-50 flex justify-center">
            {weather?.current.condition.icon && (
              <Image
                src={"http:" + weather?.current.condition.icon}
                alt={"icon"}
                height={200}
                width={200}
              />
            )}
          </div>
          <div />
          <div className="flex items-end gap-1 justify-center">
            <span className=" text-7xl text-white font-semibold ">
              {tempFormat === temp.fahrenheit
                ? weather?.current.temp_f
                : weather?.current.temp_c}
            </span>
            <span className="text-4xl font-semibold">
              {tempFormat === temp.fahrenheit ? "°F" : "°C"}
            </span>
          </div>
          <div className="text-3xl text-gray-300 text-center">
            {weather?.current.condition.text}
          </div>
          <div className=" font-semibold  text-gray-400">
            Today ·{" "}
            {weather?.current.last_updated &&
              fDate(new Date(weather?.current.last_updated))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-1 font-semibold  text-gray-400 justify-center mt-4">
        <MdLocationOn size={20} /> {weather?.location.name},{" "}
        {weather?.location.country}
      </div>
    </div>
  );
};
export default Searchbar;
