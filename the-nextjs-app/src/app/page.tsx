import Counter from "@/components/Counter";
import Message from "@/components/Message";


export default function Home() {
  return (
    <div>
      <h2>React Next.js application </h2>
      <Message text="Hello Nextjs" color="blue"/>
      <Counter inputCount={5} />
    </div>
  );
}
