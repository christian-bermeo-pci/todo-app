/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import type { Todos } from "@prisma/client";
import { useState } from "react";

export function TodosList({ initialTodos }: { initialTodos: Todos[] }) {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState("");

  async function addTodo() {
    const res = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ title: newTodo }),
    });
    const data = await res.json();
    setTodos([data, ...todos]);
    setNewTodo("");
  }

  async function toggleTodo(id: number, completed: boolean) {
    await fetch("/api/todos", {
      method: "PUT",
      body: JSON.stringify({ id, completed: !completed }),
    });
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !completed } : t)),
    );
  }

  async function deleteTodo(id: number) {
    await fetch("/api/todos", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    setTodos(todos.filter((t) => t.id !== id));
  }

  return (
    <div>
      <div className="mb-4 flex">
        <input
          className="flex-grow rounded-md border p-2"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="New todo..."
        />
        <button
          className="mx-2 rounded-md bg-emerald-700 px-4 text-white"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <ul className="mt-10">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mx-3 my-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id, todo.completed)}
                className="mr-2 size-4 cursor-pointer rounded-md"
              />
              <span
                className={`${todo.completed ? "text-gray-500 line-through" : ""}`}
              >
                {todo.title}
              </span>
            </div>
            <button
              className="mx-2 rounded-md bg-red-500 px-4 py-1 text-white"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
