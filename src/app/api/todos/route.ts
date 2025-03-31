/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextResponse } from "next/server";
import { db } from "~/server/db";

export async function GET() {
  const todos = await db.todos.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(todos);
}

export async function POST(req: Request) {
  const { title } = await req.json();
  const newTodo = await db.todos.create({
    data: { title },
  });
  return Response.json(newTodo);
}

export async function PUT(req: Request) {
  const { id, completed } = await req.json();
  const updatedTodo = await db.todos.update({
    where: { id },
    data: { completed },
  });
  return Response.json(updatedTodo);
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  await db.todos.delete({ where: { id } });
  return Response.json({ success: true });
}
