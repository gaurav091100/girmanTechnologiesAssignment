/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import phoneIcon from "../../assets/phone-icon.svg";
import userImg from "../../assets/user-img.svg";
import locationIcon from "../../assets/location-icon.svg";

const SearchResultCard = ({user}) => {
  return (
    <div className="rounded-[16px] p-6 bg-white w-full">
      <div>
        <div>
          <div className="h-[78px] w-[78px] rounded-full p-2 border border-[#F3F3F3]">
            {/* <div> */}
              <img src={userImg} alt="user-img" className="h-full w-full rounded-full"  />
            {/* </div> */}
          </div>
          <div>
            <h2 className="text-[#09090B] text-[32px] leading-[38.73px] font-[600] mt-2">{user?.first_name} {user?.last_name}</h2>
            <div className="flex items-center gap-2 mt-2">
              <img src={locationIcon} alt="location icon" height={13} width={10} />
              <span className="text-[#425763] font-[500] text-[10px] leading-[12.1px]">{user?.city}</span>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <hr />
          <div className="flex justify-between items-center mt-2">
            <div >
              <div className="flex items-center gap-[6px]">
                <img src={phoneIcon} alt="phone-icon" height={16} width={16} />
                <span className="font-[600] text-[12px] leading-[14.52px]">{user?.contact_number}</span>
              </div>
              <span className="text-[#AFAFAF] font-[500] text-[10px] leading-[12.1px]">Avaible on phone</span>
            </div>
            <Button>Fetch Details</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;
