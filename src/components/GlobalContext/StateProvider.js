// SETUP DATA LAYER
// We need this to track the basket
import React, {createContext, useContext, useReducer} from "react";

// import {createContext} from "react";

// DATA LAYER
export const StateContext = createContext();

// BUILD A DATA PROVIDER

export const StateProvider = ({reducer, initialState, children}) => (

    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)



// Use inside of a component
export const useStateValue = () => useContext(StateContext);


