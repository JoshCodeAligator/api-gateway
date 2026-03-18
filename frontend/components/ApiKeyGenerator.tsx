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
      localStorage.setItem("apiKey", data.api_key); // 🔥 nice UX
    } catch {
      alert("Failed to create key");
    }
    setLoading(false);
  }

  function copyKey() {
    navigator.clipboard.writeText(apiKey);
  }

  return (
    <div className="card max-w-md w-full">
      <h2 className="text-xl font-semibold mb-2">Generate API Key</h2>
      <p className="text-sm text-gray-500 mb-6">
        Create a key to access protected endpoints.
      </p>

      <input
        className="input mb-4"
        placeholder="Owner name"
        value={owner}
        onChange={(e) => setOwner(e.target.value)}
      />

      <button
        onClick={handleCreate}
        className="button button-primary"
      >
        {loading ? "Creating..." : "Create Key"}
      </button>

      {apiKey && (
        <div className="mt-6 bg-gray-100 p-4 rounded-lg">
          <p className="text-xs text-gray-500 mb-1">Your API Key</p>

          <div className="flex items-center justify-between gap-2">
            <code className="text-blue-700 break-all text-sm">
              {apiKey}
            </code>

            <button
              onClick={copyKey}
              className="text-sm text-blue-600 hover:underline"
            >
              Copy
            </button>
          </div>
        </div>
      )}
    </div>
  );
}