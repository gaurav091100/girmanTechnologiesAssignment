import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchResultCard from "../components/searchResultCard/SearchResultCard";
import NoResult from "../components/NoResult/NoResult";
import SearchBox from "../components/searchbox/SearchBox";
const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q");
  const [searchValue, setSearchValue] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetch("/users.json")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error("Error loading users data:", error));
  }, []);

  useEffect(() => {
    if (query) {
      const filtered = users.filter(
        (user) =>
          user.first_name.toLowerCase().includes(query.toLowerCase()) ||
        user.last_name.toLowerCase().includes(query.toLowerCase()) ||
        user.city.toLowerCase().includes(query.toLowerCase()) ||
        user.contact_number.includes(query)
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(users);
    }
  }, [query, users]);

  useEffect(() => {
    setSearchValue(query);
  }, [query]);

  return (
    <div
      className={`pt-[37px] lg:pt-${
        filteredUsers.length === 0 ? "0" : "[50px]"
      } min-h-[calc(100vh-67.55px)] lg:min-h-[calc(100vh-111.03px)] px-[50px] lg:px-0`}
      style={{
        background: "linear-gradient(180deg, #F4F4F5 0%, #D9E6FF 100%)",
      }}
    >
      <div className="lg:hidden">
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      {filteredUsers.length > 0 ? (
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-[24.07px] lg:gap-[27px] w-full lg:w-[65vw] mt-[15px] lg:m-auto">
          {filteredUsers.map((user, index) => (
            <SearchResultCard key={index} user={user} />
          ))}
        </div>
      ) : (
        <NoResult />
      )}
    </div>
  );
};

export default SearchResults;
