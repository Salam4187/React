import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../model/Product";

function EditProducts() {
    const params = useParams();
    const navigate = useNavigate();
    const id = params.id;
    const getUrl = 'http://localhost:9000/products/' + id;
    const [product, setProduct] = useState<Product>();
    async function saveProduct() {
        try {
            axios.put(getUrl, product);
            navigateToListPage();
        } catch (error) {
            console.log("error while updating details" + error)
        }
    }

    function navigateToListPage() {
        navigate("/products")
    }


    async function fetchProduct() {
        try {
            const response = await axios.get<Product>(getUrl);
            setProduct(response.data);
        } catch (error) {
            console.log("error while getting details" + error)
        }
    }


    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <div>
            <h2>Edit Product: { }</h2>
            {product != null ? <div className="form-group">
                <label> Name</label>
                <input type='text' name="name" className="form-control" placeholder="Name"
                    value={product.name} onChange={e => setProduct({ ...product, name: e.target.value })}></input> <br />

                <label> Description</label>
                <input type='text' name="description" className="form-control" placeholder="description"
                    value={product.description} onChange={e => setProduct({ ...product, description: e.target.value })} /><br />

                <label> price</label>
                <input type='number' name="price" className="form-control" placeholder="price"
                    value={product.price} onChange={e => setProduct({ ...product, price: e.target.valueAsNumber })}
                ></input> <br />
                <button className="btn btn-success" onClick={saveProduct} >Save</button> &nbsp;
                <button className="btn btn-danger" onClick={navigateToListPage}>Cancel</button></div> : null}

        </div>
    )

}

export default EditProducts;