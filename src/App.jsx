import React from "react";
import HomePage from "./components/homePage/HomePage";
import Navigation from "./components/navigation/Navigation";
import ShopPage from "./components/shopPage/ShopPage";
import {Route} from "react-router-dom";

function App() {
    // return <Route exact path="/" component={HomePage} />;
    return (
        <div className="bg-gray-100">
            {/* <Navigation /> */}
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
        </div>
    );
}

export default App;
