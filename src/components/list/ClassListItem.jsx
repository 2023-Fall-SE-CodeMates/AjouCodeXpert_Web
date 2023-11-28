import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import DeleteListItem from "components/button/DeleteListItem";

ClassListItem.propTypes = {
  classId: PropTypes.number.isRequired, // 반 ID
  subjectName: PropTypes.string.isRequired, // 반 과목 이름
  subjectCode: PropTypes.string.isRequired, // 과목 코드
  deletable: PropTypes.bool.isRequired, // 삭제 가능 여부
};

function ClassListItem({ classId, subjectName, subjectCode, deletable }) {
  const navigate = useNavigate();

  return (
    <div className="position-relative mb-3" key={classId}>
      <button
        className="btn btn-outline-secondary btn-lg text-start w-100 overflow-hidden listitemButton"
        type="button"
        onClick={() => {
          navigate(`/classes/${classId}/assignments`);
        }}
      >
        {subjectName}({subjectCode})
      </button>
      <div className="position-absolute top-50 end-0 translate-middle">
        {deletable && <DeleteListItem />}
      </div>
    </div>
  );
}

export default ClassListItem;
