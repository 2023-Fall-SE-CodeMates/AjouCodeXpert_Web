// 과제 추가/수정 페이지
import React, { useState, useEffect } from "react";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import ProblemListItem from "components/list/ProblemListItem";
import { Link, useParams } from "react-router-dom";
import AssignmentInfoForm from "components/form/AssignmentInfoForm";
import ProblemAddModifyPage from "./ProblemAddModifyPage";

function AssignmentAddModifyPage(props) {
  const { classId, assignmentId } = useParams();

  // 0이면 문제 추가/수정 페이지 보여줌, 1 이상이면 해당 번호의 문제 추가/수정 페이지 보여줌
  const [problemNo, setProblemNo] = useState(0);

  // 문제 내용을 담고 있는 리스트들
  // 배열은 problemNo 기준으로 정렬되어야 함
  // {problemNo, language, points, description, prompt, tc}
  // 테스트케이스 배열 tc는 테스트케이스 index 기준으로 정렬되어야 함
  const [problemObjList, setProblemObjList] = useState([]);

  useEffect(() => {
    setProblemObjList(
      [
        {
          problemNo: 1,
          language: "c",
          points: 10,
          description: "문제 설명",
          prompt: "문제",
          tc: [{ tcInput: "1", tcOutput: "2" }],
        },
        {
          problemNo: 2,
          language: "java",
          points: 20,
          description: "문제 설명",
          prompt: "문제",
          tc: [{ tcInput: "10", tcOutput: "20" }],
        },
        {
          problemNo: 3,
          language: "python",
          points: 30,
          description: "문제 설명",
          prompt: "문제",
          tc: [{ tcInput: "1", tcOutput: "3" }],
        },
      ],
      []
    );
  }, []);

  // TODO: 문제 삭제 시 문제 번호가 1부터 순차적으로 재정렬되어야 함
  return problemNo === 0 ? (
    <div className="d-flex flex-row">
      <Sidebar classId={classId} subjectName="컴퓨터프로그래밍" />
      <div className="flex-fill d-flex flex-column">
        <Titlebar title="과제 추가/수정" />
        <div className="container px-5">
          {/* 과제 설명 */}
          <AssignmentInfoForm problemObjList={problemObjList} />

          {/* 문제 목록 */}
          <div className="mt-5">
            <button
              className="btn btn-outline-secondary btn-lg mb-3"
              onClick={() => {
                setProblemNo(problemObjList.length + 1);
              }}
            >
              문제 추가
            </button>
            {problemObjList
              .sort((a, b) => {
                return a.problemNo - b.problemNo;
              })
              .map((problemObj) => (
                <ProblemListItem
                  key={problemObj.problemNo}
                  classId={classId}
                  assignmentId={assignmentId}
                  problemNo={problemObj.problemNo}
                  fromScoreByProblemPage={false}
                  setProblemNo={setProblemNo}
                  deletable={true}
                  onClickDelete={() => {
                    setProblemObjList(
                      problemObjList.filter(
                        (obj) => obj.problemNo !== problemObj.problemNo
                      )
                    );
                  }}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <ProblemAddModifyPage
      problemNo={problemNo}
      problemObj={
        problemObjList.length < problemNo
          ? {
              language: "",
              points: 0,
              description: "",
              prompt: "",
              tc: [{ tcInput: "", tcOutput: "" }],
            }
          : problemObjList.filter((obj) => obj.problemNo === problemNo)[0]
      }
      problemObjList={problemObjList}
      setProblemObjList={setProblemObjList}
      setProblemNo={setProblemNo}
    />
  );
}

export default AssignmentAddModifyPage;
