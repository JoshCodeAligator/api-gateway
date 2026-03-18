const BASE_URL = "http://localhost:8080";

export async function createApiKey(owner: string) {
  const res = await fetch(`${BASE_URL}/apikey`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ owner }),
  });

  if (!res.ok) throw new Error("Failed to create key");

  return res.json();
}

export async function callProtected(apiKey: string) {
  const res = await fetch(`${BASE_URL}/api/data`, {
    headers: {
      "x-api-key": apiKey,
    },
  });

  if (!res.ok) throw new Error("Unauthorized");

  return res.json();
}
export async function getProtectedData(apiKey: string) {
  const res = await fetch(`${BASE_URL}/api/data`, {
    method: "GET",
    headers: {
      "x-api-key": apiKey,
    },
  });

  if (!res.ok) {
    throw new Error("Unauthorized or rate limited");
  }

  return res.json() as Promise<{ message: string }>;
}