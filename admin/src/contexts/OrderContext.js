import axios from "axios";
import { createContext, useContext, useReducer, useEffect, useState } from "react";
import reducer from "../reducers/OrderReducer";

const AppContext = createContext();

const initialState = {
  orders: [],
  singleOrder:[],
};

const AppProvider = ({children})=>{
    const [state,dispatch]= useState(reducer,initialState);





    

    return <AppContext.Provider value={...state}>{children}</AppContext.Provider>
}

// custom hooks
const useOrderContext = () => {
    return useContext(AppContext);
};