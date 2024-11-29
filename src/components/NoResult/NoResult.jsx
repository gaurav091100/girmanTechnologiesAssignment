import noResult from "../../assets/no-result.svg";
const NoResult = () => {
  return (
    <div className="relative min-h-[calc(100vh-154.15px)] lg:min-h-[calc(100vh-161.03px)]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img src={noResult} alt="no-result-img" className="h-[278.6px] w-[291.58px] lg:h-[402.39px] lg:w-[472.42px]" />
        <p className="font-[500] text-[18px] leading-[21.78px] text-center text-[#999999] mt-[27px] w-[30%] lg:w-full m-auto">No results found.</p>
        </div>
    </div>
  )
}

export default NoResult