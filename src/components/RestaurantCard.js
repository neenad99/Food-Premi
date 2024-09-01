import { CDN_URL } from "../utils/constants.js";

const RestaurantCard = (props) => {
    const {restroData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = restroData?.info;
    const {deliveryTime} = restroData.info?.sla;
    const header = restroData.info?.aggregatedDiscountInfoV3?.header;
    const subHeader = restroData.info?.aggregatedDiscountInfoV3?.subHeader;
    const backgroundImageUrl = CDN_URL + cloudinaryImageId;
    return (
        <div data-testid = "resCard" className="bg-[#ffffff] dark:bg-[#2d2d2d] w-[250px] rounded-[10px] p-[20px] m-[15px] shadow-[10px_10px_40px_2px_rgba(128,128,128,0.4)] dark:shadow-[10px_10px_40px_2px_rgba(0,0,0,0.6)] hover:border-[1px] dark:hover:border-white hover:border-black hover:border-solid">
            <div className="relative bg-cover bg-center h-[200px] w-full rounded-[10px_10px_0px_0px]" style={{backgroundImage : `url(${backgroundImageUrl})`}}>
            {header != null && <div className = "discount absolute bottom-0 left-0 max-w-fit bg-[#3582ec] text-white text-[14px] font-bold rounded-[0px_4px_4px_0px] px-[5px]">{header}<p className="font-normal">{subHeader}</p></div>}
            <div className = "absolute right-[3%] bottom-[6%] bg-[#f5f5f5] dark:bg-[#3a3a3a] text-[14px] font-semibold py-[3px] px-[6px] max-w-fit rounded-[4px]">{deliveryTime} mins</div>
            </div>
            <div className="p-[10px] text-[18px]">
                <div>
                    <p className="text-[rgba(0, 0, 0, 0.87)] dark:text-[rgba(255, 255, 255, 0.87)] font-semibold whitespace-nowrap overflow-hidden text-ellipsis">{name}</p>
                    <p className="text-[15px] text-[#7D7B71] dark:text-[#b3b3b3] mb-[30px] whitespace-nowrap overflow-hidden text-ellipsis">{cuisines.join(", ")}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-[16px] rounded-[4px] bg-[#0a6d0acc] text-[#fff] font-bold text-center p-[2px]">{avgRating} &#x2605;</p>
                    <p className="text-[16px] text-[rgba(128, 128, 128, 0.97)] dark:text-[rgba(200, 200, 200, 0.87)]">{costForTwo}</p>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;