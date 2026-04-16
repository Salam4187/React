"use client"
import { JSX } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

function ReduxProvider({children}:{children:JSX.Element}){

return(
    <Provider store={store}>
       {children}
    </Provider>
)

}

export default ReduxProvider