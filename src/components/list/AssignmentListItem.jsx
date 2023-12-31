import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import DeleteListItem from "components/button/DeleteListItem";

AssignmentListItem.propTypes = {
  classId: PropTypes.string.isRequired, // 반 ID (path variable)
  assignmentId: PropTypes.number.isRequired, // 과제 ID
  assignmentName: PropTypes.string.isRequired, // 과제 이름
  dueDate: PropTypes.string.isRequired, // 제출기한
  score: PropTypes.string, // 과제 점수
  fromScorePage: PropTypes.bool.isRequired, // 성적 페이지에서 접속했는지 여부
  deletable: PropTypes.bool.isRequired, // 삭제 가능 여부
  onClickDelete: PropTypes.func, // 삭제 버튼 클릭 시 호출되는 함수
};

function AssignmentListItem({
  classId,
  assignmentId,
  assignmentName,
  dueDate,
  score,
  fromScorePage,
  deletable,
  onClickDelete,
}) {
  const navigate = useNavigate();

  return (
    <div className="position-relative mb-3" key={assignmentId}>
      <button
        className="btn btn-outline-secondary btn-lg text-start w-100 overflow-hidden listitemButton"
        type="button"
        onClick={() => {
          if (fromScorePage)
            navigate(`/classes/${classId}/scores/${assignmentId}`);
          else navigate(`/classes/${classId}/assignments/${assignmentId}`);
        }}
      >
        {assignmentName}
        <p className="small">마감일: {dueDate}</p>
      </button>
      <div className="position-absolute top-50 end-0 translate-middle">
        {deletable && !fromScorePage && (
          <DeleteListItem onClick={onClickDelete} />
        )}
        {score && fromScorePage && <div className="h4">{score}</div>}
      </div>
    </div>
  );
}

export default AssignmentListItem;
