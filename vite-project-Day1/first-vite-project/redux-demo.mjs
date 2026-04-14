import {createStore} from 'redux'


//initial state
const state={
    count: 5,
    message: "Hello redux"
}

//reducer
const reducer= (currentState=state,action) =>{
     


    return currentState;
}
//store
const store=createStore(reducer);
console.log("state",store.getState());
//subscribe
//disptach action