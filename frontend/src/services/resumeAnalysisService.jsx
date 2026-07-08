const API_URL = "http://127.0.0.1:8000";

export async function analyzeResume(file, jobDescription) {
  const formData = new FormData();

  formData.append("resume", file);
  formData.append("job_description", jobDescription);

  const response = await fetch(`${API_URL}/analyze`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to analyze resume.");
  }

  return await response.json();
}