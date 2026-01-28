import { useEffect, useState } from "react";
import Card from "./Card";
import { apiFetch } from "./api";

const CardGrid = () => {
  const [posts, setPosts] = useState([]);

  const fetchWithRetry = async (fn, retries = 5, delay = 1000) => {
    try {
      return await fn();
    } catch (err) {
      if (retries === 0) throw err;

      console.log(`Retrying... (${retries})`);
      await new Promise((res) => setTimeout(res, delay));

      return fetchWithRetry(fn, retries - 1, delay * 1.7);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetchWithRetry(() => apiFetch("/api/posts"));
        // if (!res.ok) throw new Error("failed to fetch");

        // const data = await res.json();
        // console.log("data: ", data);
        setPosts(res);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPosts();
  }, []);
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5">
      {posts.map((post) => {
        return <Card key={post.post_id} post={post} />;
      })}
      {/* <Card />
      <Card />
      <Card />
      <Card /> */}
    </div>
  );
};

export default CardGrid;
