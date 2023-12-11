// 과제 페이지
import React, { useState, useEffect } from "react";
import { useAuth } from "services/AuthContext";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import AssignmentListItem from "components/list/AssignmentListItem";
import { Link, useParams } from "react-router-dom";
import { retrieveAssignmentListApi } from "services/api";

function AssignmentPage(props) {
  const { classId } = useParams();
  const authContext = useAuth();
  const [role] = [authContext.role];

  // 과제 목록 리스트
  // { id: 과제id, title: 과제 제목, createdAt: 생성시각, closedAt: 마감시간, removable: 삭제 가능 여부}
  const [assignmentList, setAssignmentList] = useState([]);
  useEffect(() => {
    retrieveAssignmentListApi(classId).then((res) => {
      setAssignmentList(
        res.data.map((item) => {
          return {
            id: item.homeworkIdx,
            title: item.title,
            closedAt: item.endDate,
            removable: item.removable,
          };
        })
      );
    });
  }, []);

  // 과제 삭제했을 때 호출되는 함수
  async function handleDeleteAssignment(assignmentId) {
    // 삭제 API 호출
    // 삭제 후 과제 목록 가져오는 API 호출, assignmentList 업데이트
    console.log("과제 삭제");
  }

  return (
    <div className="d-flex flex-row">
      <Sidebar classId={classId} subjectName="컴퓨터프로그래밍 및 실습" />
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
            {assignmentList.map((assignmentInfo) => (
              <AssignmentListItem
                key={assignmentInfo.id}
                classId={classId}
                assignmentId={assignmentInfo.id}
                assignmentName={assignmentInfo.title}
                dueDate={assignmentInfo.closedAt}
                deletable={assignmentInfo.removable}
                fromScorePage={false}
                onClickDelete={() => {
                  handleDeleteAssignment(assignmentInfo.id);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignmentPage;
