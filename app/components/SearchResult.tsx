import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

interface SearchResultProps {
  place: string;
  code: string;
  lat: number;
  lon: number;
  setSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchResult: React.FC<SearchResultProps> = ({
  place,
  code,
  lat,
  lon,
  setSearchOpen,
}) => {
  const { getLocationWeather } = useContext(WeatherContext);
  const handleCityClick = () => {
    getLocationWeather(lat, lon, place);
    setSearchOpen(false);
  };
  return (
    <div
      className="w-full p-3 border border-[#1E213A] hover:border-gray-400 transition-all hover:cursor-pointer"
      onClick={handleCityClick}
    >
      {place}, {code}
    </div>
  );
};

export default SearchResult;
