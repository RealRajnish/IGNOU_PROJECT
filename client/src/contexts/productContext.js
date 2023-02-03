import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducers/productReducer"
const AppContext = createContext();

const API = "/reqProducts";
// const API = "https://api.pujakaitem.com/api/products";
const API2 = "/reqStrayProducts";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
    strayProducts: [],
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url);
            const products = await res.data;
            // console.log(prodocts);
            dispatch({
                type: "SET_API_DATA",
                payload: products
            });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
            console.log("Error occurred in api call")
        }
    }

    // 2nd API call for single product
    const getSingleProduct = async (url) => {

        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data[0];
            // const singleProduct = tempData[0];
            dispatch({
                type: "SET_SINGLE_PRODUCT",
                payload: singleProduct,
            })
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" });
        }
    }

    // 3rd API call for stray products 
    const getStrayProducts = async (url) => {
        try {
            const res = await axios.get(url);
            const strayProducts = await res.data;
            // console.log(prodocts);
            dispatch({
                type: "SET_STRAY_API_DATA",
                payload: strayProducts
            });
        } catch (error) {
            console.log("Error occurred in api call")
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts(API);
        getStrayProducts(API2);
    }, [])

    return <AppContext.Provider value={{ ...state, getSingleProduct }}>{children}</AppContext.Provider>
}


// custom hooks
const useProductContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };