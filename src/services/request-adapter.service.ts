/* eslint-disable @typescript-eslint/no-explicit-any */

import axios, { AxiosInstance } from "axios";
import { RequestAdapterServiceInterface } from "../interfaces/request-adapter.interface";

export class RequestAdapterService implements RequestAdapterServiceInterface {
	public adapter: AxiosInstance;

	constructor(baseURL = "https://jsonplaceholder.typicode.com") {
		this.adapter = axios.create({
			baseURL,
		});
	}

	async get<T>(url: string, options?: any): Promise<T> {
		try {
			const response = await this.adapter.get(url, options);

			return response.data as Promise<T>;
		} catch (error: any) {
			throw new Error(error);
		}
	}

	async post<T>(url: string, options?: any): Promise<T> {
		try {
			const response = await this.adapter.post(url, options);

			return response.data as Promise<T>;
		} catch (error: any) {
			throw new Error(error);
		}
	}

	async put<T>(url: string, options?: any): Promise<T> {
		try {
			const response = await this.adapter.put(url, options);

			return response.data as Promise<T>;
		} catch (error: any) {
			throw new Error(error);
		}
	}

	async delete<T>(url: string, options?: any): Promise<T> {
		try {
			const response = await this.adapter.delete(url, options);

			return response.data as Promise<T>;
		} catch (error: any) {
			throw new Error(error);
		}
	}
}
