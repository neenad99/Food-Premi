import { useState,useEffect } from "react";

const useFetchBody = () => {
    const [listOfRestaurants,setListOfRestaurants] = useState([]);

    const [filteredListOfRestaurants,setFilteredListOfRestaurants] = useState([]);

    const [isLoading,setIsLoading] = useState(false);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        try{
            setIsLoading(true);
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

            const jsonData = await data.json();

            setListOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredListOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        catch(err){
            console.log(err);
        }
        finally{
            setIsLoading(false);
        }
    }

    return [listOfRestaurants,setListOfRestaurants,filteredListOfRestaurants,setFilteredListOfRestaurants,isLoading,setIsLoading];
}

export default useFetchBody;