// 과제 상세 페이지
import React, { useState, useEffect } from "react";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import ProblemListItem from "components/list/ProblemListItem";
import style from "styles/pages/student/AssignmentDetailPage.module.css";
import cn from "classnames";
import { Link, useParams } from "react-router-dom";

// TODO: 과제명 API 호출
function AssignmentDetailPage(props) {
  const { classId, assignmentId } = useParams();

  // 문제 목록 리스트
  // {index: 번호, submittedDate: 제출일}
  const [problemList, setProblemList] = useState([]);

  // 과제 정보
  // { id: 과제id, title: 과제 제목, content: 과제 내용,  closedAt: 마감시간}
  const [assignmentInfo, setAssignmentInfo] = useState({});

  useEffect(() => {
    setAssignmentInfo({
      id: assignmentId,
      title: "1주차 과제",
      content: "1주차 과제입니다.",
      closedAt: "2021-09-08 23:59:59",
    });
    setProblemList([
      {
        index: 1,
        submittedDate: "2021-09-01",
      },
      {
        index: 2,
        submittedDate: "2021-09-02",
      },
      {
        index: 3,
        submittedDate: "2021-09-03",
      },
    ]);
  }, []);

  return (
    <div className="d-flex flex-row">
      <Sidebar classId={classId} subjectName="컴퓨터프로그래밍" />
      <div className="flex-fill d-flex flex-column">
        <Titlebar title="과제 상세" />
        <div className="container px-5">
          {/* 과제 설명 */}
          <div className="mt-5">
            <div className="d-flex flex-row justify-content-between align-items-center">
              <h2>{assignmentInfo.title}</h2>
              <Link
                to={`/classes/${classId}/assignments`}
                className="btn btn-outline-secondary me-2"
              >
                과제 페이지로 돌아가기
              </Link>
            </div>
            <h5 className="mt-2">마감일: {assignmentInfo.closedAt}</h5>
            <textarea
              readOnly
              className={cn("form-control mt-5", style.explanationBox)}
              placeholder={assignmentInfo.content}
            ></textarea>
          </div>

          {/* 문제 목록 */}
          <div className="mt-5">
            <h3 className="mb-4">문제</h3>
            {problemList.map((problemInfo) => (
              <ProblemListItem
                key={problemInfo.index}
                classId={classId}
                assignmentId={assignmentId}
                problemIndex={problemInfo.index}
                submittedDate={problemInfo.submittedDate}
                fromScoreByProblemPage={false}
                deletable={false}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignmentDetailPage;
