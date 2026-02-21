import { useEffect, useState } from "react";
import { getJobs } from "../services/api";
import JobItem from "./JobItem";

const JobList = ({ candidate }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchJobs = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await getJobs();
      setJobs(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center">
        <div className="animate-pulse text-slate-500">Loading positions...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-rose-50 text-rose-600 p-4 rounded-xl">
        {error}
        <button
          onClick={fetchJobs}
          className="block mt-3 text-indigo-600 underline"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!jobs.length) {
    return (
      <div className="text-slate-500">
        No positions available at the moment.
      </div>
    );
  }

  return (
    <>
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} candidate={candidate} />
      ))}
    </>
  );
};

export default JobList;
