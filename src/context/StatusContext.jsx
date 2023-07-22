import React, { createContext, useReducer } from "react";
import { UPDATE_VALUE } from "./constants";


const StatusContext = createContext();

const initState = {
    value: Math.floor(Math.random()*10000)
}

const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_VALUE: {
            console.log(action);
            return {
                ...state,
                value: action.payload
            }
        }
        default: {
            throw new Error('Invalid action');
        }
    }
}
function StatusProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initState)
 
    return (
        <StatusContext.Provider value={[state, dispatch]}>
            {children}
        </StatusContext.Provider>
    )
}

export { StatusContext };
export default StatusProvider;