import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import RestaurantMenuItemCard from "./RestaurantMenuItemCard";
import EmptyCart from "./EmptyCart";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatcher = useDispatch();
    const handleClearCart = () => {
        dispatcher(clearCart());
    }
    
    return (
    cartItems.length === 0 ? <EmptyCart/> : 
    (
    <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
        <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
            {
                cartItems.map((restroItem) => <RestaurantMenuItemCard key={restroItem.card.info.id} restroItemData={restroItem}/>)
            }
        </div>
    </div>
    )
    );
}

export default Cart;