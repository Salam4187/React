import { type } from 'os';
import { createStore } from 'redux'


//initial state
const state = {
    count: 5,
    message: "Hello redux"
}

//reducer
const reducer = (currentState = state, action) => {

    if (action.type === 'increment_counter') {
        return {
            ...currentState,
            count: currentState.count + 1
        }
     }

if (action.type === 'decrement_counter') {
    return {
        ...currentState,
        count: currentState.count - 1
    }
}
if (action.type === 'update_counter') {
    return {
        ...currentState,
        count: action.value
    }
     }

return currentState;
}
//store
const store = createStore(reducer);
console.log("state", store.getState());
//subscribe

store.subscribe(() => {
    console.log("state", store.getState())
})
//disptach action

store.dispatch({ type: "increment_counter" })
store.dispatch({ type: "update_counter", value: 100 })
store.dispatch({ type: "decrement_counter" })