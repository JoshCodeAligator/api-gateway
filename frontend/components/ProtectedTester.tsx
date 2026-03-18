"use client";

import { useState } from "react";
import { getProtectedData } from "@/lib/api";

export default function ProtectedTester() {
  const [apiKey, setApiKey] = useState("");
  const [result, setResult] = useState("");

  async function handleFetch() {
    try {
      const data = await getProtectedData(apiKey);
      setResult(data.message);
    } catch {
      setResult("Unauthorized / Rate limited");
    }
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow w-full max-w-md">
      <h2 className="text-lg font-semibold mb-4">Test Protected API</h2>

      <input
        className="border rounded p-2 w-full mb-3"
        placeholder="Paste API key"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
      />

      <button
        onClick={handleFetch}
        className="bg-green-600 text-white w-full py-2 rounded"
      >
        Call API
      </button>

      {result && <p className="mt-4">{result}</p>}
    </div>
  );
}