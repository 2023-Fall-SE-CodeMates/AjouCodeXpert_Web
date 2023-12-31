// 과제 페이지
import React, { useState, useEffect } from "react";
import moment from "moment";
import { useAuth } from "services/AuthContext";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import AssignmentListItem from "components/list/AssignmentListItem";
import { Link, useParams } from "react-router-dom";
import { deleteAssignmentApi, retrieveAssignmentListApi } from "services/api";

function AssignmentPage(props) {
  const { classId } = useParams();
  const authContext = useAuth();
  const [role] = [authContext.role];

  // 과제 목록 리스트
  // { id: 과제id, title: 과제 제목, createdAt: 생성시각, closedAt: 마감시간, removable: 삭제 가능 여부}
  const [assignmentList, setAssignmentList] = useState([]);
  useEffect(() => {
    retrieveAssignmentListApi(classId).then((res) => {
      console.log(res);
      setAssignmentList(
        res.data.map((item) => {
          let date = item.endDate;
          date[1] = date[1] - 1;
          date = new moment(date);
          return {
            id: item.homeworkIdx,
            title: item.title,
            closedAt: date.format("YYYY-MM-DD HH:mm:ss"),
            removable: item.removable,
          };
        })
      );
    });
  }, []);

  // 과제 삭제했을 때 호출되는 함수
  async function handleDeleteAssignment(assignmentId) {
    // 삭제 API 호출
    const res = await deleteAssignmentApi(classId, assignmentId);
    console.log(res);
    setAssignmentList((prev) =>
      prev.filter((item) => item.id !== assignmentId)
    );
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
