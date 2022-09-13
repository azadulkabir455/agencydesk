import React,{createContext} from "react";

const GlobalContext = createContext();

const GlobalDataContainer = (props) => {
    return(
        <GlobalContext.Provider value={{}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export {GlobalContext, GlobalDataContainer};