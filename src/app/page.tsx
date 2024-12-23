import Image from "next/image";
import TodoTable from "./components/TodoTable";

export default function Home() {
  return (
    <main className="container mx-auto">
      <TodoTable />
    </main>
  );
}
