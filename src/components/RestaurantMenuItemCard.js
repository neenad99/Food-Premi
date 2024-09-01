import { useDispatch } from "react-redux";
import {addItem} from "../utils/cartSlice.js"
import { SWIGGY_MENU_ITEM_IMG_URL } from "../utils/constants";


const RestaurantMenuItemCard = (props) => {
    const {restroItemData} = props;

    const ratingElementStyle = (rating) => {
        if(rating >= 4.0)return "rgb(3,172,19)";
        else if(rating >= 3.0 && rating < 4.0)return "rgb(232,172,65)";

        return "rgb(255, 36, 43)";
    }

    const dispatcher = useDispatch();

    const handleAddItem = (restroItemData) => {
        dispatcher(addItem(restroItemData));
    }

    return (
        <div data-testid="restroFoodItems" className="w-full flex justify-around items-center mb-[20px] py-[30px] px-[10px] rounded-[8px] shadow-[0px_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[0px_2px_4px_rgba(255,255,255,0.1)] bg-[#fff] dark:bg-[#333] text-[#000] dark:text-[#fff]">
            <div className="w-3/4 px-[10px]">
                {restroItemData.card.info.isVeg && <img width="30" height="30" src="https://img.icons8.com/color/48/vegetarian-food-symbol.png" alt="vegetarian-food-symbol"/>}
                {!restroItemData.card.info.isVeg && <img width="30" height="30" src="https://img.icons8.com/color/48/non-vegetarian-food-symbol.png" alt="non-vegetarian-food-symbol"/>}
                <h4 className="mt-0 mb-[20px] text-[18px]">{restroItemData.card.info.name}</h4>
                <h4 className="mt-0 mb-[20px] text-[16px]"><span>&#8377; {(restroItemData.card.info.price || restroItemData.card.info.defaultPrice) / 100}</span></h4>
                { restroItemData.card.info.ratings.aggregatedRating.rating !== undefined && (<div className="flex gap-[10px] items-center h-[30px]">
                    <p className = "text-[#f5f5f5] font-semibold rounded-[5px] p-[2px]" style={{backgroundColor : ratingElementStyle(restroItemData.card.info.ratings.aggregatedRating.rating)}}> &#x2605; {restroItemData.card.info.ratings.aggregatedRating.rating}</p>
                    <h5>({restroItemData.card.info.ratings.aggregatedRating.ratingCountV2})</h5>
                </div>)}
                <p className="text-[#777] dark:text-[#bbb] mt-[10px]">{restroItemData.card.info.description}</p>
            </div>
            <div>
                <img src={SWIGGY_MENU_ITEM_IMG_URL + restroItemData.card.info.imageId} className="rounded-[8px] h-[180px] w-[200px] object-cover" alt="Restaurant food item"></img>
                <button className="text-lg font-bold text-[#60b246] bg-white border border-[#60b246] py-[4px] px-[12px] relative left-1/3 bottom-4 rounded-md transition-all duration-200 hover:bg-[#60b246] hover:text-white" onClick={() => {handleAddItem(restroItemData)}}>ADD</button>
            </div>
        </div>
    );
};  

export default RestaurantMenuItemCard;