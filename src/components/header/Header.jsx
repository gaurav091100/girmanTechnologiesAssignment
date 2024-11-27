import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import menuIcon from "../../assets/menu.svg";
import { useState } from "react";

const Header = () => {
    const [openMenu,setOpenMenu] = useState(false);

  return (
    // <header className="flex justify-between items-center shadow-lg py-3 px-52">
    //   <div className="w-[102px] h-[28px] lg:w-[220px] lg:h-[62px]">
    //     <img src={logo} alt="logo" className="h-auto w-full"  />
    //   </div>
    //   <div>
    //     <ul className="hidden lg:flex flex-col lg:flex-row justify-end items-center gap-[42px]">
    //       <li>
    //         <Link to="/" className="text-[#3063E6] underline font-[700]">SEARCH</Link>
    //       </li>
    //       <li>
    //         <Link to="https://girmantech.com/" className="text-[#111111] font-[400]">WEBSITE</Link>
    //       </li>
    //       <li>
    //         <Link to="https://www.linkedin.com/company/girmantech/">LINKEDIN</Link>
    //       </li>
    //       <li>
    //         <Link to="mailto:contact@girmantech.com">CONTACT</Link>
    //       </li>
    //     </ul>
    //   </div>
    // </header>
    <header className="flex justify-between items-center shadow-lg py-4 lg:py-3 px-6 lg:px-52">
  <div className="w-[102px] h-[28px] lg:w-[220px] lg:h-auto">
    <img src={logo} alt="logo" className="w-full h-auto" />
  </div>
  <div className="relative">
  
  
    <button className="h-6 w-6 lg:hidden cursor-pointer" onClick={()=>setOpenMenu(!openMenu)}>
    <img src={menuIcon} alt="menu-icon" className="h-full w-full" />
    </button>

    <ul className={`absolute lg:static top-[29px] right-0 shadow-lg lg:shadow-none ${openMenu ? "flex" :"hidden"} lg:flex flex-col lg:flex-row justify-end items-center gap-[10px] lg:gap-[42px] border lg:border-none border-[#E3E3E3]  py-[17px] lg:py-0 px-3 lg:px-0 bg-white lg:bg-transparent rounded-[6px] lg:rounded-none w-[96px] lg:w-auto`}>
      <li>
        <Link to="/" className="text-[#3063E6] text-xs underline font-[700]">SEARCH</Link>
      </li>
      <li>
        <Link to="https://girmantech.com/" className="text-[#111111] text-xs font-[400]">WEBSITE</Link>
      </li>
      <li>
        <Link to="https://www.linkedin.com/company/girmantech/" className="text-[#111111] text-xs font-[400]">LINKEDIN</Link>
      </li>
      <li>
        <Link to="mailto:contact@girmantech.com" className="text-[#111111] text-xs font-[400]">CONTACT</Link>
      </li>
    </ul>
  </div>
</header>

  );
};

export default Header;
