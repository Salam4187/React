"use client"

import { useEffect, useRef, useState, type ChangeEvent } from "react";


type CounterProps = {
    inputCount: number;
}

//function Counter(props:CounterProps){

const Counter: React.FC<CounterProps> = ({ inputCount }) => {
    //this will act as linkgae between porps comming from ui to the counter to handle state changes

    const [count, changeCount] = useState(inputCount);
    const clickCount = useRef(0);



    useEffect(() => { 
        
        console.log("after updated-->", count); }, [count]
    
    
    );



    function inc() {
        changeCount((count) => count + 1)
        clickCount.current = clickCount.current + 1;
        console.log("clickCount", clickCount.current);
    }

    function dec() {
        changeCount(count - 1)
        console.log("after decreased", count);
    }

    function onModelChange(event: ChangeEvent<HTMLInputElement>) {
        changeCount(event.target.valueAsNumber)
    }

    return (
        <div>
            <h4> Count : {count}</h4>
            <div>
                <button onClick={inc} >++</button> &nbsp;
                <button onClick={() => changeCount(count - 1)}>--</button> <br />
                <input placeholder="Count" value={count} type="number" onChange={onModelChange}></input>

            </div>
        </div>
    )
}

export default Counter;