"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Settings as SettingsIcon,
  User,
  Bell,
  Shield,
  HelpCircle,
} from "lucide-react";
import AccountSettings from "@/components/settings/AccountSettings";
import ProfilePreferences from "@/components/settings/ProfilePreferences";
import NotificationSettings from "@/components/settings/NotificationSettings";
import PrivacySecurity from "@/components/settings/PrivacySecurity";
import HelpSupport from "@/components/settings/HelpSupport";

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
  );
}