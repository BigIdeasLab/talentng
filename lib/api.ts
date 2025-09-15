import { getCookie } from "@/lib/utils";

const baseUrl = process.env.NEXT_PUBLIC_TALENTNG_API_URL;

if (!baseUrl) {
  throw new Error("Missing NEXT_PUBLIC_TALENTNG_API_URL environment variable");
}

type ApiOptions = {
  headers?: Record<string, string>;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  body?: any;
};

const apiClient = async <T>(
  endpoint: string,
  options: ApiOptions = {},
): Promise<T> => {
  const { headers = {}, method = "GET", body } = options;
  const token = getCookie("accessToken");

  const config: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  if (token) {
    (config.headers as Record<string, string>)["Authorization"] =
      `Bearer ${token}`;
  }

  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(`${baseUrl}${endpoint}`, config);

  if (!response.ok) {
    const errorData = await response
      .json()
      .catch(() => ({ message: response.statusText }));
    throw new Error(
      errorData.message || "An error occurred during the API request.",
    );
  }

  // Handle cases where the response body might be empty
  const responseText = await response.text();
  try {
    return JSON.parse(responseText) as T;
  } catch (e) {
    return responseText as unknown as T;
  }
};

export default apiClient;
