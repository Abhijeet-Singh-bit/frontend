import { Link } from "react-router-dom";
import viteLogo from "/vite.svg";

export default function AuthNavbar() {
  return (
    <nav className="bg-white ring-2 ring-indigo-500 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src={viteLogo} alt="Vite" className="w-8" />
        <span className="font-bold text-indigo-600">MyApp</span>
      </div>

      <div className="flex gap-2">
        <Link
          to="/"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Home
        </Link>
        <Link
          to="/Loginnav"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
