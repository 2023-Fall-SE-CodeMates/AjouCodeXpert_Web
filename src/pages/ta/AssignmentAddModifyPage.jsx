// 과제 추가/수정 페이지
import React from "react";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import ProblemListItem from "components/list/ProblemListItem";
import { Link, useParams } from "react-router-dom";
import AssignmentInfoForm from "components/form/AssignmentInfoForm";

function AssignmentAddModifyPage(props) {
  const { classId, assignmentId } = useParams();

  // TODO: 문제 추가 버튼 url의 path variable을 (존재하는 문제개수+1)로 수정, 문제 추가 여부를 알려주는 별도의 prop가 필요할수도
  return (
    <div className="d-flex flex-row">
      <Sidebar classId={classId} subjectName="컴퓨터프로그래밍" />
      <div className="flex-fill d-flex flex-column">
        <Titlebar title="과제 추가/수정" />
        <div className="container px-5">
          {/* 과제 설명 */}
          <AssignmentInfoForm />

          {/* 문제 목록 */}
          <div className="mt-5">
            <Link
              className="btn btn-outline-secondary btn-lg mb-3"
              to={`/classes/${classId}/assignments/${assignmentId}/2`}
            >
              문제 추가
            </Link>
            <ProblemListItem
              classId={classId}
              assignmentId={assignmentId}
              problemNo={1}
              fromScoreByProblemPage={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignmentAddModifyPage;
