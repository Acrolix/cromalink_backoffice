import moment from "moment";
import { useTranslation } from "react-i18next";
import LoadingPage from "../../../commons/LoadingPage/LoadingPage";
import useComments from "../../hooks/posts/userComments";

import "./postsStyles/PostComments.css";

export default function PostComment({ postId }) {
  const { t } = useTranslation("", { keyPrefix: "posts" });
  const { comments, loadingComments } = useComments(postId);
  return (
    <section className="postDetailComments">
      {loadingComments && <LoadingPage />}
      <h2>
        {comments.length} {t("comments")}
      </h2>
      {comments.map((comment) => (
        <div key={comment.id} className="postDetailComment">
          <div className="postDetailCommentDetail">
            <div className="postDetailCommentDetailUser">
              <span>@{comment.created_by.username}</span>
              {comment.created_by.first_name} {comment.created_by.last_name}
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
