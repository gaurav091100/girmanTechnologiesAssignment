/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import phoneIcon from "../../assets/phone-icon.svg";
import userImg from "../../assets/user-img.svg";
import locationIcon from "../../assets/location-icon.svg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

const SearchResultCard = ({ user }) => {
  return (
    <div className="rounded-[16px] p-6 bg-white w-full">
     

      <div>
        <div>
          <div className="h-[78px] w-[78px] rounded-full p-2 border border-[#F3F3F3]">
            {/* <div> */}
            <img
              src={userImg}
              alt="user-img"
              className="h-full w-full rounded-full"
            />
            {/* </div> */}
          </div>
          <div>
            <h2 className="text-[#09090B] text-[32px] leading-[38.73px] font-[600] mt-2">
              {user?.first_name} {user?.last_name}
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <img
                src={locationIcon}
                alt="location icon"
                height={13}
                width={10}
              />
              <span className="text-[#425763] font-[500] text-[10px] leading-[12.1px]">
                {user?.city}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <hr />
          <div className="flex justify-between items-center mt-2">
            <div>
              <div className="flex items-center gap-[6px]">
                <img src={phoneIcon} alt="phone-icon" height={16} width={16} />
                <span className="font-[600] text-[12px] leading-[14.52px]">
                  {user?.contact_number}
                </span>
              </div>
              <span className="text-[#AFAFAF] font-[500] text-[10px] leading-[12.1px]">
                Avaible on phone
              </span>
            </div>
            <Dialog>
            <DialogTrigger asChild>
              <Button>Fetch Details</Button>
            </DialogTrigger>
            <DialogContent  className="gap-0">
              <DialogHeader>
                <DialogTitle className="text-[22.22px] lg:text-[24px] font-[600] leading-[26.89px] lg:leading-[29.05px] text-[#09090B] text-left">
                
                    Fetch Details
                   
                
                </DialogTitle>
                <DialogDescription className="text-[12.96px] lg:text-[14px] font-[400] leading-[15.68px] lg:leading-[16.94px] text-[#71717A] mt-2 text-left">
                Here are the details of following employee.
                </DialogDescription>
              </DialogHeader>
              <div className="font-[500] text-[12.96px] lg:text-[14px] leading-[15.55px] lg:leading-[16.8px] text-[#09090B]">
              <p className="mt-4">
                  Name: {user?.first_name} {user?.last_name} <br />
                  Location: {user?.city} <br />
                  Contact Number: {user?.contact_number}
                  </p>
                  <p className="mt-[10px] mb-4">Profile Image</p>
                 <div className="mt-4 mb-4">
                 <img src={userImg} alt="user-img" className="h-[191.62px] w-[191.62px] lg:h-[207px] lg:w-[207px]"  />
                 </div>
              </div>
              <DialogFooter className="sm:justify-end hidden lg:flex">
          <DialogClose asChild>
            <Button variant="outline">
              Close
              
            </Button>
          </DialogClose>
        </DialogFooter>
            </DialogContent>
          </Dialog>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;
