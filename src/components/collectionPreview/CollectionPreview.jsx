import React from "react";
import CollectionItem from "../colllectionItem/CollectionItem";

const CollectionPreview = ({title, items}) => {
    return (
        <div className="p-4 mb-4">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14">
                {items
                    .filter((item, idx) => idx < 4)
                    .map(({id, ...otherCollectionProps}) => (
                        <CollectionItem key={id} {...otherCollectionProps} />
                    ))}
            </div>
        </div>
    );
};

export default CollectionPreview;
