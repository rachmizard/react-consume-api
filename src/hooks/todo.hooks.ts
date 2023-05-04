import { useEffect, useState } from "react";

import { TodoModel } from "../models/todo.model";
import { getTodos, getTodo } from "../services/todo.service";
import { useTodoContext } from "../context/todo.context";

export const useGetTodos = () => {
	// 1. Define state
	const [todos, setTodos] = useState<TodoModel[]>([]);

	useEffect(() => {
		// 2. Fetch data
		getTodos().then((todos) => setTodos(todos));

		// 3. Re-render data
		return () => {
			// remove listener
		};
	}, []);

	return todos;
};

export const useGetTodo = () => {
	// 1. Define state
	const [todo, setTodo] = useState<TodoModel>();
	const [viewState, setViewState] = useState<
		"loading" | "error" | "success" | "idle"
	>("idle");

	const getAsyncTodo = async (id: string) => {
		setViewState("loading");
		getTodo(id)
			.then((todo) => setTodo(todo))
			.catch((err) => setViewState("error"))
			.finally(() => setViewState("success"));
	};

	return { todo, getAsyncTodo, viewState };
};

export const useGetTodosWithContext = () => {
	// 1. Define state
	const { setTodos, todos } = useTodoContext();

	useEffect(() => {
		// 2. Fetch data
		getTodos().then((todos) => setTodos(todos));

		// 3. Re-render data
		return () => {
			// remove listener
		};
	}, [setTodos]);

	return todos;
};
