import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SearchResultCard from "../components/searchResultCard/SearchResultCard";
import searchIcon from "../assets/search-icon.svg";
const SearchResults = () => {
  const location = useLocation(); 
  const queryParams = new URLSearchParams(location.search); 
  const query = queryParams.get("q"); 
  const [searchValue, setSearchValue] = useState("");

  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);

  const navigate = useNavigate(); 

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search-results?q=${searchValue}`);
  };

  useEffect(() => {
    fetch("/users.json") 
      .then((response) => response.json())
      .then((data) => {
        setContacts(data);
      })
      .catch((error) => console.error("Error loading contacts data:", error));
  }, []);

  useEffect(() => {
    if (query) {
      const filtered = contacts.filter(
        (contact) =>
          contact.first_name.toLowerCase().includes(query.toLowerCase()) ||
          contact.last_name.toLowerCase().includes(query.toLowerCase()) ||
          contact.city.toLowerCase().includes(query.toLowerCase()) ||
          contact.contact_number.includes(query)
      );
      setFilteredContacts(filtered);
    } else {
      setFilteredContacts(contacts);
    }
  }, [query, contacts]);

  useEffect(() => {
    setSearchValue(query);
  }, [query]);

  return (
    <div
      className="pt-[37px] lg:pt-[50px] min-h-[calc(100vh-86.71px)] px-[50px] lg:px-0"
      style={{
        background: "linear-gradient(180deg, #F4F4F5 0%, #D9E6FF 100%)",
      }}
    >
      <form
        onSubmit={handleSearch}
        className="flex lg:hidden items-center gap-4 border border-[#D7D7EA] w-full rounded-[12px] bg-white"
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

      {filteredContacts.length > 0 ? (
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-[24.07px] lg:gap-[27px] w-full lg:w-[65vw] mt-[15px] lg:m-auto">
          {filteredContacts.map((user, index) => (
            <SearchResultCard key={index} user={user} />
          ))}
        </div>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchResults;
