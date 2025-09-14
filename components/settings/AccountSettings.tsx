import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Edit } from "lucide-react";

export default function AccountSettings() {
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