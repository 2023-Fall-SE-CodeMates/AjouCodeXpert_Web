// 계정 권한 변경 페이지
import React, { useState, useEffect } from "react";
import style from "styles/pages/admin/RoleChangePage.module.css";
import cn from "classnames";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import MemberTable from "components/table/MemberTable";

function RoleChangePage(props) {
  // 권한 변경 신청 목록
  // [{name: 이름, studentCode: 학번, major: 전공, role: 신청할 권한}]
  const [roleChangeRequests, setRoleChangeRequests] = useState([]);

  useEffect(() => {
    setRoleChangeRequests([
      {
        name: "김태훈",
        studentCode: "2018101234",
        major: "컴퓨터공학과",
        role: "학생",
      },
      {
        name: "이재현",
        studentCode: "2018101235",
        major: "컴퓨터공학과",
        role: "학생",
      },
      {
        name: "조성빈",
        studentCode: "2012101010",
        major: "ICT융합학과",
        role: "TA",
      },
    ]);
  }, []);

  return (
    <div className="d-flex flex-row">
      <Sidebar />
      <div className="flex-fill d-flex flex-column">
        <Titlebar title="계정 권한 변경" />
        <div className="container px-5">
          {/* 구성원 목록 */}
          <div className={cn("mt-5", style.fullHeightBox)}>
            <h5>계정 권한 변경 신청 내역</h5>
            <div
              className={cn(
                "overflow-x-scroll overflow-y-scroll",
                style.tableBox
              )}
            >
              <MemberTable
                rows={roleChangeRequests}
                showAdminButton={false}
                showAcceptRequestButton={false}
                showAcceptRoleChangeButton={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoleChangePage;
