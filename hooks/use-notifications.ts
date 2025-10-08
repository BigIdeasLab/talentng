"use client";

import { useState, useEffect } from "react";
import { getNotifications } from "@/lib/api";
import { Notification } from "@/lib/types/notification";
import { useAuth } from "@/hooks/use-auth";

export function useNotifications() {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const fetchNotifications = async () => {
    if (user) {
      setLoading(true);
      setError(null);
      try {
        const fetchedNotifications = await getNotifications(user.id);
        setNotifications(fetchedNotifications);
      } catch (err) {
        setError("Failed to fetch notifications.");
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, [user]);

  const unreadCount = notifications.filter((n) => !n.readAt).length;

  return {
    notifications,
    loading,
    error,
    unreadCount,
    fetchNotifications,
    isNotificationOpen,
    setIsNotificationOpen,
  };
}