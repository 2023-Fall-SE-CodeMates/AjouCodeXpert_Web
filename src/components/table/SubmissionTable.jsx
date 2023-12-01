// 제출 관리 테이블
// 제출 관리 페이지(학생)
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

SubmissionTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
};

//TODO: 리뷰 상세 페이지로 링크 걸어두기
// submissionId, assignmentName, problemNo, submitDate, result
function SubmissionTable({ rows }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>No</th>
          <th>과제</th>
          <th>문제</th>
          <th>일시</th>
          <th>결과</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.submissionId}>
            <td>{row.submissionId}</td>
            <td>{row.assignmentName}</td>
            <td>{row.problemNo}</td>
            <td>{row.submitDate}</td>
            <td>
              <Link>{row.result}</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SubmissionTable;
