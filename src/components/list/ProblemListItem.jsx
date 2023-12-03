import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import DeleteListItem from "components/button/DeleteListItem";

ProblemListItem.propTypes = {
  classId: PropTypes.string.isRequired, // 반 ID (path variable)
  assignmentId: PropTypes.string.isRequired, // 과제 ID (path variable)
  problemNo: PropTypes.number.isRequired, // 문제 번호
  submittedDate: PropTypes.string, // 제출일

  score: PropTypes.string, // 문제 점수
  fromScoreByProblemPage: PropTypes.bool.isRequired, // 문제별 점수 페이지에서 접속했는지 여부(학생)

  setProblemNo: PropTypes.func, // 문제 번호로 변경해서 문제 수정/추가 페이지 보여줌(TA)

  deletable: PropTypes.bool.isRequired, // 삭제 가능 여부
  onClickDelete: PropTypes.func, // 삭제 버튼 클릭 시 호출되는 함수
};

function ProblemListItem({
  classId,
  assignmentId,
  problemNo,
  submittedDate,
  score,
  fromScoreByProblemPage,
  setProblemNo,
  deletable,
  onClickDelete,
}) {
  const navigate = useNavigate();

  return (
    <div className="position-relative mb-3">
      <button
        className="btn btn-outline-secondary btn-lg text-start w-100 overflow-hidden listitemButton"
        type="button"
        onClick={() => {
          if (fromScoreByProblemPage)
            navigate(`/classes/${classId}/scores/${assignmentId}/${problemNo}`);
          else if (setProblemNo) setProblemNo(problemNo);
          else
            navigate(
              `/classes/${classId}/assignments/${assignmentId}/${problemNo}`
            );
        }}
      >
        {problemNo}
      </button>
      <div className="position-absolute top-50 end-0 translate-middle">
        {deletable && <DeleteListItem onClick={onClickDelete} />}
        {score && fromScoreByProblemPage && <div className="h4">{score}</div>}
        {submittedDate && !fromScoreByProblemPage && (
          <div>제출일자: {submittedDate}</div>
        )}
      </div>
    </div>
  );
}

export default ProblemListItem;
