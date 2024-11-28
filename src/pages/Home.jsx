import { useState } from "react";
import heroImg from "../assets/hero-img.svg";
import bgImg from "../assets/bg-img.svg";
import searchIcon from "../assets/search-icon.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault(); 
    if (searchValue.trim()) {
      navigate(`/search-results?q=${searchValue}`);
    }
  };

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat w-full h-[calc(100vh-67.55px)] lg:h-[calc(100vh-111.03px)]"
      style={{
        backgroundImage: `url(${bgImg}), linear-gradient(180deg, #FFFFFF 31%, #B1CBFF 100%)`,
      }}
    >
      <div className="top-[109px] lg:top-[145.96px] px-[28px] lg:px-0 w-full lg:w-[798px] absolute  left-1/2 transform -translate-x-1/2">
        <img src={heroImg} alt="hero-img" className="h-full w-full" />
        <form
          onSubmit={handleSearch}
          className="flex items-center gap-4 border border-[#D7D7EA] w-full rounded-[12px] bg-white mt-[28px] lg:mt-[80px]"
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
      </div>
    </div>
  );
};

export default Home;
