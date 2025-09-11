import Link from "next/link";

export function StatsSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {/* Profile Completion Card */}
      <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-[2.75rem] p-6 text-white">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold font-geist">Complete profile</h3>
              <p className="text-base opacity-90 font-geist">
                Attract attention from clients.
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="text-sm font-medium font-geist">20%</div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div className="bg-pink-800 h-2.5 rounded-full" style={{ width: "20%" }}></div>
              </div>
            </div>
          </div>
          
          <Link
            href="/complete-profile"
            className="w-full bg-black text-white py-2.5 px-4 rounded-3xl text-sm font-medium font-geist hover:bg-gray-900 transition-colors flex items-center justify-center"
          >
            Complete Profile
          </Link>
        </div>
      </div>
      
      {/* Applications Submitted */}
      <div className="bg-white border border-gray-300 rounded-[2.75rem] p-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-black font-geist">
              Applications Submitted
            </h3>
            <div className="text-[3.5rem] font-bold text-black font-geist leading-none">
              104
            </div>
          </div>
        </div>
      </div>
      
      {/* Interviews Scheduled */}
      <div className="bg-white border border-gray-300 rounded-[2.75rem] p-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-black font-geist">
              Interviews Scheduled
            </h3>
            <div className="text-[3.5rem] font-bold text-black font-geist leading-none">
              023
            </div>
          </div>
        </div>
      </div>
      
      {/* Profile Views */}
      <div className="bg-white border border-gray-300 rounded-[2.75rem] p-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-black font-geist">
              Profile Views
            </h3>
            <div className="text-[3.5rem] font-bold text-black font-geist leading-none">
              2,432
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}