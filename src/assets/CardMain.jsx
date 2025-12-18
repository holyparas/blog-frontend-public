import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "../Navigation";
import { apiFetch } from "../api";

const CardMain = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [response, setResponse] = useState("");
  const [name, setName] = useState("Guest");

  const params = useParams();
  console.log(params);

  const handleSubmitResponse = async () => {
    if (!response.trim()) return;

    try {
      const res = await apiFetch(`/api/posts/${params.postid}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment: response,
          name: name,
          created_at: new Date().toISOString(),
        }),
      });

      if (!res.ok) throw new Error("failed to post comment");

      const newComment = await res.json();

      //update UI immediately
      setComments((prev) => [...prev, newComment]);
      setResponse("");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await apiFetch(`/api/posts/${params.postid}`);
        if (!res.ok) throw new Error("failed to fetch");

        const data = await res.json();
        console.log("data: ", data);
        setPost(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await apiFetch(`/api/posts/${params.postid}/comments`);
        if (!res.ok) throw new Error("failed to fetch");

        const data = await res.json();
        console.log("comments: ", data);
        setComments(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchComments();
  }, []);

  return (
    <div>
      <Navigation />
      <div className=" max-w-3xl sm:max-w-7xl mx-auto p-6">
        <div className="block bg-gray-300 border border-neutral-200 rounded-lg shadow-sm p-6">
          <h1 className="mb-3 text-3xl sm:text-5xl font-bold text-neutral-900 leading-9">
            {post.title}
          </h1>
          <p className="text-gray-500 mb-4">
            {new Date(post.created_at).toLocaleString()}
          </p>
          <p className="mb-6 text-neutral-700">{post.post}</p>
          <p className="text-sm text-gray-500 mb-2">
            Author: {post.author_name}
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Email: {post.author_email}
          </p>
        </div>
        <section className="mt-3">
          <h2 className="text-3xl sm:text-5xl font-bold text-neutral-900 text-center">
            Responses
          </h2>
          <div className="mt-6 max-w-3xl mx-auto bg-white border border-neutral-200 rounded-xl shadow-sm p-4">
            {/* Name */}
            <div className="mb-3">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-neutral-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full sm:w-64 border border-neutral-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Guest"
              />
            </div>

            {/* Comment */}
            <div className="mb-4">
              <textarea
                placeholder="What are your thoughts?"
                rows={4}
                value={response}
                onChange={(e) => setResponse(e.target.value)}
                className="w-full border border-neutral-300 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Button */}
            <div className="flex justify-end">
              <button
                onClick={handleSubmitResponse}
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
              >
                Respond
              </button>
            </div>
          </div>

          {comments.map((c) => (
            <div key={c.id} className="mt-3 p-4 bg-gray-300 rounded shadow">
              <p className="font-semibold">{c.name}</p>
              <p className="text-gray-600">{c.comment}</p>
              <p className="text-xs text-gray-400">
                {new Date(c.created_at).toLocaleString()}
              </p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default CardMain;
