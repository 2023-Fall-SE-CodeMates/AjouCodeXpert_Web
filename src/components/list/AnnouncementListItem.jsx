import React from "react";
import PropTypes from "prop-types";
import { useAuth } from "services/AuthContext";
import DeleteListItem from "components/button/DeleteListItem";

AnnouncementListItem.propTypes = {
  id: PropTypes.number.isRequired, // 공지사항 ID
  title: PropTypes.string.isRequired, // 공지사항 제목
  content: PropTypes.string.isRequired, // 공지사항 내용
  createdAt: PropTypes.string.isRequired, // 공지사항 생성일
  author: PropTypes.string.isRequired, // 공지사항 작성자
};

// TODO: 편집버튼 추가
function AnnouncementListItem({ title, content, createdAt, author }) {
  const authContext = useAuth();
  const [role] = [authContext.role];

  return (
    <div className="mx-5 my-4 px-5 pt-4 pb-3 border rounded-3">
      <div className="d-flex flex-row">
        <h3>{title}</h3>
        <p className="flex-grow-1" />
        <p className="me-2">{author}</p>
        <p className="me-2">{createdAt}</p>
        {role === "ta" && <DeleteListItem />}
      </div>
      <p className="mt-2">{content}</p>
    </div>
  );
}

export default AnnouncementListItem;
