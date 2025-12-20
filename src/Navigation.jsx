import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav className="flex justify-between my-1 shadow px-2">
        <Link to="/" className="text-3xl sm:text-5xl font-bold">
          Postiq
        </Link>

        <div className="flex gap-10 mr-1 items-center text-xl sm:text-2xl">
          {/* Home link */}
          <Link
            to="/"
            className=" font-medium text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>

          {/* Search */}

          {/* <div className="relative w-full max-w-sm mx-1">
            <input
              type="text"
              placeholder="search for a post"
              className="border border-gray-300 rounded-lg py-2 pr-10 pl-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              className="w-5 h-5 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m1.15-5.4a6.25 6.25 0 11-12.5 0 6.25 6.25 0 0112.5 0z"
              />
            </svg>
          </div> */}

          <a
            href="https://blogauthortop.netlify.app/register"
            className=" font-medium text-gray-700 hover:text-blue-600"
          >
            Register
          </a>
          <a
            href="https://blogauthortop.netlify.app/login"
            className=" font-medium text-gray-700 hover:text-blue-600"
          >
            Login
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
