// 제출 확인 페이지
import React from "react";
import style from "styles/pages/ta/SubmissionCheckPage.module.css";
import cn from "classnames";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import { useParams } from "react-router-dom";
import StudentScoreTable from "components/table/StudentScoreTable";

function SubmissionCheckPage(props) {
  const { classId, assignmentId } = useParams();

  const scores = [
    {
      id: 1,
      name: "김태훈",
      studentCode: "2018101234",
      delayed: false,
      problemScores: [5, 5, 5],
    },
    {
      id: 2,
      name: "이재현",
      studentCode: "2018101235",
      delayed: true,
      problemScores: [5, 5, 5],
      totalScore: 10,
    },
  ];

  return (
    <div className="d-flex flex-row">
      <Sidebar classId={classId} subjectName="컴퓨터프로그래밍" />
      <div className="flex-fill d-flex flex-column">
        <Titlebar title="구성원 관리" />
        <div className="container px-5">
          {/* 구성원 목록 */}
          <h5 className="mt-5">1주차 과제</h5>
          <div
            className={cn(
              "overflow-x-scroll overflow-y-scroll",
              style.tableBox
            )}
          >
            <StudentScoreTable rows={scores} numberOfProblems={3} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmissionCheckPage;
