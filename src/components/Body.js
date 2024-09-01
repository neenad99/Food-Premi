import RestaurantCard from "./RestaurantCard.js";
import Shimmer from "./Shimmer.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import useFetchBody from "../utils/useFetchBody.js";
import useInfiniteBodyScroll from "../utils/useInfinteBodyScroll.js";

const Body = () => {

    const [listOfRestaurants,setListOfRestaurants,filteredListOfRestaurants,setFilteredListOfRestaurants,isLoading,setIsLoading] = useFetchBody();

    const [searchText,setSearchText] = useState("");

    const [isInfiniteScrollActive,setisInfinteScrollActive] = useState(true);

    useInfiniteBodyScroll(isInfiniteScrollActive,listOfRestaurants,setListOfRestaurants,filteredListOfRestaurants,setFilteredListOfRestaurants,isLoading,setIsLoading);

    return listOfRestaurants.length === 0 ? (<Shimmer/>)  : (
        <div className="font-body min-h-screen bg-[#f7f8fa] dark:bg-[#1a1a1a] dark:text-[#f1f1f1]">
            <div className="w-4/5 my-0 mx-auto">
                <div className="flex items-center p-[25px] gap-[10px] mr-[150px]">
                    <input type="textbox" data-testid = "searchInput" className="grow py-[8px] px-[12px] border-2 border-solid border-[#ccc] dark:border-[#555] dark:hover:border-[#0099ff] rounded-[5px] outline-none hover:border-[#80bdff] dark:bg-[#2a2a2a]" placeholder = "Search for restaurants" value = {searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                    <button className="py-[8px] px-[12px] bg-[#007bff] dark:bg-[#0056b3] border-none rounded-[5px] text-white cursor-pointer transition-[background-color 0.3s, transform 0.2s] hover:bg-[#0056b3] dark:hover:bg-[#003366] hover:scale-[1.05]" onClick={() => {
                        const filteredRestaurants = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredListOfRestaurants(filteredRestaurants);
                        setisInfinteScrollActive(false);
                    }}>Search</button>
                    <button className="bg-[rgb(204,206,209)] dark:bg-[#4a4a4a] dark:text-[#ccc] text-[#333] m-[10px] py-[9px] px-[12px] rounded-[18px] font-semibold hover:scale-[1.05] hover:bg-[#c0c4c8] dark:hover:bg-[#6a6a6a]" onClick={()=> {
                        const filteredRestaurants = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                        setFilteredListOfRestaurants(filteredRestaurants);
                        setisInfinteScrollActive(false);
                    }}>Top Rated Restaurants</button>
                </div>
                <div className="flex flex-wrap">
                    {
                        filteredListOfRestaurants.map(restaurant => <Link to={"/restaurants/" + restaurant?.info?.id} key = {uuidv4()}><RestaurantCard restroData = {restaurant}/></Link>)
                    }
                </div>
            </div>
            {isLoading && <Shimmer/>}
        </div>
    );
};

export default Body;