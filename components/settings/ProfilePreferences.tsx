import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProfilePreferences() {
  const [profileVisibility, setProfileVisibility] = useState(false);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-medium text-black mb-2">
            Profile Preferences
          </h2>
          <p className="text-gray-500">Setup your profile for this workspace</p>
        </div>
        <Button variant="outline" className="rounded-3xl border-gray-200">
          Save Changes
        </Button>
      </div>

      {/* Profile Visibility */}
      <div className="max-w-lg space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-xl font-medium text-black">
            Profile Visibility
          </span>
          <Switch
            checked={profileVisibility}
            onCheckedChange={setProfileVisibility}
          />
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          <Input
            placeholder="Location (for job suggestions)"
            className="h-12 rounded-3xl border-gray-300 text-gray-600"
          />

          <Select>
            <SelectTrigger className="h-12 rounded-3xl border-gray-300 text-gray-600">
              <SelectValue placeholder="Preferred Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="frontend">Frontend Developer</SelectItem>
              <SelectItem value="backend">Backend Developer</SelectItem>
              <SelectItem value="fullstack">Full Stack Developer</SelectItem>
              <SelectItem value="mobile">Mobile Developer</SelectItem>
              <SelectItem value="devops">DevOps Engineer</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="h-12 rounded-3xl border-gray-300 text-gray-600">
              <SelectValue placeholder="Availability" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fulltime">Full-time</SelectItem>
              <SelectItem value="parttime">Part-time</SelectItem>
              <SelectItem value="contract">Contract</SelectItem>
              <SelectItem value="freelance">Freelance</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="w-full rounded-3xl bg-black text-white hover:bg-gray-800">
          Save Changes
        </Button>
      </div>
    </div>
  );
}