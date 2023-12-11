// 구성원 목록 테이블
// 구성원 관리 페이지(TA) - 구성원 목록, 참여 요청
// 전체 사용자 조회 페이지(admin)
// 계정 권한 변경 신청 페이지(admin)
import React from "react";
import PropTypes from "prop-types";

MemberTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  showAdminButton: PropTypes.bool.isRequired, // 계정 삭제, 패스워드 초기화 버튼
  showAcceptJoinButton: PropTypes.bool.isRequired, // 참여 요청 승인 버튼
  showAcceptRoleChangeButton: PropTypes.bool.isRequired, // 계정 권한 변경 승인 버튼
};

// name, studentCode, major, role, id, rowId(key)
// rowId는 계정 권한 변경 신청 페이지, 반 참여 요청 테이블 제외하고는 사용자id, 계정 권한 변경 신청 페이지, 참여 요청 테이블에서는 신청id
function MemberTable({
  rows,
  showAdminButton,
  showAcceptJoinButton,
  showAcceptRoleChangeButton,
}) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>이름</th>
          <th>Id</th>
          <th>학번</th>
          <th>소속 학과</th>
          <th>권한</th>
          {showAdminButton && <th>관리</th>}
          {showAcceptJoinButton && <th>참여 요청 승인</th>}
          {showAcceptRoleChangeButton && <th>계정 권한 변경 승인</th>}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.rowId}>
            <td>{row.name}</td>
            <td>{row.id}</td>
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
            {showAcceptJoinButton && (
              <td>
                <button
                  className="btn btn-outline-secondary btn-sm me-2"
                  onClick={() => {
                    row.acceptFunc();
                  }}
                >
                  승인
                </button>
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => {
                    row.rejectFunc();
                  }}
                >
                  거부
                </button>
              </td>
            )}
            {showAcceptRoleChangeButton && (
              <td>
                <button
                  className="btn btn-outline-secondary btn-sm me-2"
                  onClick={() => {
                    row.acceptFunc();
                  }}
                >
                  승인
                </button>
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => {
                    row.rejectFunc();
                  }}
                >
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
