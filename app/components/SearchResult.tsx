import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

interface SearchResultProps {
  city: string;
  countryCode: string;
  setSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClick: (city: string) => Promise<void>;
}

const SearchResult: React.FC<SearchResultProps> = ({
  city,
  countryCode,
  setSearchOpen,
  onClick,
}) => {
  const handleCityClick = () => {
    setSearchOpen(false);
    onClick(city);
  };
  return (
    <div
      className="w-full p-3 border border-[#1E213A] hover:border-gray-400 transition-all hover:cursor-pointer "
      onClick={handleCityClick}
    >
      {city}, {countryCode}
    </div>
  );
};

export default SearchResult;
