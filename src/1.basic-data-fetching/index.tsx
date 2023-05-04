import { useEffect, useState } from "react";
import { TodoModel } from "../models/todo.model";
import { getTodos } from "../services/todo.service";

export default function BasicDataFetching() {
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

	return (
		<div>
			<h1>My Todos App</h1>
			<ul
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "1.5rem",
				}}>
				{todos.map((todo) => {
					return <li key={todo.id}>{todo.title}</li>;
				})}
			</ul>
		</div>
	);
}
