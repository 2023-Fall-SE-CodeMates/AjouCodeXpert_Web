// 성적 페이지
import React from "react";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import AssignmentListItem from "components/list/AssignmentListItem";
import { useParams } from "react-router-dom";

function ScorePage(props) {
  const { classId } = useParams();

  return (
    <div className="d-flex flex-row">
      <Sidebar classId={classId} className="컴퓨터프로그래밍" />
      <div className="flex-fill d-flex flex-column">
        <Titlebar title="과제 목록" />
        <div className="container px-5">
          {/* 과제 목록 */}
          <div className="mt-5">
            <AssignmentListItem
              classId={classId}
              assignmentId={1}
              assignmentName="1주차 과제"
              dueDate="2021-09-01"
              score="15/15"
              fromScorePage={true}
            />
            <AssignmentListItem
              classId={classId}
              assignmentId={2}
              assignmentName="2주차 과제"
              dueDate="2021-09-15"
              score="-"
              fromScorePage={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScorePage;
