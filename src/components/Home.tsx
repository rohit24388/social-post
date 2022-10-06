import { useState } from "react";
import Post from "../models/Post";
import "./Home.css";
import PostForm from "./PostForm";
import PostList from "./PostList";

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      title: "Grand Circus",
      thought: "Grand Circus is cool.",
    },
    {
      title: "React",
      thought: "React give me power!",
    },
    {
      title: "Beatrice",
      thought: "Lorem ipsum.",
    },
  ]);

  const deletePost = (index: number): void => {
    setPosts((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };

  const addPost = (post: Post): void => {
    setPosts((prev) => [post, ...prev]);
    setShowForm(false);
  };

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="Home">
      <button onClick={() => setShowForm(true)}>New Thought</button>
      {showForm && <PostForm onSubmitForm={addPost} />}
      <PostList posts={posts} onDelete={deletePost}></PostList>
    </div>
  );
};

export default Home;
