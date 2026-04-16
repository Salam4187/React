import axios from "axios";

export class Customer {
    constructor(
       public id: number,
       public name: string,
       public location: string

    ) { }
}

export default async function CustomersPage() {

    const url = "http://localhost:9000/customers";
    const response = await axios.get<Customer[]>(url);
    const customers:Customer[] = response.data;




    return (
        <div>
            <h2>Customers</h2>
            <table className="table">
                <thead>
                    <tr>
                        <td>Customer ID</td>
                        <td>Name</td>
                        <td>Location</td>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer:Customer) => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.location}</td>
                        </tr>))}

                </tbody>
            </table>

        </div>
    )
}