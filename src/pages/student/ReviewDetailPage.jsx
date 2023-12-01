// 리뷰 상세 페이지
import React from "react";
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
            문제 내용
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
            value={code}
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
            <div
              className={cn("rounded-3 flex-grow-1 p-3", style.reviewBox)}
            ></div>
          </div>
          {/* TA 리뷰 */}
          <div className="d-flex flex-column h-50 mt-2">
            <h5>TA 리뷰</h5>
            <div
              className={cn("rounded-3 flex-grow-1 p-3", style.reviewBox)}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewDetailPage;
