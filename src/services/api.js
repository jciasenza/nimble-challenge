const BASE_URL = import.meta.env.VITE_BASE_URL;

const handleResponse = async (response) => {
  let data;

  try {
    data = await response.json();
  } catch (err) {
    console.error("Failed to parse JSON:", err);
    throw new Error("Invalid server response");
  }

  if (!response.ok) {
    console.error("API Error:", {
      status: response.status,
      statusText: response.statusText,
      body: data,
    });

    throw new Error(
      data?.message ||
      data?.error ||
      `Request failed with status ${response.status}`
    );
  }

  return data;
};

export const getCandidateByEmail = async (email) => {
  if (!email?.trim()) {
    throw new Error("Email is required");
  }

  try {
    const response = await fetch(
      `${BASE_URL}/api/candidate/get-by-email?email=${encodeURIComponent(email)}`
    );

    return await handleResponse(response);
  } catch (error) {
    console.error("getCandidateByEmail error:", error);
    throw new Error(error.message || "Network error");
  }
};

export const getJobs = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/jobs/get-list`);
    return await handleResponse(response);
  } catch (error) {
    console.error("getJobs error:", error);
    throw new Error(error.message || "Network error");
  }
};

export const applyToJob = async (body) => {
  if (!body?.uuid || !body?.jobId || !body?.candidateId || !body?.repoUrl) {
    throw new Error("Missing required application fields");
  }

  try {
    const response = await fetch(
      `${BASE_URL}/api/candidate/apply-to-job`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    return await handleResponse(response);
  } catch (error) {
    console.error("applyToJob error:", error);
    throw new Error(error.message || "Network error");
  }
};
