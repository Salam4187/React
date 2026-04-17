'use server'
export async function SayHello(message: string) {
    console.log("SayHello component is rendered " + message);
    return (
        <div>
            <h2>Hello {message}</h2>
        </div>
    );
}

