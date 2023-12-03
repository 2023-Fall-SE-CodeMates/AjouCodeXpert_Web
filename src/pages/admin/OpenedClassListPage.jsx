// 전체 개설된 반 조회 페이지
import React from "react";
import style from "styles/pages/admin/RoleChangePage.module.css";
import cn from "classnames";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import ClassTable from "components/table/ClassTable";

function OpenedClassListPage(props) {
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
              <ClassTable rows={[]} showAcceptRequestButton={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenedClassListPage;
