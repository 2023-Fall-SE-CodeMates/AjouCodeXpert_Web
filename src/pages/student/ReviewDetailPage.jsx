// 리뷰 상세 페이지
import React, { useState, useEffect } from "react";
import cn from "classnames";
import style from "styles/pages/student/ReviewDetailPage.module.css";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";
import { useParams, Link } from "react-router-dom";

// 리뷰 확인/추가 페이지(TA)와 동일한 API 사용
function ReviewDetailPage(props) {
  const { classId, assignmentId, problemId } = useParams();

  // 문제 정보
  // {language: 언어, points: 배점, explanation: 문제설명, tc: 테스트케이스}
  const [problemInfo, setProblemInfo] = useState({});

  // 학생이 문제에 대해 제출한 코드, 점수, 리뷰 정보
  // {code: 학생이 제출한 코드, score: 학생이 받은 점수, similarity: 유사도, gptReview: GPT 리뷰, taReview: TA 리뷰}
  const [reviewInfo, setReviewInfo] = useState({});

  useEffect(() => {
    setProblemInfo({
      language: "c",
      points: 10,
      explanation:
        "두 정수를 입력받아 더한 값을 출력하는 프로그램을 작성하시오.",
      tc: [
        { tcInput: "1 1", tcOutput: "2" },
        { tcInput: "10 20", tcOutput: "30" },
      ],
    });
    setReviewInfo({
      code: "int main()\n{\n  return 0;\n}",
      score: 0,
      similarity: 36,
      gptReview:
        "당신이 제공한 코드는 실제로 두 정수의 합을 계산하는 것이 아니라 단순히 0을 반환한다. 합을 계산하려면 코드를 수정해야 한다.",
      taReview: "틀렸습니다.",
    });
  });

  return JSON.stringify(problemInfo) === "{}" &&
    JSON.stringify(reviewInfo) === "{}" ? null : (
    <div className="container px-1 d-flex flex-column vh-100">
      {/* 문제명, 버튼 */}
      <div className="d-flex flex-row mt-4 mb-2">
        <h3 className="flex-grow-1">1주차 과제 &gt; 문제 {problemId}</h3>
        <Link
          to={`/classes/${classId}/scores/${assignmentId}`}
          className="btn btn-outline-secondary me-2"
        >
          과제 상세 페이지로 돌아가기
        </Link>
      </div>
      <div>
        {/* 문제설명 */}
        <fieldset className="form-group flex-grow-1 my-2 ">
          <div
            className={cn("form-control overflow-y", style.problemExplanation)}
          >
            {problemInfo.explanation}
          </div>
        </fieldset>
      </div>
      {/* 코드 작성 및 결과 */}
      <div
        className={cn(
          "d-flex flex-row mt-4 mb-5 me-3",
          style.codeWritingResultBox
        )}
      >
        <div className="w-50">
          <CodeMirror
            style={{ height: "100%" }}
            value={reviewInfo.code}
            height="100%"
            extensions={
              problemInfo.language === "c"
                ? [cpp()]
                : problemInfo.language === "java"
                ? [java()]
                : [python()]
            }
            readOnly={true}
          />
        </div>
        <div className="d-flex flex-column h-100 w-50 ms-3">
          {/* GPT 리뷰 */}
          <div className="d-flex flex-column h-50 mb-2">
            <h5>GPT 리뷰</h5>
            <div className={cn("rounded-3 flex-grow-1 p-3", style.reviewBox)}>
              {reviewInfo.gptReview}
            </div>
          </div>
          {/* TA 리뷰 */}
          <div className="d-flex flex-column h-50 mt-2">
            <h5>TA 리뷰</h5>
            <div className={cn("rounded-3 flex-grow-1 p-3", style.reviewBox)}>
              {reviewInfo.taReview}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewDetailPage;
