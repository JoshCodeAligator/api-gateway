"use client";

import { useState } from "react";
import { createApiKey } from "../lib/api";

export default function Home() {
  const [owner, setOwner] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    try {
      setLoading(true);
      const data = await createApiKey(owner);
      setApiKey(data.api_key);
    } catch {
      alert("Failed to create API key");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className="card">
        <h1 className="text-2xl font-bold mb-4">Generate API Key</h1>

        <input
          className="input mb-4"
          placeholder="Enter owner name"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
        />

        <button className="btn-primary w-full" onClick={handleCreate}>
          {loading ? "Creating..." : "Create Key"}
        </button>

        {apiKey && (
          <div className="mt-4 p-3 bg-gray-100 rounded-lg text-sm break-all">
            <p className="font-semibold">Your API Key:</p>
            {apiKey}
          </div>
        )}
      </div>
    </div>
  );
}