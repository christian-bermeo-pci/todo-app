import { db } from "~/server/db";
import { TodosList } from "./components/todoList";

export default async function HomePage() {
  // Fetch the initial todos from the database
  const todos = await db.todos.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <main className="mx-auto mt-24 max-w-lg">
      <h1 className="mb-4 text-2xl font-bold">Todo List</h1>
      <TodosList initialTodos={todos} />
    </main>
  );
}
