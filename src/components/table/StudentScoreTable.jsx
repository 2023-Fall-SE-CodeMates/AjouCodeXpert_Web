import React from "react";
import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";

StudentScoreTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  numberOfProblems: PropTypes.number.isRequired,
};

// TODO: 제출 결과 처리 폼 추가
// name, studentCode, delayed, problemScores, totalScore, id
function StudentScoreTable({ rows, numberOfProblems }) {
  const { classId, assignmentId } = useParams();
  return (
    <table className="table">
      <thead>
        <tr>
          <th>이름</th>
          <th>학번</th>
          <th>지연 제출</th>
          {Array.from({ length: numberOfProblems }, (_, i) => i + 1).map(
            (i) => (
              <th key={i}>문제 {i}</th>
            )
          )}
          <th>결과</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            <td>{row.name}</td>
            <td>{row.studentCode}</td>
            <td>{row.delayed && "지연 제출"}</td>
            {Array.from({ length: numberOfProblems }, (_, i) => i + 1).map(
              (i) => (
                <td key={i}>
                  <Link
                    to={`/classes/${classId}/scores/${assignmentId}/${i}/${row.id}`}
                  >
                    {row.problemScores[i - 1]}
                  </Link>
                </td>
              )
            )}
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentScoreTable;
