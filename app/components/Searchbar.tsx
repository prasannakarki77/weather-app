"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import SearchResult from "./SearchResult";
import { WeatherContext } from "../context/WeatherContext";
import { MdLocationOn } from "react-icons/md";
const Searchbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const {
    setCity,
    city,
    current,
    getLatLng,
    searchResults,
    selectedPlace,
    getLocationWeather,
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

  useEffect(() => {
    getLocationWeather(27.708317, 85.3205817, "Kathmandu");
    console.log(searchResults);
  }, []);

  return (
    <div className=" lg:w-[460px] h-full text-white bg-[#1E213A] p-4 flex justify-between flex-col ">
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
              onClick={() => getLatLng(city)}
            >
              {/* <span className="loading loading-spinner"></span> */}
              Search
            </button>
          </form>
          <div className="flex flex-col gap-3 mt-5">
            {searchResults.map((city) => (
              <SearchResult
                place={city.name}
                key={city.lat}
                code={city.country}
                lat={city.lat}
                lon={city.lon}
                setSearchOpen={setSearchOpen}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex gap-3 flex-col justify-center items-center ">
          <button
            className="btn btn-active btn-neutral w-full"
            onClick={handleSearchOpen}
          >
            Search for places
          </button>
          {current?.weather[0].icon && (
            <Image
              src={`http://openweathermap.org/img/wn/${current?.weather[0].icon}@2x.png`}
              alt={"icon"}
              height={200}
              width={200}
            />
          )}
          <span className=" text-6xl">{current?.temp} °C</span>
          <div>{current?.weather[0].main}</div>
        </div>
      )}

      <div className="flex items-center gap-1 justify-center">
        <MdLocationOn /> {selectedPlace}
      </div>
    </div>
  );
};
export default Searchbar;
