import { useState } from "react";
import { Switch } from "@/components/ui/switch";

export default function NotificationSettings() {
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