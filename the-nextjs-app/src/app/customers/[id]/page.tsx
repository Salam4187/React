import Link from "next/link";


type CustomerDetailPageProps = {
    params: Promise<{ id: string }>
}

type Customer = {
    id: number;
    name: string;
    location: string;
}

async function CustomerDetailPage(props: CustomerDetailPageProps) {
    
    const id= await props.params.then(p=>p.id);

    const url = "http://localhost:9000/customers/" + id;
    const response = await fetch(url, { method: "GET", cache: "no-store" });
    const customer: Customer = await response.json();

    return (
        <div>
            <h2>Customer Detail {id}</h2>
            <p><strong>Customer ID:</strong> {customer.id}</p>
            <p><strong>Name:</strong> {customer.name}</p>
            <p><strong>Location:</strong> {customer.location}</p>
            <br/>
            <Link href="/customers">Back to Customers List</Link>
         
        </div>
    )
}

export default CustomerDetailPage;
