"use client";
import { useRef } from "react";
import { SayHello } from "../action/sayHello";

export default function SupplierPage(){


    const searchSupplier= useRef<HTMLInputElement>(null);

    async function handleClick(){
      
      const message = searchSupplier.current?.value || "";
      console.log("message-->", message);
      SayHello(message);

    }
      



    return(
        <div>
            <h2>Suppliers</h2>
            <div>
             <input type="text" placeholder="Search by name" className="form-control" ref={searchSupplier}/>
            </div>
            <div>
                <button className="btn btn-primary"  onClick={handleClick}>Fetch Message</button>
            </div>
        </div>
    )
}