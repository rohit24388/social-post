import { useState } from "react";
import Post from "../models/Post";
import "./Home.css";
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

  return (
    <div className="Home">
      <PostList posts={posts}></PostList>
    </div>
  );
};

export default Home;
