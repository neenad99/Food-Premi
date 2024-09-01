import { useState,useEffect } from "react";
import { SWIGGY_MENU_API } from "../utils/constants";

const useRestaurantMenu = (restroId) => {
    //fetch restaurant data
    const [restroInfo,setRestroInfo] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchMenufromApi();
    },[]);

    const fetchMenufromApi = async () => {
        const data = await fetch(SWIGGY_MENU_API + restroId);

        const jsonData = await data.json();

        setRestroInfo(jsonData.data);

    };

    return restroInfo;
}

export default useRestaurantMenu;