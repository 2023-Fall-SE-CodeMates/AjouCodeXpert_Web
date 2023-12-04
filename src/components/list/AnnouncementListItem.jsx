import React from "react";
import PropTypes from "prop-types";
import DeleteListItem from "components/button/DeleteListItem";
import EditListItem from "components/button/EditListItem";

AnnouncementListItem.propTypes = {
  classId: PropTypes.string.isRequired, // 반 ID (path variable)
  announcementId: PropTypes.number.isRequired, // 공지사항 ID
  title: PropTypes.string.isRequired, // 공지사항 제목
  content: PropTypes.string.isRequired, // 공지사항 내용
  createdAt: PropTypes.string.isRequired, // 공지사항 생성일
  // author: PropTypes.string.isRequired, // 공지사항 작성자
  editable: PropTypes.bool.isRequired, // 수정 가능 여부
  deletable: PropTypes.bool.isRequired, // 삭제 가능 여부
  handleDeleteAnnouncement: PropTypes.func, // 삭제 버튼 클릭 시 호출되는 함수
};

function AnnouncementListItem({
  classId,
  announcementId,
  title,
  content,
  createdAt,
  editable,
  deletable,
  handleDeleteAnnouncement,
}) {
  return (
    <div className="mb-4 px-5 pt-4 pb-3 border rounded-3" key={announcementId}>
      <div className="d-flex flex-row">
        <h3>{title}</h3>
        <p className="flex-grow-1" />
        {/* <p className="me-3">{author}</p> */}
        <p className="me-3">{createdAt}</p>
        {editable && (
          <EditListItem
            link={`/classes/${classId}/announcements/${announcementId}`}
          />
        )}
        {deletable && <DeleteListItem onClick={handleDeleteAnnouncement} />}
      </div>
      <p className="mt-2">{content}</p>
    </div>
  );
}

export default AnnouncementListItem;
