import React from "react";
import {withRouter} from "react-router";

const HomeItem = ({itemImage, itemName, size, history, match, linkUrl}) => {
    return (
        <div
            className={`overflow-hidden w-full sm:max-w-none max-h-96 col border-2 border-black rounded-xl cursor-pointer col-span-auto row-span-1 ${
                size == "stretch" ? "md:col-span-2" : ""
            }`}
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <div className="relative transition-all ease-in-out duration-[1.5s] w-full h-full z-0 hover:scale-125">
                <img src={itemImage} className="z-10 object-cover max-h-96 w-full h-full rounded-xl" />
                <div className="absolute inset-0 z-20 transition-all duration-500 ease-in-out hover:bg-black/50">
                    <div className="absolute p-4 px-8 text-center rounded-lg left-1/2 top-1/2 -translate-x-2/4 -translate-y-2/4 bg-white/60 hover:bg-white/80">
                        <span className="text-xs font-bold uppercase md:text-sm text-gray-700/80">{itemName}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(HomeItem);
