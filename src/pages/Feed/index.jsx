import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { api } from "../../lib/axios";

import "./feed.scss";

export function Feed() {
  const [posts, setPosts] = useState([]);

  async function fetchData() {
    const response = await api.get("./posts");
    setPosts(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleDeletePost(id) {
    setPosts(posts.filter((post) => post.id !== id));
    api.delete(`/posts/${id}`);
  }

  return (
    <div className="feedContainer">
      {posts.map((post) => (
        <Card key={post.id} post={post} DeletePost={handleDeletePost} />
      ))}
    </div>
  );
}
