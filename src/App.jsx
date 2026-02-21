import { useState } from "react";
import { getCandidateByEmail } from "./services/api";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Footer from "./components/Footer";

function App() {
  const [email, setEmail] = useState("");
  const [candidate, setCandidate] = useState(null);

  const handleSubmit = async () => {
    const data = await getCandidateByEmail(email);
    setCandidate(data);
  };

  const handleChangeEmail = () => {
    setCandidate(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <main className="flex-grow">
        {candidate ? (
          <Jobs candidate={candidate} onChangeEmail={handleChangeEmail} />
        ) : (
          <Home email={email} setEmail={setEmail} onSubmit={handleSubmit} />
        )}

        {candidate && <Footer />}
      </main>
    </div>
  );
}

export default App;
