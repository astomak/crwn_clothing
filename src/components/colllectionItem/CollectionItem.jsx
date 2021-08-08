import React, {useState} from "react";

const CollectionItem = ({name, imageUrl, price}) => {
    const [showButton, setButton] = useState(false);
    return (
        <div
            className="relative w-full p-4 mx-auto cursor-pointer h-full"
            onMouseEnter={() => setButton(true)}
            onMouseLeave={() => setButton(false)}
        >
            <img src={imageUrl} className="object-cover w-full h-full rounded-md"></img>
            <div className="flex justify-between px-1">
                <span className="inset-0">{name}</span>
                <span className="bottom-0">${price}</span>
            </div>
            <button
                className={`absolute w-3/4 p-2 px-4 text-gray-800 bg-gray-100/60 bottom-8 left-1/2 transform -translate-x-1/2 hover:bg-black hover:text-gray-100 ${
                    showButton ? "" : "hidden"
                }`}
            >
                ADD TO CART
            </button>
        </div>
    );
};

export default CollectionItem;
