import React from "react";
import itemData from "./item.js";
import HomeItem from "../homeItem/HomeItem";

const HomePage = () => {
    return (
        <>
            <div className="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4 mx-20">
                {itemData.map(({id, ...otherSectionProps}) => (
                    <HomeItem key={id} {...otherSectionProps} />
                ))}
            </div>
        </>
    );
};

export default HomePage;
