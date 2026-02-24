import { useState } from "react";
import { getCandidateByEmail } from "./services/api";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Footer from "./components/Footer";

function App() {
  const [email, setEmail] = useState("");
  const [candidate, setCandidate] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async () => {
    setError(null);

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return;
    }

    try {
      setLoading(true);

      const data = await getCandidateByEmail(email);
      setCandidate(data);
    } catch (err) {
      if (err.message.includes("404")) {
        setError("Candidate not found");
      } else {
        setError(err.message || "Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChangeEmail = () => {
    setCandidate(null);
    setError(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <main className="flex-grow">
        {candidate ? (
          <Jobs candidate={candidate} onChangeEmail={handleChangeEmail} />
        ) : (
          <>
            <Home
              email={email}
              setEmail={setEmail}
              onSubmit={handleSubmit}
              error={error}
              loading={loading}
            />

            {loading && (
              <p className="text-center mt-3 text-gray-500">Loading...</p>
            )}
          </>
        )}

        {candidate && <Footer />}
      </main>
    </div>
  );
}

export default App;
