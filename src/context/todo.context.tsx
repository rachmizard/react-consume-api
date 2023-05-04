import { PropsWithChildren, createContext, useContext, useState } from "react";
import { TodoModel } from "../models/todo.model";

interface TodoContextProps {
	todos: TodoModel[];
	setTodos: (todos: TodoModel[]) => void;
}
const TodoContext = createContext<TodoContextProps | undefined>(undefined);

export const TodoContextProvider = TodoContext.Provider;

export const TodoProvider = ({ children }: PropsWithChildren) => {
	const [todos, setTodos] = useState<TodoModel[]>([]);

	return (
		<TodoContextProvider
			value={{
				todos,
				setTodos,
			}}>
			{children}
		</TodoContextProvider>
	);
};

export const useTodoContext = () => {
	const context = useContext(TodoContext);

	if (!context) {
		throw new Error("useTodoContext must be used within a TodoProvider");
	}

	return context;
};
