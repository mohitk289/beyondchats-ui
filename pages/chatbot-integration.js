import { useState } from "react";

export default function ChatbotIntegration() {
  const [success, setSuccess] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-darkText mb-4">Chatbot Integration</h2>
        <button className="w-full bg-primary text-white py-2 rounded mb-3">
          Test Chatbot
        </button>
        <button className="w-full bg-primary text-white py-2 rounded mb-3">
          Integrate on Website
        </button>
        <button className="w-full bg-primary text-white py-2 rounded" onClick={() => setSuccess(true)}>
          Test Integration
        </button>

        {success && (
          <div className="mt-4 text-center">
            <h3 className="text-lg font-bold text-darkText">Integration Successful 🎉</h3>
            <button className="w-full mt-3 bg-gray-800 text-white py-2 rounded">Explore Admin Panel</button>
          </div>
        )}
      </div>
    </div>
  );
}
