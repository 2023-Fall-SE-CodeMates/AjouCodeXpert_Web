// 리뷰 상세 페이지
import React, { useState, useEffect } from "react";
import cn from "classnames";
import style from "styles/pages/student/ReviewDetailPage.module.css";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";
import { useParams, Link } from "react-router-dom";

function ReviewDetailPage(props) {
  const { classId, assignmentId, problemId } = useParams();

  const code = "";
  const language = "";

  // 문제 정보, 리뷰
  // {explanation: 문제설명, code: 작성한 코드, gpt_rvw: GPT 리뷰, ta_rvw: TA 리뷰}
  const [reviewInfo, setReviewInfo] = useState({});
  useEffect(() => {
    setReviewInfo({
      explanation:
        "두 정수를 입력받아 더한 값을 출력하는 프로그램을 작성하시오.",
      code: "int main()\n{\n  return 0;\n}",
      gpt_rvw:
        "당신이 제공한 코드는 실제로 두 정수의 합을 계산하는 것이 아니라 단순히 0을 반환한다. 합을 계산하려면 코드를 수정해야 한다.",
      ta_rvw: "틀렸습니다.",
    });
  });

  return (
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
            {reviewInfo.explanation}
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
              language === "c"
                ? [cpp()]
                : language === "java"
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
              {reviewInfo.gpt_rvw}
            </div>
          </div>
          {/* TA 리뷰 */}
          <div className="d-flex flex-column h-50 mt-2">
            <h5>TA 리뷰</h5>
            <div className={cn("rounded-3 flex-grow-1 p-3", style.reviewBox)}>
              {reviewInfo.ta_rvw}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewDetailPage;
