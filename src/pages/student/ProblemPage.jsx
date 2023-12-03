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

function ProblemPage(props) {
  const { classId, assignmentId, problemId } = useParams();

  // 문제 정보
  // {language: 언어, points: 배점, explanation: 문제설명, tc: 테스트케이스}
  const [problemInfo, setProblemInfo] = useState({});
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
  }, []);

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
      </div>
      {/* 코드 작성 및 결과 */}
      <div
        className={cn("d-flex flex-row mt-4 mb-5", style.codeWritingResultBox)}
      >
        <Formik
          initialValues={{
            code:
              problemInfo.language === "c"
                ? "#include <stdio.h>\nint main() {\n\n}"
                : problemInfo.language === "java"
                ? "public class Main {\n\tpublic static void main(String[] args) {\n\n\t}\n}"
                : "def main():\n\t\n\nif __name__ == '__main__':\n\tmain()",
          }}
          enableReinitialize={true}
          onSubmit={(data) => {
            console.log(data);
          }}
        >
          {(props) => (
            <Form className="d-flex flex-column flex-grow-1 me-4">
              <div className="d-flex flex-row justify-content-end mb-2">
                <button
                  type="button"
                  className="btn btn-outline-secondary me-2"
                >
                  저장
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary me-2"
                >
                  실행
                </button>
                <button type="submit" className="btn btn-outline-primary">
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
        <div className={cn("rounded-3 px-2 py-2", style.resultBox)}>결과</div>
      </div>
    </div>
  );
}

export default ProblemPage;
