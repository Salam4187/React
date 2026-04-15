import { useEffect, useState } from "react";
import { Product } from "../model/Product";
import { useTitle } from "../hooks/useTitle";

function GadgetStore(){
    const [products,setProducts]=useState<Product>({});

    useTitle("Gadgets Page");
    useEffect(()=>{

    },[])
    

    return (
        <div>
            <h3>Gadget Store</h3>
        </div>
    )
}

export default GadgetStore;