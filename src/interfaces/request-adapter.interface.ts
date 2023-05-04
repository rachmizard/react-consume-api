/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

export interface RequestAdapterServiceInterface {
	get<T>(url: string, options?: any): Promise<T>;
	post<T>(url: string, options?: any): Promise<T>;
	put<T>(url: string, options?: any): Promise<T>;
	delete<T>(url: string, options?: any): Promise<T>;
}
