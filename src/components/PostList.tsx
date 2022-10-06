import Post from "../models/Post";
import PostCard from "./PostCard";
import "./PostList.css";

interface Props {
  posts: Post[];
  onDelete: (index: number) => void;
}

const PostList = ({ posts, onDelete }: Props) => {
  return (
    <div className="PostList">
      {posts.map((post, index) => (
        <PostCard
          key={post.title}
          post={post}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
};

export default PostList;
