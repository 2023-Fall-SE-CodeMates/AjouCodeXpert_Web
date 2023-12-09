// 문제 추가/수정 페이지
import React from "react";
import style from "styles/pages/ta/ProblemAddModifyPage.module.css";
import cn from "classnames";
import PropTypes from "prop-types";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import ProblemListItem from "../../components/list/ProblemListItem";

// 등록 시, 문제 리스트에 문제 내용 추가, setProblemNo 0으로 변경해서 과제 수정/추가 페이지 보여줌
ProblemAddModifyPage.propTypes = {
  problemNo: PropTypes.number.isRequired, // 문제 번호
  problemInfo: PropTypes.object.isRequired, // 문제 내용
  problemInfoList: PropTypes.arrayOf(PropTypes.object).isRequired, // 문제 내용들을 담고 있는 객체들
  setProblemInfoList: PropTypes.func.isRequired, // 문제 내용들을 담고 있는 객체들
  setProblemNo: PropTypes.func.isRequired, // 등록 후 0으로 변경
};

// TODO: 과제 이름을 어떻게 가져올 건지(prop로 넘기거나, assignmentId를 사용해 API호출?)
function ProblemAddModifyPage({
  problemNo,
  problemInfo,
  problemInfoList,
  setProblemInfoList,
  setProblemNo,
}) {
  return (
    <Formik
      initialValues={{
        language: problemInfo.language,
        points: problemInfo.points,
        explanation: problemInfo.explanation,
        prompt: problemInfo.prompt,
        tc: problemInfo.tc,
      }}
      enableReinitialize={true}
      onSubmit={(data) => {
        console.log(data);
        setProblemInfoList(
          problemInfoList
            .filter((obj) => obj.index !== problemNo)
            .concat({
              ...data,
              index: problemNo,
            })
            .sort((a, b) => {
              return a.index - b.index;
            })
        );
        setProblemNo(0);
      }}
      validationSchema={Yup.object().shape({
        language: Yup.string()
          .matches(/^c|java|python$/, "언어를 선택하세요")
          .required("언어를 선택하세요"),
        points: Yup.number()
          .min(1, "1점 이상의 점수를 입력하세요")
          .required("문제 배점을 입력하세요"),
      })}
    >
      {(props) => (
        <Form>
          <div className="container px-1 d-flex flex-column vh-100">
            {/* 문제명, 버튼 */}
            <div className="d-flex flex-row mt-4 mb-2">
              <h3 className="flex-grow-1">1주차 과제 &gt; 문제 {problemNo}</h3>
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={() => {
                  setProblemNo(0);
                }}
              >
                과제 추가/수정 페이지로 돌아가기
              </button>
              <button type="submit" className="btn btn-outline-primary">
                저장
              </button>
            </div>
            {/* 언어배점 */}
            <div className="d-flex flex-row my-2">
              <fieldset className="form-group me-3">
                <label className="form-label">언어</label>
                <Field
                  as="select"
                  className={`form-select ${
                    props.errors.language && "errorField"
                  }`}
                  name="language"
                >
                  <option selected></option>
                  <option value="c">C</option>
                  <option value="java">Java</option>
                  <option value="python">Python</option>
                </Field>
                {props.errors.language && (
                  <div className="errorMessage">{props.errors.language}</div>
                )}
              </fieldset>
              <fieldset className="form-group">
                <label className="form-label">배점</label>
                <Field
                  className={`form-control ${
                    props.errors.points && "errorField"
                  }`}
                  type="number"
                  name="points"
                />
                {props.errors.points && (
                  <div className="errorMessage">{props.errors.points}</div>
                )}
              </fieldset>
            </div>
            <div />
            {/* 문제설명 */}
            <fieldset
              className={cn(
                "form-group flex-grow-1 my-2 ",
                style.problemExplanation
              )}
            >
              <label className="form-label">문제 설명</label>
              <Field
                as="textarea"
                className="form-control overflow-y-scroll"
                name="explanation"
              />
            </fieldset>
            {/* 리뷰프롶 */}
            <fieldset
              className={cn("form-group flex-grow-1 my-2", style.reviewPrompt)}
            >
              <label className="form-label">코드 리뷰 프롬프트</label>
              <Field
                as="textarea"
                className="form-control overflow-y-scroll"
                name="prompt"
              />
            </fieldset>

            {/* TC 목록*/}
            <div className="mt-4 mb-2">
              <button
                type="button"
                className={`btn btn-success btn-sm me-2 ${
                  props.values.tc.length < 5 ? "" : "disabled"
                }`}
                onClick={() => {
                  props.setValues({
                    ...props.values,
                    tc: [...props.values.tc, { tcInput: "", tcOutput: "" }],
                  });
                }}
              >
                테스트케이스 추가
              </button>
              <button
                type="button"
                className={`btn btn-danger btn-sm ${
                  props.values.tc.length > 1 ? "" : "disabled"
                }`}
                onClick={() => {
                  props.setValues({
                    ...props.values,
                    tc: props.values.tc.slice(0, -1),
                  });
                }}
              >
                테스트케이스 삭제
              </button>
            </div>
            <div
              className={cn("mt-2 mb-4 overflow-y-scroll", style.testcaseList)}
            >
              <FieldArray name="tc">
                {/* TC */}
                {() =>
                  props.values.tc.map((item, index) => {
                    return (
                      <div
                        className="d-flex flex-row my-1 justify-content-between"
                        key={index}
                      >
                        <fieldset className="form-group w-50 me-2">
                          <label className="form-label">
                            테스트케이스 {index + 1} 입력
                          </label>
                          <Field
                            as="textarea"
                            className="form-control overflow-y-scroll"
                            name={`tc[${index}].tcInput`}
                          />
                        </fieldset>
                        <fieldset className="form-group w-50 ms-2">
                          <label className="form-label">
                            테스트케이스 {index + 1} 출력
                          </label>
                          <Field
                            as="textarea"
                            className="form-control overflow-y-scroll"
                            name={`tc[${index}]tcOutput`}
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
