// 제출 확인 페이지
import React, { useState, useEffect } from "react";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import { useParams } from "react-router-dom";
import StudentScoreTableForm from "components/form/StudentScoreTableForm";

// TODO: 점수를 제출했는지 안했는지 여부를 TA가 알아야 할 필요가 있을텐데, 어떻게 처리할 건지
// ex) 점수 제출이 안 된 학생은 과제 성적이 null
// ex) 별도의 열을 생성
// TODO: 과제에 딸린 문제의 개수를 처리하는 방법
function SubmissionCheckPage(props) {
  const { classId, assignmentId } = useParams();

  // 과제에 대한 모든 학생들의 점수
  // {id: 학생 id, name: 학생 이름, studentCode: 학번, submittedDate: 제출 일자, problemScores: [문제별 점수]}
  const [scores, setScores] = useState([]);

  // 과제에 딸린 문제 수
  const [numberOfProblems, setNumberOfProblems] = useState(0);

  useEffect(() => {
    setScores([
      {
        id: "th1234",
        name: "김태훈",
        studentCode: "201810123",
        submittedDate: "2021-09-01 21:00:00",
        problemScores: [5, 5, 5],
        totalScore: null,
      },
      {
        id: "lhjhjhj",
        name: "이재현",
        studentCode: "201810123",
        submittedDate: "2021-09-01 21:00:00",
        problemScores: [5, 5, 5],
        totalScore: null,
      },
    ]);
    setNumberOfProblems(3);
  }, []);

  return (
    <div className="d-flex flex-row">
      <Sidebar classId={classId} subjectName="컴퓨터프로그래밍 및 실습" />
      <div className="flex-fill d-flex flex-column">
        <Titlebar title="제출 확인" />
        <div className="container px-5">
          <StudentScoreTableForm
            rows={scores}
            numberOfProblems={numberOfProblems}
          />
        </div>
      </div>
    </div>
  );
}

export default SubmissionCheckPage;
