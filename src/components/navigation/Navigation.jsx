import React from "react";
import SearchIcon from "./search-icon.png";
import {ReactComponent as Logo} from "./crown.svg";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="flex justify-between px-2 py-4">
            <Link
                id="logo"
                className="flex flex-col items-center transition-all duration-300 ease-in-out cursor-pointer w-14 hover:scale-110"
                to="/"
            >
                <Logo></Logo>
                {/* <img src={Logo} alt="phoenix bird clipart photo" className="object-cover h-full" /> */}
                {/* <span>CROWN</span> */}
            </Link>
            {/* <div id="search-bar" className="relative w-3/6">
                <input
                    type="text"
                    className="w-full h-full px-4 bg-gray-300 rounded-lg outline-none ring-gray-400 focus:ring-4"
                />
                <img
                    src={SearchIcon}
                    className="absolute top-0 right-0 h-full px-2 py-2 bg-gray-400 rounded-r-lg cursor-pointer hover:bg-gray-400/80"
                />
            </div> */}
            {/* <div id="navigation-button" className="flex space-x-4 text-gray-200 space-around">
                <button className="p-1 px-4 transition duration-200 ease-in-out border-2 border-white rounded-lg hover:bg-gray-200 hover:text-black active:translate-y-1 focus:outline-none">
                    Cart
                </button>
                <button className="p-1 px-4 transition duration-200 ease-in-out border-2 border-white rounded-lg hover:bg-gray-200 hover:text-black active:translate-y-1 focus:outline-none">
                    Login/SignUp
                </button>
            </div> */}

            {/* <button>Profile</button> */}
            <div className="flex space-x-4">
                <Link
                    to="/shop"
                    className="p-2 text-xs transition-all duration-300 ease-in-out border-2 border-transparent rounded-lg sm:text-base hover:border-black"
                >
                    SHOP
                </Link>
                <Link
                    to="/signin"
                    className="p-2 text-xs transition-all duration-300 ease-in-out border-2 border-transparent rounded-lg sm:text-base hover:border-black"
                >
                    SIGN UP/LOGIN
                </Link>
            </div>
        </nav>
    );
};

export default Navigation;
