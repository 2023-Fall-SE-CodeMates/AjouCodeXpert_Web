// 전체 개설된 반 조회 페이지
import React, { useState, useEffect } from "react";
import style from "styles/pages/admin/RoleChangePage.module.css";
import cn from "classnames";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import ClassTable from "components/table/ClassTable";

function OpenedClassListPage(props) {
  // 개설된 반 목록
  // [{subjectName: 과목명, subjectCode: 과목코드, classId: 반 id, id: 개설자 id, name: 개설자 이름}]
  const [openedClassList, setOpenedClassList] = useState([]);

  useEffect(() => {
    setOpenedClassList([
      {
        subjectName: "컴퓨터프로그래밍 및 실습",
        subjectCode: "F081-1",
        classId: "1",
        name: "홍길동",
      },
    ]);
  }, []);

  return (
    <div className="d-flex flex-row">
      <Sidebar />
      <div className="flex-fill d-flex flex-column">
        <Titlebar title="개설된 반 조회" />
        <div className="container px-5">
          {/* 구성원 목록 */}
          <div className={cn("mt-5", style.fullHeightBox)}>
            <h5>개설된 반</h5>
            <div
              className={cn(
                "overflow-x-scroll overflow-y-scroll",
                style.tableBox
              )}
            >
              <ClassTable
                rows={openedClassList}
                showAcceptRequestButton={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenedClassListPage;
