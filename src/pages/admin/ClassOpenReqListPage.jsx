// 반 개설 신청 내역 페이지
import React, { useState, useEffect } from "react";
import style from "styles/pages/admin/ClassOpenReqListPage.module.css";
import cn from "classnames";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import ClassTable from "components/table/ClassTable";

function ClassOpenReqListPage(props) {
  // 반 개설 신청 목록, 반 삭제 신청 목록
  // [{subjectName: 과목명, subjectCode: 과목코드, id: 개설자 id, name: 개설자 이름}]
  // TODO: classId를 별도로 지정해줘야 할 필요가 있을 수 있다.
  const [classOpenRequests, setClassOpenRequests] = useState([]);
  const [classDeleteRequests, setClassDeleteRequests] = useState([]);

  useEffect(() => {
    setClassOpenRequests([
      {
        subjectName: "컴퓨터프로그래밍 및 실습",
        subjectCode: "F081-1",
        name: "홍길동",
      },
      {
        subjectName: "객체지향 프로그래밍 및 실습",
        subjectCode: "F133-1",
        name: "김철수",
      },
    ]);

    setClassDeleteRequests([
      {
        subjectName: "컴퓨터프로그래밍 및 실습",
        subjectCode: "F081-1",
        name: "홍길동",
      },
    ]);
  }, []);

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
            <ClassTable
              rows={classOpenRequests}
              showAcceptRequestButton={false}
            />
          </div>
          {/* 반 삭제 신청 */}
          <h5 className="mt-4">반 삭제 신청 내역</h5>
          <div
            className={cn(
              "overflow-x-scroll overflow-y-scroll",
              style.tableBox
            )}
          >
            <ClassTable
              rows={classDeleteRequests}
              showAcceptRequestButton={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassOpenReqListPage;
