// 리뷰 확인/추가 페이지
import React, { useState, useEffect } from "react";
import style from "styles/pages/ta/ReviewCheckAddPage.module.css";
import cn from "classnames";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";
import { Field, Form, Formik } from "formik";
import { useParams, Link } from "react-router-dom";

// 리뷰 상세 페이지(학생)와 동일한 API 사용
// TODO: 테스트케이스 정오답 여부에 따라 border 색 다르게
function ReviewCheckAddPage(props) {
  const { classId, assignmentId, problemId, id } = useParams();

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
      score: 5,
      similarity: 36,
      gptReview:
        "당신이 제공한 코드는 실제로 두 정수의 합을 계산하는 것이 아니라 단순히 0을 반환한다. 합을 계산하려면 코드를 수정해야 한다.",
      taReview: "틀렸습니다.",
    });
  }, []);

  return JSON.stringify(problemInfo) === "{}" &&
    JSON.stringify(reviewInfo) === "{}" ? null : (
    <div className="container px-1">
      <Formik
        initialValues={{
          score: reviewInfo.score,
          taReview: reviewInfo.taReview,
        }}
        enableReinitialize={true}
        onSubmit={(data) => {
          console.log(data);
        }}
      >
        {(props) => (
          <Form>
            <div className="d-flex flex-row mt-4 mb-2">
              <h3 className="flex-grow-1">
                1주차 과제 &gt; 문제 {problemId} &gt; {id}
              </h3>
              <Link
                to={`/classes/${classId}/scores/${assignmentId}`}
                className="btn btn-outline-secondary me-2"
              >
                과제 상세 페이지로 돌아가기
              </Link>
              <button type="submit" className="btn btn-outline-primary">
                등록
              </button>
            </div>
            {/* 제출한 코드 */}
            <div className={cn("d-flex flex-column my-4", style.codeBox)}>
              <h5>제출한 코드</h5>
              <div className="flex-grow-1">
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
            </div>
            {/* 테스트케이스 */}
            <div className="my-4">
              {problemInfo.tc.map((item, index) => (
                <div
                  className="d-flex flex-row my-1 justify-content-between"
                  key={index}
                >
                  <fieldset className="form-group w-50 me-2">
                    <label className="form-label">
                      테스트케이스 {index + 1} 입력
                    </label>
                    <div className="form-control">{item.tcInput}</div>
                  </fieldset>
                  <fieldset className="form-group w-50 ms-2">
                    <label className="form-label">
                      테스트케이스 {index + 1} 출력
                    </label>
                    <div className="form-control">{item.tcInput} </div>
                  </fieldset>
                </div>
              ))}
            </div>
            {/* 유사도, 점수 */}
            <div className="d-flex flex-row my-4">
              <fieldset className="form-group w-50 me-2">
                <label className="form-label">유사도 검사 결과</label>
                <div className="form-control">{reviewInfo.similarity}%</div>
              </fieldset>
              <fieldset className="form-group w-50 ms-2">
                <label className="form-label">점수 입력</label>
                <Field
                  className="form-control"
                  type="number"
                  name="score"
                  min="0"
                />
              </fieldset>
            </div>
            {/* 리뷰 */}
            <div className="d-flex flex-row">
              <div className="w-50 me-2">
                <h5>GPT 리뷰</h5>
                <div
                  className={cn(
                    "rounded-3 flex-grow-1 p-3 form-control overflow-y-scroll",
                    style.reviewBox
                  )}
                >
                  {reviewInfo.gptReview}
                </div>
              </div>

              <div className="w-50 ms-2">
                <h5>TA 리뷰</h5>
                <Field
                  as="textarea"
                  name="taReview"
                  className={cn(
                    "rounded-3 flex-grow-1 p-3 form-control overflow-y-scroll",
                    style.reviewBox
                  )}
                ></Field>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ReviewCheckAddPage;
