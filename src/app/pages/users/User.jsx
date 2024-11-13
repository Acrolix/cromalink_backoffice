import { useTranslation } from "react-i18next";
import { API_URL } from "../../../config";
import { avatarGeneric } from "../../../helpers/avatarGeneric";
import "./userStyles/User.css";

export default function User({ user }) {
  const { t } = useTranslation("", { keyPrefix: "users" });
  const avatar = user?.avatar
    ? `${API_URL}${user.avatar}`
    : avatarGeneric(user);

  return (
    <div className="userShow">
      <div className="userInfo">
        <img
          src={avatar}
          alt={`${user.username}'s avatar`}
          className="userAvatar"
        />
        <div className="userDetails">
          <span className="username">{user.username}</span>
          <span className="fullName">{user.fullName}</span>
          <span className="country">{user.country.name}</span>
        </div>
        <div className="userStats">
          <span className="stat">
            <strong>{user.publications_count}</strong> {t("publications")}
          </span>
          <span className="stat">
            <strong>{user.comments_count}</strong> {t("comments")}
          </span>
          <span className="stat">
            <strong>{user.reactions_count}</strong> {t("reactions")}
          </span>
        </div>
      </div>
    </div>
  );
}
