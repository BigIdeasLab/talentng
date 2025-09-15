import React from "react";
import { UseFormReturn } from "react-hook-form";
import { ProfileFormValues } from "@/lib/validations/profile";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface BasicInfoStepProps {
  form: UseFormReturn<ProfileFormValues>;
  onNext: () => void;
}

export function BasicInfoStep({ form, onNext }: BasicInfoStepProps) {
  return (
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

      <Button type="button" onClick={onNext} className="w-full">
        Next
      </Button>
    </div>
  );
}
