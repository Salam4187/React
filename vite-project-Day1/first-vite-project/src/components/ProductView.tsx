import React from "react"
import type { Product } from "../model/Product"
import axios from "axios";


type ProductViewProp = {
    product: Product,
    onDelete?: (product:Product)=> void
    onEdit?: (product:Product)=> void
}




const ProductView: React.FC<ProductViewProp> = React.memo(({ product,onDelete,onEdit }) => {
    async function handleDelete() {

        try {
            const url = import.meta.env.VITE_API_URL + "/secure_products/" + product.id;
            await axios.delete(url);
            if(onDelete){
                onDelete(product);
            }           

        } catch (error) {

        }
    }

    function editProduct(){
          if(onEdit){
                onEdit(product);
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
            <button className="btn btn-info" onClick={editProduct}> Edit </button>
        </div>
    )

})


export default ProductView;