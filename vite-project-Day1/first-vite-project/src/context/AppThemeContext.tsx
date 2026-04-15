import React, { Children, useState, type JSX } from "react";
import { jsx } from "react/jsx-runtime";

export type ThemeState = {
    mode: string,
    changeMode: (mode:string) => void
}
export const initialState:ThemeState= {
    mode: 'dark',
    changeMode: (mode:string) => {}
}

export const AppThemeContext=React.createContext(initialState);

type AppThemeContextProviderProps = {
    children: JSX.Element
}

export function AppThemeContextProvider(props: AppThemeContextProviderProps){

    const [mode,setMode]=useState(initialState.mode);

    return (
      <AppThemeContext.Provider value={{mode,changeMode:setMode}}>
        {props.children}
        
        </AppThemeContext.Provider>
    )
}