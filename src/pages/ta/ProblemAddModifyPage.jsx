// 문제 추가/수정 페이지
import React from "react";
import style from "./ProblemAddModifyPage.module.css";
import cn from "classnames";
import { Formik, Form, Field, FieldArray } from "formik";

function ProblemAddModifyPage(props) {
  return (
    <Formik
      initialValues={{
        language: undefined,
        points: undefined,
        description: "",
        prompt: "",
        tc: [{ tcInput: "", tcOutput: "" }],
      }}
      onSubmit={(data) => {
        console.log(data);
      }}
    >
      {(props) => (
        <Form>
          <div className="container px-1 d-flex flex-column vh-100">
            {/* 문제명, 버튼 */}
            <div className="d-flex flex-row mt-4 mb-2">
              <h3 className="flex-grow-1">1주차 과제 &gt; 문제 1</h3>
              <button type="button" className="btn btn-outline-secondary me-2">
                과제 상세 페이지로 돌아가기
              </button>
              <button type="submit" className="btn btn-outline-primary">
                저장
              </button>
            </div>
            {/* 언어배점 */}
            <div className="d-flex flex-row my-2">
              <div className="me-3">
                <label className="form-label">언어</label>
                <div className="dropdown">
                  <Field as="select" className="form-select" name="language">
                    <option selected>언어를 선택하세요</option>
                    <option value="c">C</option>
                    <option value="java">Java</option>
                    <option value="python">Python</option>
                  </Field>
                </div>
              </div>
              <fieldset className="form-group">
                <label className="form-label">배점</label>
                <Field className="form-control" type="number" name="points" />
              </fieldset>
            </div>
            <div />
            {/* 문제설명 */}
            <div className={cn("flex-grow-1 my-2", style.problemExplanation)}>
              <label className="form-label">문제 설명</label>
              <Field
                as="textarea"
                className="form-control overflow-y-scroll"
                name="description"
              />
            </div>
            {/* 리뷰프롶 */}
            <div className={cn("flex-grow-1 my-2", style.reviewPrompt)}>
              <label className="form-label">코드 리뷰 프롬프트</label>
              <Field
                as="textarea"
                className="form-control overflow-y-scroll"
                name="prompt"
              />
            </div>
            {/* TC 목록*/}

            <div className={cn("my-2 overflow-y-scroll", style.testcaseList)}>
              <FieldArray name="tc">
                {/* TC */}
                {() =>
                  props.values.tc.map((item, index) => {
                    return (
                      <div
                        className="d-flex flex-row my-1 justify-content-between"
                        key={index}
                      >
                        <fieldset className="w-50 me-2">
                          <label className="form-label">
                            예제 {index + 1} 입력
                          </label>
                          <Field
                            as="textarea"
                            className="form-control overflow-y-scroll"
                            name={`tc.${index + 1}.tcInput`}
                          />
                        </fieldset>
                        <fieldset className="w-50 ms-2">
                          <label className="form-label">
                            예제 {index + 1} 출력
                          </label>
                          <Field
                            as="textarea"
                            className="form-control overflow-y-scroll"
                            name={`tc.${index + 1}.tcOutput`}
                          />
                        </fieldset>
                      </div>
                    );
                  })
                }
              </FieldArray>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ProblemAddModifyPage;
