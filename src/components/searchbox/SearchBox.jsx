/* eslint-disable react/prop-types */
import searchIcon from "../../assets/search-icon.svg";
import { useNavigate } from "react-router-dom";
const SearchBox = ({ searchValue, setSearchValue }) => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search-results?q=${searchValue}`);
  };
  
  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center gap-4 border border-[#D7D7EA] w-full rounded-[12px] bg-white"
    >
      <div className="pl-3">
        <img src={searchIcon} alt="search-icon" height={16} width={16} />
      </div>

      <input
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="w-full p-3 pl-0 rounded-r-[12px] outline-none"
      />
    </form>
  );
};

export default SearchBox;
