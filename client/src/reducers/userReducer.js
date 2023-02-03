
const userReducer = (state, action) => {
    if (action.type === "USER") {
        return {
            ...state,
            userLoggedIn: true,
        }
    }

    if (action.type === "USER_LOGOUT") {
        return {
            ...state,
            userLoggedIn: false,
            rootUser: { name: "", email: "", phone: "", address: "" },
        }
    }
    if (action.type === "SET_ROOTUSER") {
        return {
            ...state,
            // rootUser: { name: payload.name, email: payload, phone: payload.phone, address: payload.address },
            rootUser: action.payload,
        }

    }

    return state;
}

export default userReducer