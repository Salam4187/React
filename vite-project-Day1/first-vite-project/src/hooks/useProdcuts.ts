import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { AppState } from "../redux/store";
import type { Product } from "../model/Product";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function useProducts(url:string){
    const [products, setProducts] = useState<Product[]>([]);
    const auth=useSelector((state:AppState)=>state.auth);
    const navigate = useNavigate();


    async function  fetchProducts(signal:AbortSignal) {

        try {
            if(!auth.isAuthenticated){
                navigate("/login");
                return;

            }
            const headers = { 
                   "Authorization": `Bearer ${auth.accessToken}` 
                    };
            const response = await axios.get<Product[]>(url,{headers});
            console.log("response-->", response);
            setProducts(response.data)
        } catch (error) {
            console.log("Error-->", error);
        }

    }
    

    useEffect(()=>{
       const controller=new AbortController();

        fetchProducts(controller.signal);        

        return ()=>{

            controller.abort();
        }
    },[]);

    // ✅ Return products and setter from the hook itself
  return { products, setProducts} as const;

}