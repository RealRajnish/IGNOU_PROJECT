import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/userReducer";




const UserContext = createContext();

const initialState = {
    userLoggedIn: false,
    rootUser: { name: "", email: "", phone: "", address: "" },
}

const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const setLoggedIn = () => {
        dispatch({ type: "USER" });
    }

    const setLogOut = async () => {
        try {
            const resp = await axios.get("/logout", { withCredentials: true });
            console.log(resp);
            dispatch({ type: "USER_LOGOUT" });
        } catch (error) {
            console.log(error);
        }
    }

    const checkLoggedInStatus = async () => {
        try {

            const resp = await axios.get("/hii", { withCredentials: true });
            // console.log(resp);
            const { name, email, phone, address } = resp.data;
            dispatch({ type: "SET_ROOTUSER", payload: { name, email, phone, address } })
            setLoggedIn();
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        checkLoggedInStatus();
    }, [])


    return (
        <UserContext.Provider value={{ ...state, setLoggedIn, setLogOut, checkLoggedInStatus }}>{children}</UserContext.Provider>
    )
}

const useUserContext = () => {
    return useContext(UserContext);
}

export { useUserContext, UserContext, UserProvider };