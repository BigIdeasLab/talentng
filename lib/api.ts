import { getCookie } from "@/lib/utils";
import { Opportunity } from "./types/opportunity";
import { Application } from "./types/application";
import { Mentor } from "./types/mentor";
import { Notification } from "./types/notification";
import { LearningResource } from "./types/learning";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_TALENTNG_API_URL
    : "/api/v1";

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

  const response = await fetch(`${baseUrl}${endpoint}`, {
    ...config,
    cache: "no-store",
  });

  const responseText = await response.text();

  if (!response.ok) {
    let errorMessage = response.statusText;
    try {
      const parsed = JSON.parse(responseText);
      errorMessage =
        typeof parsed === "string" ? parsed : parsed.message || errorMessage;
    } catch {
      errorMessage = responseText || errorMessage;
    }
    throw new Error(
      errorMessage || "An error occurred during the API request.",
    );
  }

  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    try {
      return JSON.parse(responseText) as T;
    } catch {
      // Fallback if server mislabeled content type
      return responseText as unknown as T;
    }
  }
  return responseText as unknown as T;
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

export const applyToOpportunity = async (
  application: Application,
): Promise<any> => {
  return apiClient<any>("/applications", {
    method: "POST",
    body: application,
  });
};

export const getApplications = async (): Promise<Application[]> => {
  return apiClient<Application[]>("/applications");
};

export const getMentors = async (query?: string): Promise<Mentor[]> => {
  const endpoint = query ? `/mentor?q=${query}` : "/mentor";
  return apiClient<Mentor[]>(endpoint);
};

export const getMentorById = async (id: string): Promise<Mentor> => {
  return apiClient<Mentor>(`/mentor/${id}`);
};

export const getMentorAvailability = async (
  mentorId: string,
): Promise<{ startTime: string; endTime: string }[]> => {
  return apiClient<{ startTime: string; endTime: string }[]>(
    `/mentor/${mentorId}/availability`,
  );
};

export const bookSession = async (
  mentorId: string,
  startTime: string,
  topic?: string,
  note?: string,
): Promise<any> => {
  return apiClient<any>(`/mentor/booking`, {
    method: "POST",
    body: { mentorId, startTime, topic, note },
  });
};

export const getNotifications = async (
  userId: string,
  read?: boolean,
  type?: string,
): Promise<Notification[]> => {
  const query = new URLSearchParams({ userId });
  if (read !== undefined) {
    query.append("read", String(read));
  }
  if (type) {
    query.append("type", type);
  }
  const endpoint = `/notifications?${query.toString()}`;
  return apiClient<Notification[]>(endpoint);
};

export const markNotificationAsRead = async (
  notificationId: string,
): Promise<Notification> => {
  const endpoint = `/notifications/${notificationId}`;
  return apiClient<Notification>(endpoint, {
    method: "PATCH",
    body: { isRead: true },
  });
};

interface GetLearningResourcesParams {
  title?: string;
  category?: string;
  provider?: string;
  tags?: string;
}

export const getLearningResources = async (
  params?: GetLearningResourcesParams,
): Promise<LearningResource[]> => {
  const query = new URLSearchParams();
  if (params) {
    for (const key in params) {
      const value = params[key as keyof GetLearningResourcesParams];
      if (value !== undefined && value !== null) {
        query.append(key, String(value));
      }
    }
  }
  const queryString = query.toString();
  const endpoint = `/learning-resources${queryString ? `?${queryString}` : ""}`;
  return apiClient<LearningResource[]>(endpoint);
};
