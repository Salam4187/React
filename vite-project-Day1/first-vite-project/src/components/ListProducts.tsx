import axios from "axios";
import { useEffect } from "react"

function ListProducts() {

    const url = 'http://localhost:9000/products';

    async function fetchProducts() {

        try {
            const response = await axios.get(url);
            console.log("response-->", response);
        } catch (error) {
            console.log("Error-->", error);
        }
    }


    useEffect(() => {

        fetchProducts();

    }, []);



    return (
        <div>
            <h4>List of Products</h4>
        </div>

    )

}

export default ListProducts