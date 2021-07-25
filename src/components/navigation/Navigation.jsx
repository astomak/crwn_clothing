import React from "react";
import SearchIcon from "./search-icon.png";
import Logo from "./logo.jpg";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="flex justify-between bg-gray-800/50 py-4 px-2">
            <Link
                id="logo"
                className="h-10 hidden sm:flex text-white items-center cursor-pointer hover:scale-110 transition-all ease-in-out duration-300"
                to="/"
            >
                <img src={Logo} alt="phoenix bird clipart photo" className="object-contain h-full" />
                <span>CROWN</span>
            </Link>
            <div id="search-bar" className="relative w-3/6">
                <input
                    type="text"
                    className="bg-gray-300 rounded-lg h-full w-full ring-gray-400 focus:ring-4 outline-none px-4"
                />
                <img
                    src={SearchIcon}
                    className="h-full absolute right-0 top-0 px-2 py-2 bg-gray-400 rounded-r-lg hover:bg-gray-400/80 cursor-pointer"
                />
            </div>
            <div id="navigation-button" className="flex space-around text-gray-200 space-x-4">
                <button className="border-2 border-white p-1 px-4 rounded-lg hover:bg-gray-200 hover:text-black active:translate-y-1 transition ease-in-out duration-200 focus:outline-none">
                    Cart
                </button>
                <button className="border-2 border-white p-1 px-4 rounded-lg hover:bg-gray-200 hover:text-black active:translate-y-1 transition ease-in-out duration-200 focus:outline-none">
                    Login/SignUp
                </button>
            </div>

            {/* <button>Profile</button> */}
        </nav>
    );
};

export default Navigation;
