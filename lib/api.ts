import { getCookie } from "@/lib/utils";
import { Opportunity } from "./types/opportunity";

const baseUrl = "/api/v1";

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
    if (body instanceof FormData) {
      // For FormData, let the browser set the Content-Type header
      // so it can include the boundary.
      delete (config.headers as Record<string, string>)["Content-Type"];
      config.body = body;
    } else {
      // For other body types, stringify as JSON
      config.body = JSON.stringify(body);
    }
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

interface GetOpportunitiesParams {
  q?: string;
  type?: string;
  title?: string;
  location?: string;
  tags?: string;
  status?: string;
  orgId?: string;
  postedById?: string;
  isFeatured?: boolean;
}

export const getOpportunities = async (
  params?: GetOpportunitiesParams,
): Promise<Opportunity[]> => {
  const query = new URLSearchParams();
  if (params) {
    for (const key in params) {
      const value = params[key as keyof GetOpportunitiesParams];
      if (value !== undefined && value !== null) {
        query.append(key, String(value));
      }
    }
  }
  const queryString = query.toString();
  const endpoint = `/opportunities${queryString ? `?${queryString}` : ""}`;
  return apiClient<Opportunity[]>(endpoint);
};

export const getOpportunityById = async (id: string): Promise<Opportunity> => {
  const endpoint = `/opportunities/${id}`;
  return apiClient<Opportunity>(endpoint);
};

export const getDashboardStats = async () => {
  return apiClient<any>("/talent/dashboard");
};
