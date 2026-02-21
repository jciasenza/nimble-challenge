import { useEffect } from "react";

function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-6 right-6 bg-rose-500 text-white px-6 py-3 rounded-xl shadow-lg animate-slideIn z-50">
      {message}
    </div>
  );
}

export default Toast;
