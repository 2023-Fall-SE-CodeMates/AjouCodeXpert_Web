// 제출 관리 페이지
import React, { useState, useEffect } from "react";
import style from "styles/pages/student/SubmissionListPage.module.css";
import cn from "classnames";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import SubmissionTable from "components/table/SubmissionTable";
import { Link, useParams } from "react-router-dom";

function SubmissionListPage(props) {
  const { classId } = useParams();

  // 제출 정보 리스트(특정 id와 특정 반에 대한 제출 정보)
  // {submissionId: 제출id, assignmentName: 과제명, problemNo: 문제번호, submitDate: 제출일, result: 결과}
  // sub_result: {0: 성공, 1: 틀렸습니다, 2: 런타임 에러, 3: 컴파일 에러}
  const [submissionList, setSubmissionList] = useState([]);

  useEffect(() => {
    setSubmissionList([
      {
        submissionId: 1,
        assignmentName: "과제1",
        problemNo: 1,
        submitDate: "2023-09-01",
        result: "런타임 에러",
      },
      {
        submissionId: 2,
        assignmentName: "과제1",
        problemNo: 1,
        submitDate: "2023-09-01",
        result: "성공",
      },
      {
        submissionId: 3,
        assignmentName: "과제1",
        problemNo: 2,
        submitDate: "2023-09-01",
        result: "성공",
      },
      {
        submissionId: 4,
        assignmentName: "과제1",
        problemNo: 3,
        submitDate: "2023-09-01",
        result: "성공",
      },
    ]);
  }, []);

  return (
    <div className="d-flex flex-row">
      <Sidebar classId={classId} subjectName="컴퓨터프로그래밍 및 실습" />
      <div className="flex-fill d-flex flex-column">
        <Titlebar title="제출 관리" />
        <div className="container px-5">
          {/* 제출 관리 목록 */}
          <div className={cn("mt-5", style.fullHeightBox)}>
            <div
              className={cn(
                "overflow-x-scroll overflow-y-scroll",
                style.tableBox
              )}
            >
              <SubmissionTable rows={submissionList} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmissionListPage;
