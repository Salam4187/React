import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { AppState } from "../redux/store";
import type { Product } from "../model/Product";
import { useRouter } from "next/navigation"
import axios from "axios";

export function useProducts(url:string){
    const [products, setProducts] = useState<Product[]>([]);
    const auth=useSelector((state:AppState)=>state.auth);
    const router = useRouter();


    async function  fetchProducts(signal:AbortSignal) {

        try {
            if(!auth?.isAuthenticated){
                 router.push("/login")
                return;

            }
            // const headers = { 
            //        "Authorization": `Bearer ${auth.accessToken}` 
            //         };
            //const response = await axios.get<Product[]>(url,{headers});
            const response = await axios.get<Product[]>(url);
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