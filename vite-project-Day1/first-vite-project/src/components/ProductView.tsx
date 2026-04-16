import React from "react"
import type { Product } from "../model/Product"
import axios from "axios";


type ProductViewProp = {
    product: Product,
    onDelete?: (product:Product)=> void
}




const ProductView: React.FC<ProductViewProp> = React.memo(({ product }) => {
    async function handleDelete() {

        try {
            const url = import.meta.env.VITE_API_URL + "/products/" + product.id;
            await axios.delete(url);

        } catch (error) {

        }
    }

    return (
        <div className="product" key={product.id} >
            <img src={"http://localhost:9000" + product.imageUrl} />
            <p>Id: {product.id}</p>
            <p>Name: {product.name}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
            <button className="btn btn-danger" onClick={handleDelete}> Delete </button> &nbsp;
            {/*<button className="btn btn-info" onClick={() => handleEdit(prodcut)}> Edit </button> */}
        </div>
    )

})


export default ProductView;