import { useEffect } from "react";

const useInfiniteBodyScroll = (isInfiniteScrollActive,listOfRestaurants,setListOfRestaurants,filteredListOfRestaurants,setFilteredListOfRestaurants,isLoading,setIsLoading) => {

    useEffect(() => {
        if(!isInfiniteScrollActive)return ;

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[isLoading,isInfiniteScrollActive]);

    const handleScroll = () => {
        if ((window.innerHeight + document.documentElement.scrollTop) <= (document.documentElement.offsetHeight - 200) || isLoading) {
          return;
        }
        updateApiData();
    };

    const updateApiData = async () => {
        try{
            setIsLoading(true);

            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            
            const jsonData = await data.json();

            const newRestaurantsList = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            
            listOfRestaurants =  [...listOfRestaurants,...newRestaurantsList];

            filteredListOfRestaurants = [...filteredListOfRestaurants,...newRestaurantsList];
            
            setListOfRestaurants(listOfRestaurants);
            setFilteredListOfRestaurants(filteredListOfRestaurants);
        }
        catch(err){
            console.log(err);
        }
        finally{
            setIsLoading(false);
        }
    }


}

export default useInfiniteBodyScroll;