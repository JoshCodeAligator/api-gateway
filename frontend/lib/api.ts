const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

export async function createApiKey(owner: string) {
  const res = await fetch(`${BASE_URL}/apikey`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ owner }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text);
  }

  return res.json() as Promise<{ api_key: string }>;
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