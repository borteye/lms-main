interface FetchWrapperOptions<TBody> {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  body?: TBody;
  headers?: HeadersInit;
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
}

type FetchWrapperError = {
  error: unknown;
};

export async function fetchWrapper<T, TBody = unknown>(
  endpoint: string,
  options: FetchWrapperOptions<TBody> = {}
): Promise<T | FetchWrapperError> {
  const { method = "GET", body, headers = {}, cache, next } = options;

  const config: RequestInit = {
    method,
    headers: {
      ...headers,
      ...(body &&
        !(body instanceof FormData) && {
          "Content-Type": "application/json",
        }),
    },
    body: body instanceof FormData ? body : body ? JSON.stringify(body) : null,
    cache,
    next,
  };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}`,
      config
    );

    if (!response.ok) {
      const errorData = await response.json();
      return { error: errorData };
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Something went wrong",
    };
  }
}
