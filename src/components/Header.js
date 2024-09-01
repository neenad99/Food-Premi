import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const [loginBtn,setLoginBtn] = useState("Login");
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="sticky top-0 z-[999] flex items-center justify-between py-[10px] px-[30px] bg-[#ffffff] text-[#000] dark:bg-[#1a1a1a] dark:text-[#fff] shadow-[0_4px_6px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_6px_rgba(0,0,0,0.6)]">
            <div>
                <img width="80" height="80" src="https://img.icons8.com/bubbles/100/food.png" alt="food"/>
            </div>
            <div className="py-0 px-[60px] text-[20px]">
                <ul className='flex items-center gap-[20px]'>
                    <li className="li-style"><Link to="/">Home</Link></li>
                    <li className="li-style"><Link to="/about">About Us</Link></li>
                    <li className="li-style"><Link to="/contact">Contact Us</Link></li>
                    <li className="li-style"><Link to="/cart">Cart ({cartItems.length})</Link></li>
                    <li> <div className="flex gap-[5px]"><img width="30" height="30" src="https://img.icons8.com/fluency/48/login-rounded-right.png" alt="login-rounded-right"/> <button className='cursor-pointer hover:text-[#FFA500]' onClick={() => setLoginBtn((loginBtn === "Login") ? "Logout" : "Login")}> {loginBtn}</button></div> </li>
                    <li className="p-[10px] m-[20px]">
                    <div className="relative flex items-center">
                    <input id="checkbox" className="sr-only" type="checkbox" onChange={() => {document.documentElement.classList.toggle('dark')}}/>
                        <label htmlFor="checkbox" className="bg-[#111] w-[55px] h-[30px] rounded-[50px] p-[2px] cursor-pointer flex items-center">
                            <i className="inline-block text-[#f39c12] transition-opacity duration-200 ease-in-out opacity-0 dark:opacity-100"><img width="60" height="60" src="https://img.icons8.com/external-flat-papa-vector/78/external-Light-Mode-interface-flat-papa-vector.png" alt="external-Light-Mode-interface-flat-papa-vector"/></i>
                            <i className="inline-block text-[#f1c40f] transition-opacity duration-200 ease-in-out dark:opacity-0 opacity-100"><img width="75" height="75" src="https://img.icons8.com/external-others-inmotus-design/67/FAB005/external-Moon-round-icons-others-inmotus-design-5.png" alt="external-Moon-round-icons-others-inmotus-design-5"/></i>
                            <span className="bg-white w-[22px] h-[22px] absolute rounded-full transition-transform duration-200 ease-in-out transform dark:translate-x-[24px]"></span>
                        </label>
                    </div>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Header;