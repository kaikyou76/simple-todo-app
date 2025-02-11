import TodoTable from "./components/TodoTable";
import { getTodos } from "../../lib/api";

export default async function Home() {
  const todos = await getTodos();
  return (
    <main className="container mx-auto">
      <TodoTable todos={todos}/>
    </main>
  );
}
