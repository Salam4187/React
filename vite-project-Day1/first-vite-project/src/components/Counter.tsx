import { useEffect, useState, type ChangeEvent } from "react";

type CounterProps={
    inputCount: number;
}

//function Counter(props:CounterProps){

const Counter: React.FC<CounterProps>= ({inputCount}) =>{
    //this will act as linkgae between porps comming from ui to the counter to handle state changes

    const [count,changeCount]=useState(inputCount);


    useEffect(()=>{console.log("after updated-->",count);},[count]);
function inc(){


    //this will cause issue as each below operation is asyncronus 
    //changeCount(count+1)
     //changeCount(count+1)
      //changeCount(count+1)

     // this way it will ensure the proper increaments as we are using callbacks for syncronus 
          //changeCount((count)=>count+1)
    changeCount((count)=>count+1)
      console.log("after increased",count);
}

function dec(){
    changeCount(count-1)
      console.log("after decreased",count);
}

function onModelChange(event:ChangeEvent<HTMLInputElement>){
    changeCount(event.target.valueAsNumber)
}

    return (
        <div>
            <h4> Count : {count}</h4>
            <div>
                <button onClick={inc} >++</button> &nbsp;
                <button onClick={()=>changeCount(count-1)}>--</button> <br/>
                <input placeholder="Count" value={count} type="number" onChange={onModelChange}></input>
                
            </div>
        </div>
    )
}

export default Counter;