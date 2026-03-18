"use client";

import { useState, useEffect } from "react";
import { getProtectedData } from "@/lib/api";

export default function ProtectedTester() {
  const [apiKey, setApiKey] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedKey = localStorage.getItem("apiKey");
    if (savedKey) setApiKey(savedKey);
  }, []);

  async function handleFetch() {
    setLoading(true);
    setResult("");

    try {
      const data = await getProtectedData(apiKey);
      setResult(`✅ ${data.message}`);
    } catch {
      setResult("❌ Unauthorized or rate limited");
    }

    setLoading(false);
  }

  return (
    <div className="card max-w-md w-full">
      <h2 className="text-xl font-semibold mb-2">Test API</h2>
      <p className="text-sm text-gray-500 mb-6">
        Send a request using your API key.
      </p>

      <input
        className="input mb-4"
        placeholder="Enter API key"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
      />

      <button
        onClick={handleFetch}
        className="button button-success"
      >
        {loading ? "Calling..." : "Call API"}
      </button>

      {result && (
        <div className="mt-6 p-4 rounded-lg bg-gray-100 text-sm">
          {result}
        </div>
      )}
    </div>
  );
}