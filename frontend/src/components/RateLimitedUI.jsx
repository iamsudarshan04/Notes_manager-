import { AlertTriangleIcon, ClockIcon } from "lucide-react";

const RateLimitedUI = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl shadow-lg p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="p-3 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl">
              <AlertTriangleIcon className="h-6 w-6 text-amber-600" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="text-lg font-bold text-amber-800">Rate Limited!</h3>
              <div className="px-2 py-1 bg-amber-200 text-amber-800 text-xs font-semibold rounded-full">
                429
              </div>
            </div>
            <p className="text-amber-700 mb-3">
              Too many requests. Please take a break and try again later.
            </p>
            <div className="flex items-center space-x-2 text-sm text-amber-600">
              <ClockIcon className="h-4 w-4" />
              <span>This is a temporary protection measure to ensure fair usage for all users.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateLimitedUI;