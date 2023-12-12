// 과제 추가/수정 페이지
import React, { useState, useEffect } from "react";
import moment from "moment";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import ProblemListItem from "components/list/ProblemListItem";
import { Link, useParams } from "react-router-dom";
import AssignmentInfoForm from "components/form/AssignmentInfoForm";
import ProblemAddModifyPage from "./ProblemAddModifyPage";
import { retrieveAssignmentDetailApi } from "services/api";

function AssignmentAddModifyPage(props) {
  const { classId, assignmentId } = useParams();

  // 0이면 문제 추가/수정 페이지 보여줌, 1 이상이면 해당 번호의 문제 수정 페이지 보여줌
  const [problemIndex, setProblemIndex] = useState(0);

  // 문제 내용을 담고 있는 리스트들
  // 배열은 problemIndex 기준으로 정렬되어야 함
  // {index, language: 언어, points: 배점, explanation: 문제설명, prompt: 프롬프트 tc: 테스트케이스}
  // 테스트케이스 배열 tc는 테스트케이스 index 기준으로 정렬되어야 함
  const [problemInfoList, setProblemInfoList] = useState([]);

  // 과제 정보
  // { id: 과제id, title: 과제 제목, content: 과제 내용,  closedAt: 마감시간}
  const [assignmentInfo, setAssignmentInfo] = useState({});

  useEffect(() => {
    if (assignmentId !== "create") {
      // API 호출
      retrieveAssignmentDetailApi(classId, assignmentId).then((res) => {
        console.log(res);

        let date = res.data.endDate;
        date[1] = date[1] - 1;
        date = new moment(date);
        console.log(date);

        setAssignmentInfo({
          id: res.data.homeworkIdx,
          title: res.data.title,
          content: res.data.content,
          closedAt: date.format("YYYY-MM-DD HH:mm:ss"),
        });

        setProblemInfoList(
          res.data.problems
            .map((item) => {
              return {
                index: item.index,
                language:
                  item.langCode === 0
                    ? "c"
                    : item.langCode === 1
                    ? "java"
                    : "python",
                points: item.points,
                explanation: item.description,
                prompt: "",
                tc: item.testCases,
                isNew: false,
              };
            })
            .sort((a, b) => {
              return a.index - b.index;
            })
        );
      });

      // setAssignmentInfo({
      //   id: assignmentId,
      //   title: "1주차 과제",
      //   content: "1주차 과제입니다.",
      //   closedAt: "2021-09-08 23:59:59",
      // });
      // setProblemInfoList(
      //   [
      //     {
      //       index: 1,
      //       language: "c",
      //       points: 10,
      //       description: "문제 설명",
      //       prompt: "문제",
      //       tc: [{ input: "1", output: "2" }],
      //       isNew: false,
      //     },
      //   ].sort((a, b) => {
      //     return a.index - b.index;
      //   })
      // );
    } else {
      setAssignmentInfo({
        title: "",
        content: "",
        closedAt: "",
      });
    }

    // 페이지 이동 시 경고창 띄우기
    function handleBeforeUnload(e) {
      e.preventDefault();
      e.returnValue = "";
    }
    window.addEventListener("beforeunload", handleBeforeUnload, {
      capture: true,
    });
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload, {
        capture: true,
      });
    };
  }, []);

  return problemIndex === 0 ? (
    <div className="d-flex flex-row">
      <Sidebar classId={classId} subjectName="컴퓨터프로그래밍 및 실습" />
      <div className="flex-fill d-flex flex-column">
        <Titlebar title="과제 추가/수정" />
        <div className="container px-5">
          {/* 과제 설명 */}
          <AssignmentInfoForm
            assignmentInfo={assignmentInfo}
            problemInfoList={problemInfoList}
            setAssignmentInfo={setAssignmentInfo}
          />

          {/* 문제 목록 */}
          <div className="mt-5">
            <button
              className="btn btn-outline-secondary btn-lg mb-3"
              onClick={() => {
                let newIndex;
                if (problemInfoList.length === 0) newIndex = 1;
                else
                  newIndex =
                    problemInfoList[problemInfoList.length - 1].index + 1;
                setProblemIndex(newIndex);
              }}
            >
              문제 추가
            </button>
            {problemInfoList.map((problemInfo) => (
              <ProblemListItem
                key={problemInfo.index}
                classId={classId}
                assignmentId={assignmentId}
                problemIndex={problemInfo.index}
                fromScoreByProblemPage={false}
                setProblemIndex={setProblemIndex}
                deletable={true}
                isNew={problemInfo.isNew}
                onClickDelete={() => {
                  setProblemInfoList(
                    problemInfoList.filter(
                      (obj) => obj.index !== problemInfo.index
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
      problemIndex={problemIndex}
      problemInfo={
        problemInfoList.length === 0 ||
        problemIndex > problemInfoList[problemInfoList.length - 1].index
          ? {
              language: "",
              points: 0,
              explanation: "",
              prompt: "",
              tc: [{ index: 1, input: "", output: "" }],
              isNew: true,
            }
          : problemInfoList.filter((obj) => obj.index === problemIndex)[0]
      }
      problemInfoList={problemInfoList}
      setProblemInfoList={setProblemInfoList}
      setProblemIndex={setProblemIndex}
    />
  );
}

export default AssignmentAddModifyPage;
