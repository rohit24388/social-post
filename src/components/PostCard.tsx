import Post from "../models/Post";
import "./PostCard.css";

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  return (
    <div className="PostCard">
      <p>
        <strong>{post.title}</strong>
      </p>
      <p>{post.thought}</p>
    </div>
  );
};

export default PostCard;
