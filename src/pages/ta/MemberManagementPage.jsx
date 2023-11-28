// 구성원 관리 페이지
import React from "react";
import { useAuth } from "services/AuthContext";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import MemberTable from "components/table/MemberTable";
import { useParams } from "react-router-dom";

function MemberManagementPage(props) {
  const { classId } = useParams();
  const members = [
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
  ];

  return (
    <div className="d-flex flex-row">
      <Sidebar classId={classId} className="컴퓨터프로그래밍" />
      <div className="flex-fill d-flex flex-column">
        <Titlebar title="구성원 관리" />
        <div className="container px-5">
          {/* 반 코드 */}

          {/* 구성원 목록 */}
          <div className="overflow-x-scroll overflow-y-scroll">
            <MemberTable rows={members} />
          </div>
          {/* 참여 요청 */}
        </div>
      </div>
    </div>
  );
}

export default MemberManagementPage;
