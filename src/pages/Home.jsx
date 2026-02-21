const Home = ({ email, setEmail, onSubmit }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="bg-white p-10 rounded-3xl shadow-lg w-full max-w-md animate-fade-in">
        <h2 className="text-3xl font-bold mb-6 text-slate-800">
          Enter your email
        </h2>

        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-200 outline-none transition"
        />

        <button
          onClick={onSubmit}
          className="mt-5 w-full py-3 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Home;
