const BASE_URL = import.meta.env.VITE_BASE_URL;

const handleResponse = async (response) => {
  let data;

  try {
    data = await response.json();
  } catch {
    throw new Error("Invalid server response");
  }

  if (!response.ok) {
    throw new Error(data?.message || data?.error || "Unexpected server error");
  }

  return data;
};

export const getCandidateByEmail = async (email) => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/candidate/get-by-email?email=${email}`
    );
    return await handleResponse(response);
  } catch (error) {
    throw new Error(error.message || "Network error");
  }
};

export const getJobs = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/jobs/get-list`);
    return await handleResponse(response);
  } catch (error) {
    throw new Error(error.message || "Network error");
  }
};

export const applyToJob = async (body) => {
  try {
    const response = await fetch(`${BASE_URL}/api/candidate/apply-to-job`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    return await handleResponse(response);
  } catch (error) {
    throw new Error(error.message || "Network error");
  }
};
