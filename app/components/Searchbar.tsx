"use client";

import React, { useContext, useEffect, useState } from "react";
import SearchResult from "./SearchResult";
import { getWeatherByLocation } from "../actions/weather";
import { WeatherContext } from "../context/WeatherContext";

const Searchbar = () => {
  const [searchOpen, setSearhOpen] = useState(false);
  const { setCity, city, getLatLng, searchResults } =
    useContext(WeatherContext);
  const handleSearchClose = () => {
    setSearhOpen(false);
  };
  const handleSearchOpen = () => {
    setSearhOpen(true);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    getLatLng("Bhaktapur");
    console.log(searchResults);
  }, []);

  return (
    <div className=" lg:w-[460px] h-full text-white bg-[#1E213A] p-4 flex justify-center ">
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
              />
            ))}
          </div>
        </div>
      ) : (
        <button
          className="btn btn-active btn-neutral w-full"
          onClick={handleSearchOpen}
        >
          Search for places
        </button>
      )}
    </div>
  );
};
export default Searchbar;
