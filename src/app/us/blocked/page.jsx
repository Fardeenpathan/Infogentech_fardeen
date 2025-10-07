export default function BlockedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
      <div className="text-center text-white p-8 max-w-md">
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-4 bg-red-600 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold mb-4 text-red-400">Access Restricted</h1>
        <p className="text-lg mb-6 text-gray-300">
          This website is only available in specific regions:
        </p>
        
        <div className="mb-6 space-y-2">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-2xl">🇮🇳</span>
            <span>India</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-2xl">🇨🇦</span>
            <span>Canada</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-2xl">🇿🇦</span>
            <span>South Africa</span>
          </div>
        </div>
        
        <p className="text-gray-400 text-sm">
          If you believe this is an error, please contact our support team.
        </p>
      </div>
    </div>
  );
}