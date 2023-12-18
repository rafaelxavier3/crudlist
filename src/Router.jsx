import { Routes, Route } from "react-router-dom";
import { Feed } from "./pages/Feed";
import { CreatePost } from "./pages/CreatePost";
import { UpdatePost } from "./pages/UpdatePost";

export function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/updatePost/:id" element={<UpdatePost />} />
      </Routes>
    </div>
  );
}
