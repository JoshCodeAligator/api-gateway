"use client";

import { useState } from "react";
import { callProtected } from "../../lib/api";

export default function Dashboard() {
  const [apiKey, setApiKey] = useState("");
  const [response, setResponse] = useState("");

  const handleCall = async () => {
    try {
      const data = await callProtected(apiKey);
      setResponse(JSON.stringify(data, null, 2));
    } catch {
      setResponse("Unauthorized or error");
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className="card">
        <h1 className="text-xl font-bold mb-4">Test Protected API</h1>

        <input
          className="input mb-4"
          placeholder="Enter API key"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
        />

        <button className="btn-primary w-full" onClick={handleCall}>
          Call API
        </button>

        {response && (
          <pre className="mt-4 bg-gray-100 p-3 rounded text-sm">
            {response}
          </pre>
        )}
      </div>
    </div>
  );
}