// 문제 페이지
import React, { useState, useEffect } from "react";
import cn from "classnames";
import style from "styles/pages/student/ProblemPage.module.css";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";
import { Field, Form, Formik } from "formik";
import { useParams, Link } from "react-router-dom";
import { retrieveAssignmentDetailApi } from "services/api";

// TODO: 학생이 작성중인 코드가 있다면 API로 받아와야 함
function ProblemPage(props) {
  const { classId, assignmentId, problemId } = useParams();

  // 문제 정보
  // {language: 언어, points: 배점, explanation: 문제설명, tc: 테스트케이스}
  const [problemInfo, setProblemInfo] = useState({});

  // 문제 정보 받아오기
  useEffect(() => {
    retrieveAssignmentDetailApi(classId, assignmentId).then((res) => {
      for (const item of res.data.problems) {
        // problemId는 string이다
        if (item.index == problemId) {
          setProblemInfo({
            language:
              item.langCode === 0
                ? "c"
                : item.langCode === 1
                ? "java"
                : "python",
            points: item.points,
            explanation: item.description,
            tc: item.testCases,
          });
        }
      }
    });

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

  // 학생이 작성하는 코드
  const [code, setCode] = useState("");

  // 학생 코드 정보 받아오기
  useEffect(() => {
    // 학생 코드 정보 받아오기

    // 받아올 코드가 없을 시 기본 코드 설정
    if (problemInfo.language === "c")
      setCode("#include <stdio.h>\nint main() {\n\n}");
    else if (problemInfo.language === "java")
      setCode(
        "public class Main {\n\tpublic static void main(String[] args) {\n\n\t}\n}"
      );
    else if (problemInfo.language === "python")
      setCode("def main():\n\t\n\nif __name__ == '__main__':\n\tmain()");
  }, [problemInfo]);

  // 코드 실행 결과
  const [result, setResult] = useState("");

  // 제출 시 true, 실행 시 false
  let isSubmit = true;

  return JSON.stringify(problemInfo) === "{}" ? null : (
    <div className="container px-1 d-flex flex-column vh-100">
      {/* 문제명, 버튼 */}
      <div className="d-flex flex-row mt-4 mb-2">
        <h3 className="flex-grow-1">1주차 과제 &gt; 문제 {problemId}</h3>
        <Link
          to={`/classes/${classId}/assignments/${assignmentId}`}
          className="btn btn-outline-secondary me-2"
        >
          과제 상세 페이지로 돌아가기
        </Link>
      </div>
      {/* 문제 설명 */}
      <div className={cn(style.problemInfoBox, "overflow-y-scroll")}>
        {/* 언어배점 */}
        <div className="d-flex flex-row my-2">
          <fieldset className="form-group me-3">
            <label className="form-label">언어</label>
            <select className="form-select" name="language">
              {problemInfo.language === "c" && <option selected="c">C</option>}
              {problemInfo.language === "java" && (
                <option value="java">Java</option>
              )}
              {problemInfo.language === "python" && (
                <option value="python">Python</option>
              )}
            </select>
          </fieldset>
          <fieldset className="form-group">
            <label className="form-label">배점</label>
            <input
              className="form-control"
              type="number"
              name="points"
              placeholder={problemInfo.points}
              readOnly
            />
          </fieldset>
        </div>
        {/* 문제설명 */}
        <fieldset className="form-group flex-grow-1 my-2 ">
          <label className="form-label">문제 설명</label>
          <div className={cn("form-control", style.problemExplanation)}>
            {problemInfo.explanation}
          </div>
        </fieldset>
        {/* TC 목록*/}
        <div>
          {problemInfo.tc.map((item) => (
            <div
              className="d-flex flex-row my-1 justify-content-between"
              key={item.index}
            >
              <fieldset className="form-group w-50 me-2">
                <label className="form-label">
                  테스트케이스 {item.index} 입력
                </label>
                <div className="form-control">{item.input}</div>
              </fieldset>
              <fieldset className="form-group w-50 ms-2">
                <label className="form-label">
                  테스트케이스 {item.index} 출력
                </label>
                <div className="form-control">{item.output} </div>
              </fieldset>
            </div>
          ))}
        </div>
      </div>
      {/* 코드 작성 및 결과 */}
      <div
        className={cn("d-flex flex-row mt-4 mb-5", style.codeWritingResultBox)}
      >
        <Formik
          initialValues={{
            code,
          }}
          enableReinitialize={true}
          onSubmit={async (data) => {
            // 제출 시
            if (isSubmit) {
              await new Promise((resolve) => setTimeout(resolve, 2000));
              setResult("제출 완료!");
              alert("제출되었습니다.");
              console.log(data);
            } else {
              await new Promise((resolve) => setTimeout(resolve, 2000));
              setResult("실행 완료!");
              console.log(data);
            }
          }}
        >
          {(props) => (
            <Form className="d-flex flex-column flex-grow-1 me-4">
              <div className="d-flex flex-row justify-content-end mb-2">
                <button
                  type="button"
                  className={`btn btn-outline-secondary me-2 ${
                    props.isSubmitting ? "disabled" : ""
                  }`}
                  onClick={() => {}}
                >
                  저장
                </button>
                <button
                  type="button"
                  className={`btn btn-outline-secondary me-2 ${
                    props.isSubmitting ? "disabled" : ""
                  }`}
                  onClick={() => {
                    isSubmit = false;
                    props.handleSubmit();
                  }}
                >
                  실행
                </button>
                <button
                  type="button"
                  className={`btn btn-outline-primary ${
                    props.isSubmitting ? "disabled" : ""
                  }`}
                  onClick={() => {
                    isSubmit = true;
                    props.handleSubmit();
                  }}
                >
                  제출
                </button>
              </div>
              <div className="flex-grow-1">
                <Field name="code">
                  {({ field, form }) => (
                    <CodeMirror
                      style={{ height: "100%" }}
                      value={field.value}
                      height="100%"
                      extensions={
                        problemInfo.language === "c"
                          ? [cpp()]
                          : problemInfo.language === "java"
                          ? [java()]
                          : [python()]
                      }
                      onChange={(data) => {
                        console.log(data);
                        form.setValues({ code: data });
                      }}
                    />
                  )}
                </Field>
              </div>
            </Form>
          )}
        </Formik>
        <div className={cn("rounded-3 px-2 py-2", style.resultBox)}>
          {result}
        </div>
      </div>
    </div>
  );
}

export default ProblemPage;
