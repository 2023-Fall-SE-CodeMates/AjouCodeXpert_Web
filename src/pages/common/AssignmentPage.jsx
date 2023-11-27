// 과제 페이지
import React from "react";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import AssignmentListItem from "components/list/AssignmentListItem";

function AssignmentPage(props) {
  return (
    <div className="d-flex flex-row">
      <Sidebar classId="11" className="컴퓨터프로그래밍" />
      <div className="flex-fill d-flex flex-column">
        <Titlebar title="과제 목록" />
        <div className="container px-5">
          <div className="my-5">
            <AssignmentListItem
              classId={11}
              assignmentId={1}
              assignmentName="1주차 과제"
              dueDate="2021-09-01"
              score="9/9"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignmentPage;
