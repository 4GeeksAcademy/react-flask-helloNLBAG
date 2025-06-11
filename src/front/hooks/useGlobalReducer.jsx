import { useContext, useReducer, createContext } from "react";
import storeReducer, { initialStore } from "../store";

const StoreContext = createContext();

export function StoreProvider({ children }) {
    const [store, dispatch] = useReducer(storeReducer, initialStore());

    const actions = {
        setToken: (token) => {
            sessionStorage.setItem("token", token);
            dispatch({ type: "SET_TOKEN", payload: token });
        },
        setUser: (email) => {
            dispatch({ type: "SET_USER", payload: email });
        },
        logout: () => {
            sessionStorage.removeItem("token");
            dispatch({ type: "LOGOUT" });
        }
    };

    return (
        <StoreContext.Provider value={{ store, actions }}>
            {children}
        </StoreContext.Provider>
    );
}

export default function useGlobalReducer() {
    const context = useContext(StoreContext);
    if (!context) throw new Error("useGlobalReducer must be used within a StoreProvider");
    return context;
}
