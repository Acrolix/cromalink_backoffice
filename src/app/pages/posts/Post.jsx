import moment from "moment";
import { Link } from "react-router-dom";

import "./postsStyles/Post.css";

export default function Post({ post }) {
  return (
    <Link to={`/posts/${post.id}`} className="postBody" key={post.id}>
      <div className="postTitle">{post.title}</div>
      <div className="postContent">
        <div className="postUser">@{post.published_by?.username}</div>
        <div>
          <div className="postDate">
            {moment(post.created_at).format("L LTS")}
          </div>
          <div className="postComments">
            <b>{post.comments_count}</b> comments
          </div>
          <div className="postReactions">
            <b>{post.reactions_count}</b> reactions
          </div>
        </div>
      </div>
    </Link>
  );
}
