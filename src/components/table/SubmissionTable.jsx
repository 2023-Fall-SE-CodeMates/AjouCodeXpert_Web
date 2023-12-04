// 제출 관리 테이블
// 제출 관리 페이지(학생)
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

SubmissionTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
};

//TODO: 리뷰 상세 페이지로 링크를 걸어야 함
// 리뷰 상세 페이지에서 제출 번호로 API를 호출하는 경우, 동일하게 리뷰 상세 페이지에서 제출 번호를 받아서 API를 호출(url을 바꿔야 할 듯)
// 리뷰 상세 페이지에서 id, 과제번호, 문제번호 만으로 API를 호출하는 경우, 제출 번호로 API를 호출해서 정보를 받아오는 별도의 페이지를 생성
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
