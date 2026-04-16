"use client"


import { Product } from "@/model/Product";
import './ListProducts.css';
import { useRouter } from "next/navigation"
import { useSelector } from "react-redux";
import type { AppState } from "@/redux/store";
import { useTitle } from "@/hooks/useTitle";
import { useProducts } from "@/hooks/useProdcuts";
import { useCallback, useMemo, useState } from "react";
import ProductView from "@/components/ProductView";

function ListProducts() {

   
    const url = 'http://localhost:9000/products';
    const { products, setProducts } = useProducts(url);
    const router = useRouter();
    const auth = useSelector((state: AppState) => state.auth);
    useTitle("List Products");
    const [isMessageVisible, setMessageVisible] = useState(true);

    const onProductDelete= useCallback( async (prodcut: Product) => {

        try {
            const productsCopy = [...products]
            const index = productsCopy.findIndex(item => item.id === prodcut.id);
            productsCopy.splice(index, 1);
            setProducts(productsCopy);

        } catch (error) {
            console.log("error->", error)
        }

    },[products]);

    const onhandleEdit= useCallback( async (prodcut: Product) =>{
        router.push("/products/" + prodcut.id )
    },[router]);

    const totalPrice=useMemo(()=>{
        console.log("called total price");
        let total=0;
        products.forEach(item=>{
            if(item.price)
            total=total+item.price

        })
        return total;
    },[products]);

    return (
        <div>
            <h3>List of Products</h3>
            <h2>Total Price: {totalPrice}</h2>
            {isMessageVisible ? <div className="alert alert-info">Demo for List Product</div> : null} <br />
            <button className="btn btn-info" onClick={() => setMessageVisible(!isMessageVisible)}>
                {isMessageVisible ? "Hide" : "Show"}
            </button>
            <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center' }}>
                {products.map(prodcut => {
                    return (
                        <ProductView key={prodcut.id} product={prodcut} onDelete={onProductDelete}
                        onEdit={onhandleEdit}
                        />
                        // <div className="product" key={prodcut.id} >
                        //     <p>Id: {prodcut.id}</p>
                        //     <p>Name: {prodcut.name}</p>
                        //     <p>Description: {prodcut.description}</p>
                        //     <p>Price: {prodcut.price}</p>
                        //     <button className="btn btn-danger" onClick={() => { handleDelete(prodcut) }}> Delete </button> &nbsp;
                        //     <button className="btn btn-info" onClick={() => handleEdit(prodcut)}> Edit </button>
                        // </div>
                    )

                })}
            </div>

        </div>

    )

}

export default ListProducts