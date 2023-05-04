import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { TodoProvider } from "./context/todo.context.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<TodoProvider>
			<App />
		</TodoProvider>
	</React.StrictMode>
);
