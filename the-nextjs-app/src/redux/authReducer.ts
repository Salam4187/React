
"use client"
export type AuthState={
    isAuthenticated:boolean,
    userName:string,
    accessToken:string,
    refreshToken:string
}


export type AuthAction={
    type:string,
    payload?:AuthState
}

const initialState:AuthState={
    isAuthenticated:false,accessToken:"",refreshToken:"",userName:""
}

//login action=> {type:"login",payload:authSTate}
//logout action=> {type:"logout"}
export const authReducer=(state=initialState,action:AuthAction)=>{


    if(action.type==="login"){
        return action.payload;
    }
    if(action.type==="logout"){
        return initialState;
    }

    return state;
}


