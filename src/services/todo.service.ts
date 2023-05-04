import { TodoModel } from "../models/todo.model";
import { RequestAdapterService } from "./request-adapter.service";

const requestAdapterService = new RequestAdapterService();

export const getTodos = async () => {
	return await requestAdapterService.get<TodoModel[]>("/todos");
};

export const getTodo = async (id: string) => {
	return await requestAdapterService.get<TodoModel>(`/todos/${id}`);
};
