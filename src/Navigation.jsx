import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="flex justify-between my-1 shadow px-2 items-center">
      {/* Brand Dropdown */}
      <div className="relative group">
        <button className="flex items-center gap-2 text-3xl sm:text-5xl font-bold focus:outline-none">
          Postiq-Public
          <ChevronDown className="w-6 h-6 mt-1" />
        </button>

        <div className="absolute left-0 mt-2 w-56 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <Link to="/" className="block px-4 py-2 text-gray-400 cursor-default">
            Postiq – Public
          </Link>

          <a
            href="https://blogauthortop.netlify.app"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Postiq – Author
          </a>
        </div>
      </div>

      {/* Nav Links */}
      <div className="flex gap-10 mr-1 items-center text-xl sm:text-2xl">
        <Link to="/" className="font-medium text-gray-700 hover:text-blue-600">
          Home
        </Link>

        <a
          href="https://blogauthortop.netlify.app/register"
          className="font-medium text-gray-700 hover:text-blue-600"
        >
          Register
        </a>

        <a
          href="https://blogauthortop.netlify.app/login"
          className="font-medium text-gray-700 hover:text-blue-600"
        >
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
