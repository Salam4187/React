import axios from "axios";
import { Product } from "../model/Product";
import './ListProducts.css';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { AppState } from "../redux/store";
import { useTitle } from "../hooks/useTitle";
import { useProducts } from "../hooks/useProdcuts";
import { useState } from "react";
import ProductView from "../components/ProductView";

function ListProducts() {



    const url = 'http://localhost:9000/secure_products';
    const { products, setProducts } = useProducts(url);
    const navigate = useNavigate();
    const auth = useSelector((state: AppState) => state.auth);
    useTitle("List Products");
    const [isMessageVisible, setMessageVisible] = useState(true);

    function onProductDelete(prodcut: Product) {

        try {
            const productsCopy = [...products]
            const index = productsCopy.findIndex(item => item.id === prodcut.id);
            productsCopy.splice(index, 1);
            setProducts(productsCopy);

        } catch (error) {
            console.log("error->", error)
        }

    }

    function onhandleEdit(prodcut: Product) {
        navigate("/products/" + prodcut.id)
    }


    return (
        <div>
            <h3>List of Products</h3>
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