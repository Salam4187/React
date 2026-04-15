import React from "react"
import type { Product } from "../model/Product"


type ProductViewProp={
    product: Product
}

const ProductView:React.FC<ProductViewProp> =React.memo(({ product })=>{
    return (
          <div className="product" key={product.id} >
            <img src={"http://localhost:9000"+product.imageUrl}/>
                            <p>Id: {product.id}</p>
                            <p>Name: {product.name}</p>
                            <p>Description: {product.description}</p>
                            <p>Price: {product.price}</p>
                            {/* <button className="btn btn-danger" onClick={() => { handleDelete(prodcut) }}> Delete </button> &nbsp;
                            <button className="btn btn-info" onClick={() => handleEdit(prodcut)}> Edit </button> */}
                        </div>
    )

})


export default ProductView;