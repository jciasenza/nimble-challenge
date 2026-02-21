function Spinner() {
  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center backdrop-blur-sm z-50">
      <div className="w-14 h-14 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default Spinner;
