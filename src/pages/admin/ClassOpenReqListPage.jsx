// 반 개설 신청 내역 페이지
import React from "react";
import style from "styles/pages/admin/ClassOpenReqListPage.module.css";
import cn from "classnames";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import ClassTable from "components/table/ClassTable";

function ClassOpenReqListPage(props) {
  const requests = [
    {
      subjectName: "컴퓨터프로그래밍",
      subjectCode: "F081-1",
      name: "홍길동",
    },
    {
      subjectName: "객체지향 프로그래밍",
      subjectCode: "F133-1",
      name: "김철수",
    },
  ];

  return (
    <div className="d-flex flex-row">
      <Sidebar />
      <div className="flex-fill d-flex flex-column">
        <Titlebar title="반 개설 및 삭제 요청 관리" />
        <div className="container px-5">
          {/* 반 개설 신청 */}
          <h5 className="mt-5">반 개설 신청 내역</h5>
          <div
            className={cn(
              "overflow-x-scroll overflow-y-scroll",
              style.tableBox
            )}
          >
            <ClassTable rows={requests} showAcceptRequestButton={false} />
          </div>
          {/* 반 삭제 신청 */}
          <h5 className="mt-4">반 삭제 신청 내역</h5>
          <div
            className={cn(
              "overflow-x-scroll overflow-y-scroll",
              style.tableBox
            )}
          >
            <ClassTable rows={requests} showAcceptRequestButton={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassOpenReqListPage;
