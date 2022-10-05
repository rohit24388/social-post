import Post from "../models/Post";
import PostCard from "./PostCard";
import "./PostList.css";

interface Props {
  posts: Post[];
}

const PostList = ({ posts }: Props) => {
  return (
    <div className="PostList">
      {posts.map((post) => (
        <PostCard key={post.title} post={post} />
      ))}
    </div>
  );
};

export default PostList;
