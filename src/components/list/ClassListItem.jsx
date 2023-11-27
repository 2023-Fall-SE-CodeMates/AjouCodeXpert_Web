import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "services/AuthContext";
import PropTypes from "prop-types";
import DeleteListItem from "components/button/DeleteListItem";

ClassListItem.propTypes = {
  classId: PropTypes.number.isRequired, // 반 ID
  className: PropTypes.string.isRequired, // 반 과목 이름
  subjectCode: PropTypes.string.isRequired, // 과목 코드
};

function ClassListItem({ classId, className, subjectCode }) {
  const navigate = useNavigate();
  const authContext = useAuth();
  const [role] = [authContext.role];

  return (
    <div className="position-relative mb-3" key={classId}>
      <button
        className="btn btn-outline-secondary btn-lg text-start w-100 overflow-hidden listitemButton"
        type="button"
        onClick={() => {
          navigate(`/classes/${classId}/assignments`);
        }}
      >
        {className}({subjectCode})
      </button>
      <div className="position-absolute top-50 end-0 translate-middle">
        {role === "ta" && <DeleteListItem />}
      </div>
    </div>
  );
}

export default ClassListItem;
