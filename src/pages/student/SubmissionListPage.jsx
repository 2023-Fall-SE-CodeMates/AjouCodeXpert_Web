// 제출 관리 페이지
import React from "react";
import style from "styles/pages/student/SubmissionListPage.module.css";
import cn from "classnames";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import SubmissionTable from "components/table/SubmissionTable";
import { Link, useParams } from "react-router-dom";

function SubmissionListPage(props) {
  const { classId } = useParams();
  const submissions = [
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
  ];

  return (
    <div className="d-flex flex-row">
      <Sidebar classId={classId} subjectName="컴퓨터프로그래밍" />
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
              <SubmissionTable rows={submissions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmissionListPage;
