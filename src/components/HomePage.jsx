import React from "react";
import HomeItem from "./HomeItem";
import Navigation from "./Navigation";

const HomePage = () => {
  return (
    <>
      <Navigation />
      {/* <div className="grid grid-flow-row-dense grid-cols-3 xl:grid-cols-4 gap-4 my-10 mx-10"> */}
      <div className="grid auto-cols-max grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4 mx-20">
        <HomeItem
          itemImage="https://images.unsplash.com/photo-1518061124653-4b85d51931f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          itemName="Hats"
        />
        <HomeItem
          itemImage="https://images.unsplash.com/photo-1549037173-e3b717902c57?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          itemName="Shirts"
        />
        <HomeItem
          itemImage=" https://images.unsplash.com/photo-1604176354204-9268737828e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          itemName="Jeans"
        />
        <HomeItem
          itemImage="https://images.unsplash.com/photo-1577208288347-b24488f3efa5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
          itemName="Shoes"
        />
        <HomeItem
          itemImage="https://images.unsplash.com/photo-1598600815245-f806c8259e1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          itemName="Women's Clothing"
          span={2}
        />
        <HomeItem
          itemImage="https://images.unsplash.com/photo-1446214814726-e6074845b4ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=461&q=80"
          itemName="Men's Clothing"
          span={2}
        />
      </div>
    </>
  );
};

export default HomePage;
