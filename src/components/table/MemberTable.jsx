// 구성원 목록 테이블
// 구성원 관리 페이지(TA) - 구성원 목록, 참여 요청
// 전체 사용자 조회 페이지(admin)
// 계정 권한 변경 신청 페이지(admin)
import React from "react";
import PropTypes from "prop-types";

MemberTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// TODO: 특정 열을 보여줄지 말지 props로 처리하기
// TODO: tr의 key를 학번이 아닌 학생의 id로 처리해야 할 듯
// name, studentCode, major, role, id(key)
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
          <th>승인</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
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

export default MemberTable;
