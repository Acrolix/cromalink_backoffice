import moment from "moment";

import "./Post.css";
import { useTranslation } from "react-i18next";

export default function Post({ post }) {
  const { t } = useTranslation("", { keyPrefix: "posts" });

  return (
    <div className="postBody" id={post.id}>
      <div className="postTitle">{post.title}</div>
      <div className="postComments">
        {post.comments.length + " " + t("comments")}
      </div>
      <div className="postReactions">{post.reactions.length}</div>
      <div className="postDate">{moment(post.created_at).format("L LTS")}</div>
      <div className="postUser">@{post.created_by?.username}</div>
    </div>
  );
}
