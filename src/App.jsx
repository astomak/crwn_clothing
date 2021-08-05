import React, {useEffect, useState} from "react";
import HomePage from "./components/homePage/HomePage";
import Navigation from "./components/navigation/Navigation";
import ShopPage from "./components/shopPage/ShopPage";
import {Route, Switch} from "react-router-dom";
import "./App.css";
import SignUpLogIn from "./components/signUpLogIn/SignUpLogIn";
import {auth} from "./components/firebase/firebase.utils";

function App() {
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
            setUserDetails(user);
            console.log(userDetails);
        });

        return () => unsubscribeFromAuth();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100">
            <Navigation userDetails={userDetails} />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/shop" component={ShopPage} />
                <Route exact path="/signin" component={SignUpLogIn} />
            </Switch>
        </div>
    );
}

export default App;
