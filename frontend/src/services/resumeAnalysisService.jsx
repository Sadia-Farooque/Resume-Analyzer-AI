const API_URL = "http://127.0.0.1:8000";

export async function testBackend() {
  const response = await fetch(`${API_URL}/hello`);

  if (!response.ok) {
    throw new Error("Failed to connect to backend");
  }

  return await response.json();
}