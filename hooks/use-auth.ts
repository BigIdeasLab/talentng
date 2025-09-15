import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { decodeJwt, getCookie, deleteCookie } from '@/lib/utils';
import apiClient from '@/lib/api';
import { User } from '@/lib/types/auth';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchUser = useCallback(async () => {
    setLoading(true);
    const token = getCookie('accessToken');
    if (token) {
      const decoded = decodeJwt(token);
      if (decoded) {
        try {
          const userData = await apiClient<User>('/users/me');
          setUser(userData);
        } catch (error) {
          console.error("Failed to fetch user data:", error);
          deleteCookie('accessToken');
          setUser(null);
        } finally {
          setLoading(false);
        }
      } else {
        deleteCookie('accessToken');
        setUser(null);
        setLoading(false);
      }
    } else {
      setUser(null);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const logout = () => {
    deleteCookie('accessToken');
    setUser(null);
    router.push('/login');
  };

  return { user, loading, logout, refetchUser: fetchUser };
};
