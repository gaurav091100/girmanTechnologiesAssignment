import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import menuIcon from "../../assets/menu.svg";
import { useEffect, useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q");

  const isSearchPage = location.pathname === "/search-results";

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search-results?q=${searchValue}`);
  };

  useEffect(() => {
    setSearchValue(query);
  }, [query]);
  return (
    <header className="flex justify-between items-center shadow-md py-[18.58px] lg:py-[24.39px] px-[30.65px] lg:px-[283.9px] sticky top-0 left-0 z-10 bg-white">
      <Link to="/">
        <div className="w-[102.7px] h-[28.84px] lg:w-[220.91px] lg:h-[62.26px]">
          <img src={logo} alt="logo" className="w-full h-auto" />
        </div>
      </Link>
      <div className="relative">
        <button
          className="h-6 w-6 lg:hidden cursor-pointer"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <img src={menuIcon} alt="menu-icon" className="h-full w-full" />
        </button>
        {isSearchPage && (
          <form
            onSubmit={handleSearch}
            className="hidden lg:flex items-center gap-4 border border-[#D7D7EA] w-full rounded-[12px] bg-white p-3"
          >
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </form>
        )}
        <ul
          className={`absolute lg:static top-[29px] right-0 shadow-2xl lg:shadow-none ${
            openMenu ? "flex" : "hidden"
          }  lg:${
            isSearchPage ? "hidden" : "flex"
          } flex-col lg:flex-row justify-end items-center gap-6 lg:gap-[42.17px] border lg:border-none border-[#E3E3E3]  py-[17px] lg:py-0 pl-3 pr-[27px] lg:px-0 bg-white lg:bg-transparent rounded-[6px] lg:rounded-none w-auto z-10`}
        >
          <li>
            <Link
              to="/"
              className="text-[#3063E6] text-[12px] lg:text-[22.49px] font-[700] leading-[14.52px] lg:leading-[27.22px] tracking-[-0.2px] underline "
            >
              SEARCH
            </Link>
          </li>
          <li>
            <Link
              to="https://girmantech.com/"
              className="text-[#111111] text-[12px] lg:text-[22.49px] font-[400] leading-[14.52px] lg:leading-[27.22px] tracking-[-0.2px]"
            >
              WEBSITE
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/company/girmantech/"
              className="text-[#111111] text-[12px] lg:text-[22.49px] font-[400] leading-[14.52px] lg:leading-[27.22px] tracking-[-0.2px]"
            >
              LINKEDIN
            </Link>
          </li>
          <li>
            <Link
              to="mailto:contact@girmantech.com"
              className="text-[#111111] text-[12px] lg:text-[22.49px] font-[400] leading-[14.52px] lg:leading-[27.22px] tracking-[-0.2px]"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
