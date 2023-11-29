// 구성원 목록 테이블
// 구성원 관리 페이지(TA) - 구성원 목록, 참여 요청
// 전체 사용자 조회 페이지(admin)
// 계정 권한 변경 신청 페이지(admin)
import React from "react";
import PropTypes from "prop-types";

MemberTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  showAdminButton: PropTypes.bool.isRequired,
  showAcceptRequestButton: PropTypes.bool.isRequired,
};

// name, studentCode, major, role, id(key)
function MemberTable({ rows, showAdminButton, showAcceptRequestButton }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>이름</th>
          <th>학번</th>
          <th>소속 학과</th>
          <th>권한</th>
          {showAdminButton && <th>관리</th>}
          {showAcceptRequestButton && <th>승인</th>}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            <td>{row.name}</td>
            <td>{row.studentCode}</td>
            <td>{row.major}</td>
            <td>{row.role}</td>
            {showAdminButton && (
              <td>
                <button className="btn btn-outline-secondary btn-sm me-2">
                  삭제
                </button>
                <button className="btn btn-outline-secondary btn-sm">
                  패스워드 초기화
                </button>
              </td>
            )}
            {showAcceptRequestButton && (
              <td>
                <button className="btn btn-outline-secondary btn-sm me-2">
                  승인
                </button>
                <button className="btn btn-outline-secondary btn-sm">
                  거부
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MemberTable;
