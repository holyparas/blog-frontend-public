import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-2">
      Sorry, Page you are looking for doesnt exist!
      <Link
        to="/"
        className="inline-flex items-center px-4 py-2.5 text-sm font-medium leading-5 text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Home Page
      </Link>
    </div>
  );
};

export default ErrorPage;
