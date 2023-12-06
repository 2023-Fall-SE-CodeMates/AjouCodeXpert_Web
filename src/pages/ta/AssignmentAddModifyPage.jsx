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
  // {index, language: 언어, points: 배점, explanation: 문제설명, prompt: 프롬프트 tc: 테스트케이스}
  // 테스트케이스 배열 tc는 테스트케이스 index 기준으로 정렬되어야 함
  const [problemInfoList, setProblemInfoList] = useState([]);

  // 과제 정보
  // { id: 과제id, title: 과제 제목, content: 과제 내용,  closedAt: 마감시간}
  const [assignmentInfo, setAssignmentInfo] = useState({});

  useEffect(() => {
    if (assignmentId !== "create") {
      // API 호출
      setAssignmentInfo({
        id: assignmentId,
        title: "1주차 과제",
        content: "1주차 과제입니다.",
        closedAt: "2021-09-08 23:59:59",
      });
      setProblemInfoList([
        {
          index: 1,
          language: "c",
          points: 10,
          description: "문제 설명",
          prompt: "문제",
          tc: [{ tcInput: "1", tcOutput: "2" }],
        },
        {
          index: 2,
          language: "java",
          points: 20,
          description: "문제 설명",
          prompt: "문제",
          tc: [{ tcInput: "10", tcOutput: "20" }],
        },
        {
          index: 3,
          language: "python",
          points: 30,
          description: "문제 설명",
          prompt: "문제",
          tc: [{ tcInput: "1", tcOutput: "3" }],
        },
      ]);
    } else {
      setAssignmentInfo({
        title: "",
        content: "",
        closedAt: "",
      });
    }
  }, []);

  // TODO: 문제 삭제 시 문제 번호가 1부터 순차적으로 재정렬되어야 함
  return problemNo === 0 ? (
    <div className="d-flex flex-row">
      <Sidebar classId={classId} subjectName="컴퓨터프로그래밍" />
      <div className="flex-fill d-flex flex-column">
        <Titlebar title="과제 추가/수정" />
        <div className="container px-5">
          {/* 과제 설명 */}
          <AssignmentInfoForm
            assignmentInfo={assignmentInfo}
            problemInfoList={problemInfoList}
          />

          {/* 문제 목록 */}
          <div className="mt-5">
            <button
              className="btn btn-outline-secondary btn-lg mb-3"
              onClick={() => {
                setProblemNo(problemInfoList.length + 1);
                setProblemInfoList([
                  ...problemInfoList,
                  {
                    index: problemInfoList.length + 1,
                    language: "",
                    points: "",
                    description: "",
                    prompt: "",
                    tc: [{ tcInput: "", tcOutput: "" }],
                  },
                ]);
              }}
            >
              문제 추가
            </button>
            {problemInfoList
              .sort((a, b) => {
                return a.index - b.index;
              })
              .map((problemInfo) => (
                <ProblemListItem
                  key={problemInfo.index}
                  classId={classId}
                  assignmentId={assignmentId}
                  problemNo={problemInfo.index}
                  fromScoreByProblemPage={false}
                  setProblemNo={setProblemNo}
                  deletable={true}
                  onClickDelete={() => {
                    setProblemInfoList(
                      problemInfoList.filter(
                        (obj) => obj.index !== problemInfo.index
                      )
                      // TODO: 문제 삭제 시 문제 번호가 1부터 순차적으로 재정렬되어야 함
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
      problemInfo={
        problemInfoList.length < problemNo
          ? {
              language: "",
              points: 0,
              explanation: "",
              prompt: "",
              tc: [{ tcInput: "", tcOutput: "" }],
            }
          : problemInfoList.filter((obj) => obj.index === problemNo)[0]
      }
      problemInfoList={problemInfoList}
      setProblemInfoList={setProblemInfoList}
      setProblemNo={setProblemNo}
    />
  );
}

export default AssignmentAddModifyPage;
