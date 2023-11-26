// 반 목록 페이지
import React from "react";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import ClassListItem from "components/list/ClassListItem";

function ClassListPage(props) {
  return (
    <div className="d-flex flex-row">
      <Sidebar />
      <div className="flex-fill d-flex flex-column">
        <Titlebar title="반 목록" />
        <div className="container px-5">
          <div className="my-5">
            <ClassListItem
              classId={11}
              className="컴퓨터 프로그래밍 및 실습"
              classCode="F081-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassListPage;
