import React, {Component, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"


import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import Checkout from "./components/Checkout/Checkout";
import UserDashboard from "../src/components/User/userDashboard"
import Login from "./components/Auth/Login";


import {useStateValue} from "./components/GlobalContext/StateProvider";
import {auth} from "./components/Auth/firebase";
import ProtectedRoute from "./components/Auth/ProtectedRoute";

import ProductDetails from "./components/Product/ProductDetails";
import CreateProduct from "./components/Product/CreateProduct";

function App() {

    const [{user}, dispatch] = useStateValue()

    // Piece of code which runs based on given conditions


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // If user log in
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                })
            } else {
                // If user log out
                dispatch({
                    type: "SET_USER",
                    user: null,
                })

            }
        })
        return () => {
            // any cleanup operation goes here
            unsubscribe()
        }
    }, [])


    //
    // console.log("GET USERS INFO ", user)
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/checkout">
                        <Header/>
                        <Checkout/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <ProtectedRoute exact component={UserDashboard} user={user} path="/dashboard">

                    </ProtectedRoute>

                    <ProtectedRoute component={CreateProduct} user={user} path="/newproduct" />

                    <Route exact path="/">
                        <Header/>
                        <HomePage/>
                    </Route>

                    <Route path="/product/:id"  component={ProductDetails} />

                </Switch>
            </div>
        </Router>
    );
}

export default App;
