import moment from "moment";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "./postsStyles/Post.css";

export default function Post({ post }) {
  const { t } = useTranslation("", { keyPrefix: "posts" });

  return (
    <Link to={`/posts/${post.id}`} className="postBody" key={post.id}>
      <div className="postTitle">{post.title}</div>
      <div className="postComments">
        <b>{post.comments.length}</b> {t("comments")}
      </div>
      <div className="postReactions">
        <b>{post.reactions.length}</b> {t("reactions")}
      </div>
      <div className="postDate">{moment(post.created_at).format("L LTS")}</div>
      <div className="postUser">@{post.created_by?.username}</div>
    </Link>
  );
}
