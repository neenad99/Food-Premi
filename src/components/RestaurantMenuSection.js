import RestaurantMenuItemCard from "./RestaurantMenuItemCard";
import { useRef, useEffect} from "react";

const RestaurantMenuSection = (props) => {
    const {restroMenuSection,showItems,setShowIndex} = props;
    const sectionRef = useRef(null);

    useEffect(() => {
        if (showItems && sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [showItems]);

    const toggleAccordion = () => {
        setShowIndex();
    };

    return (
        <div>
            <div ref={sectionRef} className="p-[10px] mb-[20px] bg-[#e8e9eb] dark:bg-[#333] rounded-[5px] w-full flex items-center justify-between transition duration-300 ease-in-out hover:bg-[#dcdde0] dark:hover:bg-[#444] cursor-pointer" onClick={toggleAccordion}>
                <h4 className="m-0 text-[#333] dark:text-[#fff] text-[1.2em]">{restroMenuSection.title} ({restroMenuSection.itemCards.length})</h4>
                {showItems && <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/collapse-arrow.png" alt="collapse-arrow"/>}
                {!showItems && <img width="30" height="30" src="https://img.icons8.com/ios/50/expand-arrow--v1.png" alt="expand-arrow--v1"/>}
            </div>
            {
                        showItems && restroMenuSection.itemCards.map(item => <RestaurantMenuItemCard key={item.card.info.id} restroItemData = {item}/>)
            }
        </div>
    );  
}

export default RestaurantMenuSection;