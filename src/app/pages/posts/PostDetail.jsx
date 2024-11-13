import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router";
import LoadingPage from "../../../commons/LoadingPage/LoadingPage";
import usePosts from "../../hooks/posts/usePosts";
import PostComments from "./PostComments";

import "./postsStyles/PostDetail.css";
import { avatarGeneric } from "../../../helpers/avatarGeneric.js";
import moment from "moment";

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
      <div className="postAuthor">
        <div className="authorInfo">
          <img
            src={
              posts.published_by?.avatar ||
              avatarGeneric(posts.published_by || null)
            }
            alt={posts.published_by?.fullName}
            className="authorAvatar"
          />
          <span>{posts.published_by?.fullName}</span>
        </div>
        <br />
        <div className="postDates">
          <span>Created: {moment(posts.created_at).format("L LTS")}</span>
          <br />
          <span>Updated: {moment(posts.updated_at).format("L LTS")}</span>
        </div>
      </div>
      <div className="postsReactions">
        <b>{posts.reactions_count}</b> {t("reactions")}
        <span className="commentCount">
          <br />
          <b>{posts.comments_count}</b> {t("comments")}
        </span>
      </div>
      <div className="postDetailBody">
        {posts.resources[0]?.type === "video" ? (
          <video src={posts.resources[0].url} controls />
        ) : posts.resources[0]?.type === "audio" ? (
          <audio src={posts.resources[0].url} controls />
        ) : posts.resources[0]?.type === "external" ? (
          <iframe
            src={posts.resources[0].url}
            title={posts.title}
            width="100%"
            height="400"
            style={{ border: "none" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <img
            src={posts.resources[0]?.url || "/img/no-image.png"}
            alt={posts.title}
          />
        )}
        <p>{posts.content}</p>
      </div>
      <PostComments comments={posts.comments} />
    </section>
  );
}
