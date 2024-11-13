import moment from "moment";
import { useTranslation } from "react-i18next";

import "./postsStyles/PostComments.css";

export default function PostComment({ comments }) {
  const { t } = useTranslation("", { keyPrefix: "posts" });
  console.log(comments);
  return (
    <section className="postDetailComments">
      <h2>
        {comments.length} {t("comments")}
      </h2>
      {comments.map((comment) => (
        <div key={comment.id} className="postDetailComment">
          <div className="postDetailCommentDetail">
            <div className="postDetailCommentDetailUser">
              <span>@{comment.user?.username}</span>
              {comment.user?.first_name} {comment.user?.last_name}
            </div>
            <div className="postDetailCommentDetailDate">
              {moment(comment.created_at).format("LL LTS")}
            </div>
          </div>
          <div className="postDetailCommentContent">{comment.content}</div>
        </div>
      ))}
    </section>
  );
}
