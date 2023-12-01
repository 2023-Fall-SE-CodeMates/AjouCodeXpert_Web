// 제출 확인 페이지
import React from "react";
import style from "styles/pages/ta/SubmissionCheckPage.module.css";
import cn from "classnames";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import { Link, useParams } from "react-router-dom";
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
        <Titlebar title="제출 확인" />
        <div className="container px-5">
          {/* 구성원 목록 */}
          <div className="mt-5 mb-3">
            <div className="d-flex flex-row justify-content-between align-items-center">
              <h4>1주차 과제</h4>
              <Link
                to={`/classes/${classId}/scores`}
                className="btn btn-outline-secondary me-2"
              >
                성적 페이지로 돌아가기
              </Link>
            </div>
          </div>
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
