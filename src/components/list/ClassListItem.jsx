import React from "react";
import style from "styles/components/ClassListItem.module.css";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import DeleteListItem from "components/button/DeleteListItem";

ClassListItem.propTypes = {
  classId: PropTypes.number.isRequired, // 반 ID
  className: PropTypes.string.isRequired, // 반 과목 이름
  classCode: PropTypes.string.isRequired, // 과목 코드
};

// TODO: 학생일 경우 삭제버튼 숨기기
function ClassListItem({ classId, className, classCode }) {
  const navigate = useNavigate();

  return (
    <div className="position-relative">
      <button
        className={cn(
          "btn btn-outline-secondary btn-lg text-start w-100 overflow-hidden",
          style.classlistitemButton
        )}
        type="button"
        onClick={() => {
          navigate(`/classes/${classId}/assignments`);
        }}
      >
        {className}({classCode})
      </button>
      <div className="position-absolute top-50 end-0 translate-middle">
        <DeleteListItem />
      </div>
    </div>
  );
}

export default ClassListItem;
