import { useParams } from "react-router-dom";
import { useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantMenuSection from "./RestaurantMenuSection";
import { v4 as uuv4 } from "uuid";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {restroId} = useParams();
    const restroInfo = useRestaurantMenu(restroId);
    const [showIndex,setShowIndex] = useState(null);

    if(restroInfo === null){
        return <Shimmer/>;
    }
    
    const {name,costForTwoMessage,cuisines,avgRatingString,totalRatingsString,sla,areaName} = restroInfo?.cards[2]?.card?.card?.info;
    const {cards} = restroInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
    let categoryCards = [];

    cards.forEach((card) => {
        const {categories} = card.card.card;
        const {title,itemCards} = card.card.card;  
        if(title === "Recommended" || itemCards !== undefined){
            categoryCards.push(card.card.card);
        }   
        if(categories !== undefined){
            categories.forEach(category => categoryCards.push(category));
        }
    });

    return (restroInfo == null) ? <Shimmer/> : (
        <div className="absolute top-[100px] min-w-full bg-[#f7f8fa] dark:bg-[#1a1a1a] m-0 p-0 h-max">
            <div className="w-3/5 flex p-[30px] items-center flex-col my-[20px] mx-auto">
                <div className="mb-[20px] text-3xl text-[#333]">
                    <h1 className="dark:text-white">{name}</h1>
                </div>
                <div className="w-[90%] rounded-[10px] p-[20px] mb-[20px] bg-[linear-gradient(#fff,#e2e2e2)] dark:bg-[linear-gradient(#2c2c2c,#1a1a1a)]">
                    <div className="p-[20px] border-[1px] border-solid border-[#808080] rounded-[10px] bg-[#fff] dark:bg-[#2c2c2c]">
                        <div className="flex items-center font-semibold text-lg gap-[5px] dark:text-white">
                            <img className="h-[25px] w-[25px]" src="https://img.icons8.com/ios-filled/50/40C057/rating.png" alt="rating"/>
                            <p>{avgRatingString}({totalRatingsString}) - {costForTwoMessage}</p>
                        </div>
                        <p className="text-[17px] font-bold text-[#ff4500] dark:text-[#ff9900] mb-[10px]"> {cuisines.join(", ")} </p>
                        <p className="text-[#333] dark:text-white"><span className="font-bold text-[17px]">Outlet </span>{areaName}</p>
                        <p className="text-[#333] dark:text-white"><span className="font-bold text-[17px]">{sla.slaString}</span></p>
                        <hr className="mx-0 my-[20px] border-t-[1px] border-solid border-[#333] dark:border-[#666]"></hr>
                        <p className="text-[#333] dark:text-white"><span className="font-bold text-[17px]"> Distance: </span>{sla.lastMileTravelString}</p>
                    </div>
                </div>
                <div className="restro-menu-items-container mt-[20px] w-full">
                    <h2 className="font-normal text-[20px] text-center mb-[10px] tracking-[4px] dark:text-white">MENU</h2>
                    {
                        categoryCards.map((menusection,index) =>
                            <RestaurantMenuSection key={uuv4()} restroMenuSection={menusection} showItems = {(index === showIndex) ? true : false}
                            setShowIndex = {() => setShowIndex((showIndex === index) ? null : index)}/>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default RestaurantMenu;