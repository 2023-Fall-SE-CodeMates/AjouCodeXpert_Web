import React from "react";
import PropTypes from "prop-types";

MemberTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// name, studentCode, major, role
function MemberTable({ rows }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>이름</th>
          <th>학번</th>
          <th>소속 학과</th>
          <th>권한</th>
          <th>관리</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.studentCode}>
            <td>{row.name}</td>
            <td>{row.studentCode}</td>
            <td>{row.major}</td>
            <td>{row.role}</td>
            <td>
              <button className="btn btn-outline-secondary btn-sm me-2">
                삭제
              </button>
              <button className="btn btn-outline-secondary btn-sm">
                패스워드 초기화
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MemberTable;
