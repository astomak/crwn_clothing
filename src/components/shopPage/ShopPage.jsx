import React, {useState} from "react";
import CollectionPreview from "../collectionPreview/CollectionPreview";
import SHOP_DATA from "../shopData";

const ShopPage = () => {
    const [collections] = useState(SHOP_DATA);

    return (
        <div>
            {collections
                .filter((item, idx) => idx < 4)
                .map(({id, ...otherCollectionsProps}) => {
                    return <CollectionPreview key={id} {...otherCollectionsProps} />;
                })}
        </div>
    );
};

export default ShopPage;
