import { useGetTodo, useGetTodos } from "../hooks/todo.hooks";

export default function ThirdPartyIntegration() {
	const todos = useGetTodos();
	const { todo, getAsyncTodo, viewState } = useGetTodo();

	return (
		<div>
			<h1>My Todos App</h1>

			{viewState === "loading" ? (
				<div>Loading...</div>
			) : (
				<div>Selected Todo: {JSON.stringify(todo, null, 2)}</div>
			)}

			<ul
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "1.5rem",
				}}>
				{todos.map((todo) => {
					console.log(todo);
					return (
						<li
							style={{
								cursor: "pointer",
							}}
							onClick={() => getAsyncTodo(todo.id.toString())}
							key={todo.id}>
							{todo.title}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
