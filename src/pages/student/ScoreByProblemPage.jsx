// 문제별 점수 페이지
import React from "react";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import ProblemListItem from "components/list/ProblemListItem";
import style from "styles/pages/student/AssignmentDetailPage.module.css";
import cn from "classnames";
import { Link, useParams } from "react-router-dom";

function ScoreByProblemPage(props) {
  const { classId, assignmentId } = useParams();
  return (
    <div className="d-flex flex-row">
      <Sidebar classId={classId} className="컴퓨터프로그래밍" />
      <div className="flex-fill d-flex flex-column">
        <Titlebar title="문제별 점수" />
        <div className="container px-5">
          {/* 과제 설명 */}
          <div className="mt-5">
            <div className="d-flex flex-row justify-content-between align-items-center">
              <h2>1주차 과제</h2>
              <Link
                to={`/classes/${classId}/scores`}
                className="btn btn-outline-secondary me-2"
              >
                성적 페이지로 돌아가기
              </Link>
            </div>
            <h5 className="mt-2">마감일: 2023-11-01 23:59:59</h5>
            <textarea
              readOnly
              className={cn("form-control mt-5", style.explanationBox)}
            ></textarea>
          </div>
          {/* 문제 목록 */}
          <div className="mt-5">
            <ProblemListItem
              classId={classId}
              assignmentId={assignmentId}
              problemNo={1}
              score={"5/5"}
              fromScoreByProblemPage={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScoreByProblemPage;
