import { useState } from "react";
import heroImg from "../assets/hero-img.svg";
import bgImg from "../assets/bg-img.svg";
import SearchBox from "../components/searchbox/SearchBox";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat w-full h-[calc(100vh-67.55px)] lg:h-[calc(100vh-111.03px)]"
      style={{
        backgroundImage: `url(${bgImg}), linear-gradient(180deg, #FFFFFF 31%, #B1CBFF 100%)`,
      }}
    >
      <div className="top-[109px] lg:top-[145.96px] px-[28px] lg:px-0 w-full lg:w-[798px] absolute  left-1/2 transform -translate-x-1/2">
        <img src={heroImg} alt="hero-img" className="h-full w-full" />
        <div className="mt-[28px] lg:mt-[80px]">
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
      </div>
    </div>
  );
};

export default Home;
