//import axios from "axios";

import { get } from "http";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "the is rendered on server",
  description: "This is the customers page of the nextjs 13.4 demo app with app directory and react 18 features",
  keywords: ["customers", "server page"],
};


export class Customer {
    constructor(
       public id: number,
       public name: string,
       public location: string

    ) { }
}



export default async function ListCustomers() {

    return(
        <div>
            <h3>
                <Suspense fallback={<div className="alert alert-info">Loading customers C1...</div>}>
                    {/* @ts-ignore */}
                    <CustomersPage interval={1000}/>
                </Suspense>
                  <Suspense fallback={<div className="alert alert-info">Loading customers C2...</div>}>
                    {/* @ts-ignore */}
                    <CustomersPage interval={3000}/>
                </Suspense>
            </h3>
        </div>
    )
}


export  async function CustomersPage({interval}:{interval:number}) {


    //similuate delay

    await new Promise(resolve=>setTimeout(resolve,interval))

    const url = "http://localhost:9000/customers";
    //const response = await axios.get<Customer[]>(url);
    const response = await fetch(url, { method: "GET", cache: "no-store" });
    const customers: Customer[] = await response.json() as Customer[];




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
                            <td> <Link 
                            href={`/customers/${customer.id}`}
                            >{customer.name}</Link></td>
                            <td>{customer.location}</td>
                        </tr>))}

                </tbody>
            </table>

        </div>
    )
}