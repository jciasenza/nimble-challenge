import { useState } from "react";
import { applyToJob } from "../services/api";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

const GITHUB_PREFIX = "https://github.com/";

const JobItem = ({ job, candidate }) => {
  const [repoUrl, setRepoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [applied, setApplied] = useState(false);
  const { ref, isVisible } = useRevealOnScroll();

  const isValidRepo = repoUrl.startsWith(GITHUB_PREFIX);

  const handleSubmit = async () => {
    setError("");

    if (!isValidRepo) {
      setError("Repository must start with https://github.com/");
      return;
    }

    try {
      setLoading(true);

      await applyToJob({
        uuid: candidate.uuid,
        jobId: job.id,
        candidateId: candidate.candidateId,
        repoUrl,
      });

      setApplied(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      ref={ref}
      className={`
            transition-all duration-700 ease-out transform
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16"
            }
            `}
    >
      <div className="group bg-white rounded-3xl p-8 mb-10 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <h3 className="text-2xl font-semibold text-slate-800 mb-6">
          {job.title}
        </h3>

        {applied ? (
          <div className="bg-emerald-50 text-emerald-600 px-4 py-3 rounded-xl font-medium animate-fade-in">
            Application submitted successfully ✨
          </div>
        ) : (
          <>
            <input
              type="text"
              placeholder="https://github.com/your-user/your-repo"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              className={`w-full px-4 py-3 rounded-xl border text-slate-700
                    transition-all duration-200 outline-none
                    ${
                      repoUrl && !isValidRepo
                        ? "border-rose-400 focus:ring-2 focus:ring-rose-200"
                        : "border-slate-300 focus:ring-2 focus:ring-indigo-200"
                    }`}
            />

            <button
              onClick={handleSubmit}
              disabled={!repoUrl || !isValidRepo || loading}
              className={`mt-5 w-full py-3 rounded-xl font-semibold text-white
                    transition-all duration-300
                    ${
                      !repoUrl || !isValidRepo
                        ? "bg-slate-300 cursor-not-allowed"
                        : loading
                          ? "bg-indigo-400"
                          : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-md"
                    }`}
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>

            {error && <p className="text-rose-500 mt-3 text-sm">{error}</p>}
          </>
        )}
      </div>
    </div>
  );
};

export default JobItem;
