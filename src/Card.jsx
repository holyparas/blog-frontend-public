import { Link } from "react-router-dom";
const Card = ({ post }) => {
  const date = new Date(post.created_at).toLocaleString();

  return (
    <div>
      <div className="block max-w-3xl p-6 bg-neutral-50 border border-neutral-200 rounded-lg shadow-sm">
        <h5 className="mb-3 text-2xl font-semibold tracking-tight text-neutral-900 leading-8">
          {post.title}
        </h5>
        <p className="text-gray-500 mb-1">{date}</p>
        <p className="mb-6 text-neutral-600">{post.post}</p>

        <Link
          to={"/posts/" + post.post_id}
          className="inline-flex items-center px-4 py-2.5 text-sm font-medium leading-5 text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Read more
          <svg
            className="w-4 h-4 ms-1.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Card;
