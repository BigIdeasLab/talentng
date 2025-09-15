'use client';

import React, { useState, Suspense, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

import apiClient from '@/lib/api';
import { useDebounce } from '@/hooks/use-debounce';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useAuth } from '@/hooks/use-auth';
import { profileSchema, ProfileFormValues } from '@/lib/validations/profile';

const setUsernameSchema = z.object({
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters.')
    .max(50, 'Username must not exceed 50 characters.')
    .regex(
      /^[a-z0-9_.-]+$/,
      'Username can only contain lowercase letters, numbers, underscores, hyphens, and periods.',
    )
    .refine((username) => {
      const letterCount = (username.match(/[a-z]/g) || []).length;
      return letterCount >= 3;
    }, 'Username must contain at least 3 letters.')
    .refine((username) => {
      const reservedUsernames = [
        'admin',
        'root',
        'talentng',
        'support',
        'moderator',
      ]; // Example reserved words
      return !reservedUsernames.includes(username.toLowerCase());
    }, 'This username is reserved. Please choose another.'),
});

type SetUsernameFormValues = z.infer<typeof setUsernameSchema>;

const SetUsername = ({ onNext, userId, accessToken }: { onNext: () => void, userId: string, accessToken: string }) => {
  const [usernameInput, setUsernameInput] = useState('');
  const debouncedUsername = useDebounce(usernameInput, 500);
  const [usernameStatus, setUsernameStatus] = useState<
    'idle' | 'checking' | 'available' | 'taken'
  >('idle');

  const form = useForm<SetUsernameFormValues>({
    resolver: zodResolver(setUsernameSchema),
    defaultValues: {
      username: '',
    },
  });

  useEffect(() => {
    const checkUsername = async () => {
      if (debouncedUsername.length > 0) {
        const isValid = await form.trigger('username');
        if (debouncedUsername.length >= 2 && isValid) {
          setUsernameStatus('checking');
          try {
            const isTaken = await apiClient<boolean>(
              `/users/username-taken/${debouncedUsername}`,
            );
            setUsernameStatus(isTaken ? 'taken' : 'available');
          } catch (error) {
            setUsernameStatus('idle');
            toast.error('Failed to check username availability.');
          }
        } else {
          setUsernameStatus('idle');
        }
      }
    };

    checkUsername();
  }, [debouncedUsername, form]);

  const setUsernameMutation = useMutation({
    mutationFn: (data: SetUsernameFormValues) => {
      if (!userId || !accessToken) {
        throw new Error('User ID or Access Token is missing.');
      }
      return apiClient('/users/me/set-username', {
        method: 'PATCH',
        body: { userId, username: data.username },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    },
    onSuccess: () => {
      toast.success('Username set successfully!');
      onNext();
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to set username. Please try again.');
    },
  });

  const onSubmit = (data: SetUsernameFormValues) => {
    if (usernameStatus !== 'available') {
      toast.error('Please choose an available username.');
      return;
    }
    setUsernameMutation.mutate(data);
  };

  return (
    <div className="w-full max-w-[320px] flex flex-col gap-8">
      <div className="flex flex-col items-center gap-4">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/95484ffeaace17b0e40815c0aa78c80490650deb?width=168"
          alt="Talent.ng Logo"
          className="w-[84px] h-[64px]"
        />
        <h1 className="text-black font-geist text-[32px] font-semibold leading-[120%]">
          Choose a Username
        </h1>
        <p className="text-gray-500 font-geist text-base font-medium leading-[120%] text-center">
          You're almost there! Please choose a unique username to complete
          your account setup.
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter username"
                    {...field}
                    onChange={(e) => {
                      const lowercasedValue = e.target.value.toLowerCase();
                      field.onChange(lowercasedValue);
                      setUsernameInput(lowercasedValue);
                    }}
                    className="h-12 rounded-3xl border-gray-300 text-gray-600"
                  />
                </FormControl>
                <FormMessage />
                {usernameStatus === 'checking' && (
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <Loader2 className="h-3 w-3 animate-spin" />
                    Checking...
                  </p>
                )}
                {usernameStatus === 'taken' && (
                  <p className="text-xs text-red-500">
                    Username is already taken.
                  </p>
                )}
                {usernameStatus === 'available' && (
                  <p className="text-xs text-green-500">
                    Username is available.
                  </p>
                )}
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={
              setUsernameMutation.isPending || usernameStatus !== 'available'
            }
            className="w-full rounded-3xl"
          >
            {setUsernameMutation.isPending
              ? 'Setting username...'
              : 'Set Username'}
          </Button>
        </form>
      </Form>
    </div>
  );
};

const SelectRole = ({ onNext, onRoleSelect }: { onNext: () => void, onRoleSelect: (role: 'talent' | 'mentor') => void }) => {
  const { refetchUser } = useAuth();
  const [selectedRole, setSelectedRole] = useState<'talent' | 'mentor' | null>(
    null,
  );

  const setRoleMutation = useMutation({
    mutationFn: (role: 'talent' | 'mentor') => {
      return apiClient('/users/me/role', {
        method: 'PATCH',
        body: { role },
      });
    },
    onSuccess: (data, variables) => {
      toast.success('Role set successfully!');
      refetchUser(); // Refetch user data to update the role in context
      onRoleSelect(variables);
      onNext();
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to set role. Please try again.');
    },
  });

  const handleRoleSelection = (role: 'talent' | 'mentor') => {
    setSelectedRole(role);
    setRoleMutation.mutate(role);
  };

  return (
    <div className="w-full max-w-[320px] flex flex-col gap-16">
      {/* Main Content */}
      <div className="flex flex-col items-center gap-6">
        {/* Header Section */}
        <div className="flex flex-col gap-11 w-full">
          <div className="flex flex-col items-center gap-8">
            {/* Logo and Title */}
            <div className="flex flex-col items-center gap-6 w-full max-w-[297px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/95484ffeaace17b0e40815c0aa78c80490650deb?width=168"
                alt="Talent.ng Logo"
                className="w-[84px] h-[64px]"
              />
              <div className="flex flex-col items-center gap-4 w-full">
                <h1 className="text-black font-geist text-[32px] font-semibold leading-[120%]">
                  Select Your Role
                </h1>
                <p className="text-gray-500 font-geist text-base font-medium leading-[120%] text-center w-full">
                  Please choose the role that best describes you.
                </p>
              </div>
            </div>

            {/* Role Selection Buttons */}
            <div className="flex flex-col gap-4 w-full">
              <Button
                onClick={() => handleRoleSelection('talent')}
                disabled={setRoleMutation.isPending}
                className="flex items-center justify-center gap-2.5 px-[14px] py-[14px] rounded-3xl border border-gray-300 bg-white text-gray-950 font-geist text-base font-medium hover:bg-gray-50 transition-colors w-full"
              >
                {setRoleMutation.isPending && selectedRole === 'talent' ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : null}
                I am a Talent
              </Button>
              <Button
                onClick={() => handleRoleSelection('mentor')}
                disabled={setRoleMutation.isPending}
                className="flex items-center justify-center gap-2.5 px-[14px] py-[14px] rounded-3xl border border-gray-300 bg-white text-gray-950 font-geist text-base font-medium hover:bg-gray-50 transition-colors w-full"
              >
                {setRoleMutation.isPending && selectedRole === 'mentor' ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : null}
                I am a Mentor
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Terms */}
      <div className="text-center w-full">
        <span className="text-gray-600 font-geist text-sm font-normal">
          By selecting your role, you agree to our{' '}
        </span>
        <span className="text-gray-950 font-geist text-sm font-semibold">
          Terms and Conditions.
        </span>
      </div>
    </div>
  );
};


const CreateProfile = ({ onFinish }: { onFinish: () => void }) => {
  const router = useRouter();

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullname: '',
      talent: '',
      bio: '',
    },
  });

  const mutation = useMutation({
    mutationFn: (newProfile: ProfileFormValues) => {
      return apiClient('/talent-profiles/me', {
        method: 'POST',
        body: newProfile,
      });
    },
    onSuccess: () => {
      toast.success('Profile Created', {
        description: 'Your profile has been successfully created.',
      });
      onFinish();
    },
    onError: (error) => {
      console.error('Error creating profile:', error);
      toast.error('Error', {
        description: 'Failed to create profile. Please try again.',
      });
    },
  });

  const onSubmit = (values: ProfileFormValues) => {
    console.log('Submitting form data:', values);
    mutation.mutate(values);
  };

  return (
    <div className="w-full max-w-md">
      <div className="space-y-4 mb-8">
        <h2 className="text-2xl font-medium text-black font-geist">
          Create Your Profile
        </h2>
        <p className="text-base font-medium text-gray-500 font-geist">
          Let's get your basic information set up.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-8">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Full Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="talent"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Talent</FormLabel>
                  <FormControl>
                    <Input placeholder="Talent" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Bio" {...field} rows={4} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Finish
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

const OnboardingPage = () => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<'talent' | 'mentor' | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [userId, setUserId] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const urlUserId = searchParams.get('userId');
    setUserId(urlUserId);

    const fetchToken = async () => {
      try {
        const response = await fetch('/api/auth/token');
        const data = await response.json();
        if (data.accessToken) {
          setAccessToken(data.accessToken);
        } else {
          toast.error('Authentication token not found. Please try logging in again.');
          router.push('/login');
        }
      } catch (error) {
        toast.error('Failed to retrieve authentication token.');
        router.push('/login');
      }
    };

    if (urlUserId) {
      fetchToken();
    } else {
      toast.error('Missing user information. Please try logging in again.');
      router.push('/login');
    }
  }, [searchParams, router]);


  const handleNext = () => {
    setStep(step + 1);
  };

  const handleRoleSelect = (selectedRole: 'talent' | 'mentor') => {
    setRole(selectedRole);
  };

  const handleFinish = () => {
    router.push('/dashboard');
  };

  const renderStep = () => {
    if (!userId || !accessToken) {
      return <Loader2 className="h-8 w-8 animate-spin text-gray-500" />;
    }

    switch (step) {
      case 1:
        return <SetUsername onNext={handleNext} userId={userId} accessToken={accessToken} />;
      case 2:
        return <SelectRole onNext={handleNext} onRoleSelect={handleRoleSelect} />;
      case 3:
        if (role === 'talent') {
          return <CreateProfile onFinish={handleFinish} />;
        } else if (role === 'mentor') {
          // You can create a separate mentor profile creation component
          return <div>Mentor Profile Creation</div>;
        }
        return null;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {renderStep()}
      </div>
    </div>
  );
};

const OnboardingPageWithSuspense = () => (
  <Suspense fallback={<Loader2 className="h-8 w-8 animate-spin text-gray-500" />}>
    <OnboardingPage />
  </Suspense>
);

export default OnboardingPageWithSuspense;