import React from "react";
import PropTypes from "prop-types";
import DeleteListItem from "components/button/DeleteListItem";
import EditListItem from "components/button/EditListItem";

AnnouncementListItem.propTypes = {
  classId: PropTypes.string.isRequired, // 반 ID (path variable)
  AnnouncementId: PropTypes.number.isRequired, // 공지사항 ID
  title: PropTypes.string.isRequired, // 공지사항 제목
  content: PropTypes.string.isRequired, // 공지사항 내용
  createdAt: PropTypes.string.isRequired, // 공지사항 생성일
  author: PropTypes.string.isRequired, // 공지사항 작성자
  editable: PropTypes.bool.isRequired, // 수정 가능 여부
  deletable: PropTypes.bool.isRequired, // 삭제 가능 여부
};

function AnnouncementListItem({
  classId,
  AnnouncementId,
  title,
  content,
  createdAt,
  author,
  editable,
  deletable,
}) {
  return (
    <div className="mb-4 px-5 pt-4 pb-3 border rounded-3" key={AnnouncementId}>
      <div className="d-flex flex-row">
        <h3>{title}</h3>
        <p className="flex-grow-1" />
        <p className="me-3">{author}</p>
        <p className="me-3">{createdAt}</p>
        {editable && (
          <EditListItem
            link={`/classes/${classId}/announcements/${AnnouncementId}`}
          />
        )}
        {deletable && <DeleteListItem />}
      </div>
      <p className="mt-2">{content}</p>
    </div>
  );
}

export default AnnouncementListItem;
