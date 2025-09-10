import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import {
  Settings as SettingsIcon,
  User,
  Bell,
  Shield,
  HelpCircle,
  Edit,
} from "lucide-react";

type SettingsTab =
  | "account"
  | "profile"
  | "notifications"
  | "security"
  | "help";

export default function Settings() {
  const [activeTab, setActiveTab] = useState<SettingsTab>("account");

  const navigationTabs = [
    {
      id: "account" as const,
      label: "Account Settings",
      icon: <SettingsIcon className="w-4.5 h-4.5" />,
    },
    {
      id: "profile" as const,
      label: "Profile & Preferences",
      icon: <User className="w-4.5 h-4.5" />,
    },
    {
      id: "notifications" as const,
      label: "Notifications",
      icon: <Bell className="w-4.5 h-4.5" />,
    },
    {
      id: "security" as const,
      label: "Privacy & Security",
      icon: <Shield className="w-4.5 h-4.5" />,
    },
    {
      id: "help" as const,
      label: "Help & Support",
      icon: <HelpCircle className="w-4.5 h-4.5" />,
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader />

        <div className="flex-1 p-8 max-w-7xl mx-auto w-full">
          {/* Settings Navigation */}
          <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-3xl border border-gray-100 mb-8">
            {navigationTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-1.5 px-2 py-2 rounded-xl text-sm font-medium transition-colors",
                  activeTab === tab.id
                    ? "bg-white text-black shadow-sm"
                    : "text-gray-600 hover:text-black",
                )}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Settings Content */}
          <div className="bg-white rounded-3xl border border-gray-100 p-8">
            {activeTab === "account" && <AccountSettings />}
            {activeTab === "profile" && <ProfilePreferences />}
            {activeTab === "notifications" && <NotificationSettings />}
            {activeTab === "security" && <PrivacySecurity />}
            {activeTab === "help" && <HelpSupport />}
          </div>
        </div>
      </div>
    </div>
  );
}

function AccountSettings() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-medium text-black mb-2">Basic Info</h2>
          <p className="text-gray-500">Setup your profile for this workspace</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="rounded-3xl border-gray-200">
            Save Changes
          </Button>
          <Button className="rounded-3xl bg-black text-white hover:bg-gray-800">
            <Edit className="w-4 h-4 mr-2" />
            Edit
          </Button>
        </div>
      </div>

      {/* Form Fields */}
      <div className="max-w-lg space-y-6">
        <div>
          <Input
            placeholder="Full Name"
            className="h-12 rounded-3xl border-gray-300 text-gray-600"
          />
        </div>
        <div>
          <Input
            placeholder="Email"
            type="email"
            className="h-12 rounded-3xl border-gray-300 text-gray-600"
          />
        </div>
        <div>
          <Input
            placeholder="Phone Number"
            type="tel"
            className="h-12 rounded-3xl border-gray-300 text-gray-600"
          />
        </div>
        <div>
          <Input
            placeholder="Password"
            type="password"
            className="h-12 rounded-3xl border-gray-300 text-gray-600"
          />
        </div>
      </div>

      {/* Delete Account */}
      <div className="pt-6 space-y-6">
        <Button
          variant="outline"
          className="text-red-500 border-gray-100 rounded-2xl"
        >
          Delete account
        </Button>

        <Button className="w-full max-w-lg rounded-3xl bg-black text-white hover:bg-gray-800">
          Save Changes
        </Button>
      </div>
    </div>
  );
}

function ProfilePreferences() {
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

function NotificationSettings() {
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [inAppNotifications, setInAppNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(false);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-medium text-black mb-2">Notifications</h2>
        <p className="text-gray-500">Setup your profile for this workspace</p>
      </div>

      {/* Notification Options */}
      <div className="max-w-lg space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-xl font-medium text-black">
            Email Notifications
          </span>
          <Switch
            checked={emailNotifications}
            onCheckedChange={setEmailNotifications}
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-medium text-black">
            In-App Notifications
          </span>
          <Switch
            checked={inAppNotifications}
            onCheckedChange={setInAppNotifications}
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-medium text-black">
            Push Notifications
          </span>
          <Switch
            checked={pushNotifications}
            onCheckedChange={setPushNotifications}
          />
        </div>
      </div>
    </div>
  );
}

function PrivacySecurity() {
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  const loginActivity = [
    {
      signedIn: "9 minutes ago",
      platform: "Web",
      ipAddress: "178.328.10.35",
      action: "Sign out",
    },
    {
      signedIn: "2 hours ago",
      platform: "Mobile",
      ipAddress: "185.44.77.69",
      action: "Sign out",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-medium text-black mb-2">
          Privacy & Security
        </h2>
        <p className="text-gray-500">Setup your profile for this workspace</p>
      </div>

      {/* Two-Factor Authentication */}
      <div className="max-w-lg">
        <div className="flex items-center justify-between">
          <span className="text-xl font-medium text-black">
            Two-Factor Authentication
          </span>
          <Switch checked={twoFactorAuth} onCheckedChange={setTwoFactorAuth} />
        </div>
      </div>

      {/* Login Activity */}
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-medium text-black mb-2">
            Login Activity
          </h3>
          <p className="text-gray-500">
            These sessions are currently signed in to your account
          </p>
        </div>

        <div className="rounded-3xl border border-gray-200 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-white border-gray-200">
                <TableHead className="text-gray-600 font-medium">
                  Signed In
                </TableHead>
                <TableHead className="text-gray-600 font-medium">
                  Platform
                </TableHead>
                <TableHead className="text-gray-600 font-medium">
                  IP Address
                </TableHead>
                <TableHead className="text-gray-600 font-medium">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loginActivity.map((session, index) => (
                <TableRow
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <TableCell className="text-gray-600">
                    {session.signedIn}
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {session.platform}
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {session.ipAddress}
                  </TableCell>
                  <TableCell>
                    <button className="text-green-600 underline hover:no-underline">
                      {session.action}
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

function HelpSupport() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-medium text-black mb-2">Help & Support</h2>
        <p className="text-gray-500">
          Get help with your account and platform usage
        </p>
      </div>

      <div className="space-y-4">
        <div className="p-6 border border-gray-200 rounded-2xl">
          <h3 className="text-lg font-medium text-black mb-2">
            Contact Support
          </h3>
          <p className="text-gray-600 mb-4">
            Need help? Our support team is here to assist you with any questions
            or issues.
          </p>
          <Button className="rounded-xl bg-black text-white hover:bg-gray-800">
            Contact Support
          </Button>
        </div>

        <div className="p-6 border border-gray-200 rounded-2xl">
          <h3 className="text-lg font-medium text-black mb-2">Documentation</h3>
          <p className="text-gray-600 mb-4">
            Browse our comprehensive documentation to learn how to make the most
            of the platform.
          </p>
          <Button variant="outline" className="rounded-xl border-gray-200">
            View Documentation
          </Button>
        </div>
      </div>
    </div>
  );
}
