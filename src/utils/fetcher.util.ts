export const fetcher = async <T>(
	url: string,
	init?: RequestInit
): Promise<T> => {
	const response = await fetch(url, init);

	return response.json() as Promise<T>;
};
