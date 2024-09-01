const EmptyCart = () => {
    return (
        <div className="w-6/12 p-20 m-auto flex flex-col items-center justify-items-center text-center">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" className="h-[400px] w-[400px]"></img>
            <h2 className="text-2xl font-semibold mt-10">Your Cart is Empty</h2>
            <span className="mt-5 text-lg">You can go to home page to view more restaurants</span>
        </div>
    );
}

export default EmptyCart;