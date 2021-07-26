import React from "react";
import itemData from "./item.js";
import HomeItem from "../homeItem/HomeItem";

const HomePage = () => {
    return (
        <>
            <div className="grid grid-flow-row-dense grid-cols-1 gap-4 p-4 md:px-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {itemData.map(({id, ...otherSectionProps}) => (
                    <HomeItem key={id} {...otherSectionProps} />
                ))}
            </div>
        </>
    );
};

export default HomePage;
