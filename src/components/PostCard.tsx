import Post from "../models/Post";
import "./PostCard.css";

interface Props {
  post: Post;
  onDelete: () => void;
}

const PostCard = ({ post, onDelete }: Props) => {
  return (
    <div className="PostCard">
      <p>
        <strong>{post.title}</strong>
      </p>
      <p>{post.thought}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default PostCard;
