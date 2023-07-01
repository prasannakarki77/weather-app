interface SearchResultProps {
  place: string;
}

const SearchResult: React.FC<SearchResultProps> = ({ place }) => {
  return (
    <div className="w-full p-3 border border-[#1E213A] hover:border-gray-400 transition-all hover:cursor-pointer">
      {place}
    </div>
  );
};

export default SearchResult;
