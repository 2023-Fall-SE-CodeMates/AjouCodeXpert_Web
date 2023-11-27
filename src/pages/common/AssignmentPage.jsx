// 과제 페이지
import React from "react";
import { useAuth } from "services/AuthContext";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import AssignmentListItem from "components/list/AssignmentListItem";
import { Link, useParams } from "react-router-dom";

function AssignmentPage(props) {
  const { classId } = useParams();
  const authContext = useAuth();
  const [role] = [authContext.role];

  return (
    <div className="d-flex flex-row">
      <Sidebar classId={classId} className="컴퓨터프로그래밍" />
      <div className="flex-fill d-flex flex-column">
        <Titlebar title="과제 목록" />
        <div className="container px-5">
          {/* 과제 목록 */}
          <div className="mt-5">
            {role === "ta" && (
              <Link
                className="btn btn-outline-secondary btn-lg mb-3"
                to={`/classes/${classId}/assignments/create`}
              >
                과제 추가
              </Link>
            )}
            <AssignmentListItem
              classId={classId}
              assignmentId={1}
              assignmentName="1주차 과제"
              dueDate="2021-09-01"
              fromScorePage={false}
            />
            <AssignmentListItem
              classId={classId}
              assignmentId={2}
              assignmentName="2주차 과제"
              dueDate="2021-09-15"
              fromScorePage={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignmentPage;
