// 성적 페이지
import React, { useState, useEffect } from "react";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import AssignmentListItem from "components/list/AssignmentListItem";
import { useParams } from "react-router-dom";

function ScorePage(props) {
  const { classId } = useParams();

  // 과제 목록 리스트(성적)
  // { id: 과제id, title: 과제 제목, createdAt: 생성시각, closedAt: 마감시간, removable: 삭제 가능 여부}
  const [assignmentList, setAssignmentList] = useState([]);
  useEffect(() => {
    setAssignmentList([
      {
        id: 1,
        title: "1주차 과제",
        createdAt: "2021-09-01",
        closedAt: "2021-09-08",
        removable: false,
        score: "15/15",
      },
      {
        id: 2,
        title: "2주차 과제",
        createdAt: "2021-09-15",
        closedAt: "2021-09-22",
        removable: false,
      },
    ]);
  }, []);

  return (
    <div className="d-flex flex-row">
      <Sidebar classId={classId} subjectName="컴퓨터프로그래밍 및 실습" />
      <div className="flex-fill d-flex flex-column">
        <Titlebar title="성적" />
        <div className="container px-5">
          {/* 과제 목록 */}
          <div className="mt-5">
            {assignmentList.map((assignmentInfo) => (
              <AssignmentListItem
                key={assignmentInfo.id}
                classId={classId}
                assignmentId={assignmentInfo.id}
                assignmentName={assignmentInfo.title}
                dueDate={assignmentInfo.closedAt}
                deletable={assignmentInfo.removable}
                score={assignmentInfo.score}
                fromScorePage={true}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScorePage;
