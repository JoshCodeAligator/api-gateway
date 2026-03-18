"use client";

import { useState } from "react";
import { createApiKey } from "@/lib/api";

export default function ApiKeyGenerator() {
  const [owner, setOwner] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleCreate() {
    if (!owner) return;

    setLoading(true);
    try {
      const data = await createApiKey(owner);
      setApiKey(data.api_key);
    } catch (err) {
      console.error(err);
      alert("Failed to create key");
    }
    setLoading(false);
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow w-full max-w-md">
      <h2 className="text-lg font-semibold mb-4">Generate API Key</h2>

      <input
        className="border rounded p-2 w-full mb-3"
        placeholder="Owner name"
        value={owner}
        onChange={(e) => setOwner(e.target.value)}
      />

      <button
        onClick={handleCreate}
        className="bg-blue-600 text-white w-full py-2 rounded"
      >
        {loading ? "Creating..." : "Create Key"}
      </button>

      {apiKey && (
        <div className="mt-4 bg-gray-100 p-3 rounded">
          <p className="text-sm mb-1">API Key:</p>
          <code className="text-blue-700 break-all">{apiKey}</code>
        </div>
      )}
    </div>
  );
}