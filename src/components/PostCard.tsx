import Post from "../models/Post";
import "./PostCard.css";

interface Props {
  post: Post;
}

const PostCard = (post: Props) => {
  return (
    <div className="PostCard">
      Post Card Works
      {post.post.title}
      <br />
      {post.post.thought}
    </div>
  );
};

export default PostCard;
