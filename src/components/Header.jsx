import { useEffect, useState } from "react";

const Header = ({ onChangeEmail }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white shadow-md" : "bg-[#d8e6fb]"} 
    `}
    >
      <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-800">Open Positions</h1>

        <button
          onClick={onChangeEmail}
          className="px-5 py-2.5 rounded-xl font-semibold text-white
                     bg-indigo-600 hover:bg-indigo-700
                     transition-all duration-300 shadow-sm hover:shadow-md"
        >
          Change Email
        </button>
      </div>
    </header>
  );
};

export default Header;
