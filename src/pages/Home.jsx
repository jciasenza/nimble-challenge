const Home = ({ email, setEmail, onSubmit, error, loading }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="bg-white p-10 rounded-3xl shadow-lg w-full max-w-md animate-fade-in">
        <h2 className="text-3xl font-bold mb-6 text-slate-800">
          Enter your email
        </h2>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full border rounded-lg px-3 py-2 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
        <button
          onClick={onSubmit}
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 mt-3 rounded-lg font-medium"
          disabled={loading}
        >
          {loading ? "Loading..." : "Continue"}
        </button>

        {error && (
          <p className="text-red-500 text-sm mt-3 text-center">{error}</p>
        )}
      </div>
    </div>
  );
};

export default Home;
