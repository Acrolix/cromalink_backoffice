import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router";
import LoadingPage from "../../../commons/LoadingPage/LoadingPage";
import usePosts from "../../hooks/posts/usePosts";
import PostComments from "./PostComments";

import "./postsStyles/PostDetail.css";

export default function PostDetail() {
  const postId = useParams().id;
  const { t } = useTranslation("", { keyPrefix: "posts" });
  const navigate = useNavigate();

  const { posts, loading } = usePosts(postId);

  return loading ? (
    <LoadingPage />
  ) : (
    <section className="postDetail">
      {loading && <LoadingPage />}
      <div className="postDetailHeader">
        <button onClick={() => navigate("/posts")}>{t("goBack")}</button>
        <h1>{posts.title}</h1>
      </div>
      <div className="postsReactions">
        <b>{posts.reactions_count}</b> {t("reactions")}
      </div>
      <div className="postDetailBody">
        <img src={posts.image} alt={posts.title} />
        <p>{posts.content}</p>
      </div>
      <PostComments postId={postId} />
    </section>
  );
}
