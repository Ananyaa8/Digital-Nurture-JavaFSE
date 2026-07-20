import axios from "axios";
import React, { useEffect, useState } from "react";

/**
 * Exercise 14 (Additional): Calling API with React (Axios)
 * Objective: Perform GET and POST requests using Axios, including a form
 * that creates a new resource (simulated by JSONPlaceholder, which does
 * not persist data but returns a realistic mock response).
 */
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

export default function Exercise14_AxiosAPI() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [creating, setCreating] = useState(false);
  const [createdPost, setCreatedPost] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    axios
      .get(POSTS_URL, { params: { _limit: 5 }, cancelToken: source.token })
      .then((response) => setPosts(response.data))
      .catch((err) => {
        if (!axios.isCancel(err)) setError(err.message);
      })
      .finally(() => setLoading(false));

    return () => source.cancel("Component unmounted");
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    setCreating(true);
    try {
      const response = await axios.post(POSTS_URL, {
        title,
        body: "Created from Week 6 React Axios exercise",
        userId: 1,
      });
      setCreatedPost(response.data);
      setTitle("");
    } catch (err) {
      setError(err.message);
    } finally {
      setCreating(false);
    }
  };

  return (
    <div className="card">
      <span className="tag" style={{ background: "#fff3cd", color: "#8a6d00" }}>
        Additional
      </span>
      <h3>Exercise 14: Calling an API with Axios (GET &amp; POST)</h3>

      {loading && <p>Loading posts…</p>}
      {error && <p className="error-text">Error: {error}</p>}

      <h4>GET — latest posts</h4>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>

      <h4>POST — create a new post</h4>
      <form onSubmit={handleCreate} style={{ display: "flex", gap: 8 }}>
        <input
          type="text"
          placeholder="Post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="primary" type="submit" disabled={creating}>
          {creating ? "Creating…" : "Create"}
        </button>
      </form>

      {createdPost && (
        <div style={{ marginTop: 12, background: "#e6f7ec", padding: 10, borderRadius: 8 }}>
          ✅ Server responded with new post id <strong>{createdPost.id}</strong>:{" "}
          "{createdPost.title}"
        </div>
      )}
    </div>
  );
}
