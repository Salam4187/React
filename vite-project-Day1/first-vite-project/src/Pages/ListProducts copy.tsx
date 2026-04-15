import axios from "axios";
import { useEffect, useState } from "react"
import { Product } from "../model/Product";
import './ListProducts.css';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { AppState } from "../redux/store";
import { useTitle } from "../hooks/useTitle";

function ListProducts() {

    const [products, setProdcuts] = useState<Product[]>([]);

    const url = 'http://localhost:9000/secure_products';
    const navigate = useNavigate();
    const auth=useSelector((state:AppState)=>state.auth);
    useTitle("List Products");


    async function handleDelete(prodcut: Product) {
        const deleteUrl = 'http://localhost:9000/products';
        try {   
     
            await axios.delete(deleteUrl + '/' + prodcut.id);
            //await fetchProducts();

            const productsCopy = [...products]
            const index = productsCopy.findIndex(item => item.id === prodcut.id);
            productsCopy.splice(index, 1);
            setProdcuts(productsCopy);


        } catch (error) {
            console.log("error->", error)
        }

    }

    function handleEdit(prodcut: Product) {
        navigate("/products/" + prodcut.id)
    }


    async function fetchProducts() {

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
            setProdcuts(response.data)
        } catch (error) {
            console.log("Error-->", error);
        }
    }


    useEffect(() => {

        fetchProducts();

    }, []);



    return (
        <div>
            <h3>List of Products</h3>
            <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center' }}>
                {products.map(prodcut => {
                    return (
                        <div className="product" key={prodcut.id} >
                            <p>Id: {prodcut.id}</p>
                            <p>Name: {prodcut.name}</p>
                            <p>Description: {prodcut.description}</p>
                            <p>Price: {prodcut.price}</p>
                            <button className="btn btn-danger" onClick={() => { handleDelete(prodcut) }}> Delete </button> &nbsp;
                            <button className="btn btn-info" onClick={() => handleEdit(prodcut)}> Edit </button>
                        </div>
                    )

                })}
            </div>

        </div>

    )

}

export default ListProducts