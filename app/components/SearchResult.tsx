import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

interface SearchResultProps {
  city: string;

  setSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchResult: React.FC<SearchResultProps> = ({ city, setSearchOpen }) => {
  const handleCityClick = () => {
    setSearchOpen(false);
  };
  return (
    <div
      className="w-full p-3 border border-[#1E213A] hover:border-gray-400 transition-all hover:cursor-pointer "
      onClick={handleCityClick}
    >
      {city}
    </div>
  );
};

export default SearchResult;
