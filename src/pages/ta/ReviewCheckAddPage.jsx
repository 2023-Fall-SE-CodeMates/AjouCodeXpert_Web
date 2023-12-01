// 리뷰 확인/추가 페이지
import React from "react";
import style from "styles/pages/ta/ReviewCheckAddPage.module.css";
import cn from "classnames";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";
import { Field, Form, Formik } from "formik";
import { useParams, Link } from "react-router-dom";

// TODO: 테스트케이스 정오답 여부에 따라 border 색 다르게
function ReviewCheckAddPage(props) {
  const { classId, assignmentId, problemId, id } = useParams();
  const code = "";
  const language = "";
  const gradedScore = 0;
  const tc = [{ tcInput: "1 2", tcOutput: "3" }];

  return (
    <div className="container px-1">
      <Formik
        initialValues={{
          score: gradedScore,
          taReview: "",
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
                to={`/classes/${classId}/assignments/${assignmentId}`}
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
            </div>
            {/* 테스트케이스 */}
            <div className="my-4">
              {tc.map((item, index) => (
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
                <div className="form-control">36%</div>
              </fieldset>
              <fieldset className="form-group w-50 ms-2">
                <label className="form-label">점수 입력</label>
                <Field className="form-control" type="number" name="score" />
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
                ></div>
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
