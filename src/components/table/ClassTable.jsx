// 반 목록 테이블
// 반 조회 페이지(admin)
// 반 개설 및 삭제 요청 관리 페이지(admin)
import React from "react";
import PropTypes from "prop-types";

ClassTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// TODO: 특정 열을 보여줄지 말지 props로 처리하기, 개설 TA 또는 개설 요청 TA
// TODO: tr의 key를 classId로 처리해야 할 듯
// subjectName, subjectCode, name, classId(key)
function ClassTable({ rows }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>과목명</th>
          <th>과목 코드</th>
          <th>개설 TA</th>
          <th>요청 승인/거부</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.classId}>
            <td>{row.subjectName}</td>
            <td>{row.subjectCode}</td>
            <td>{row.name}</td>
            <td>
              <button className="btn btn-outline-secondary btn-sm me-2">
                승인
              </button>
              <button className="btn btn-outline-secondary btn-sm">거부</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ClassTable;
