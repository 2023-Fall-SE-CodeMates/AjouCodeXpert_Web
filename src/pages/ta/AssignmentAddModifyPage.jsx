// 과제 추가/수정 페이지
import React from "react";
import { useAuth } from "services/AuthContext";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import ProblemListItem from "components/list/ProblemListItem";
import style from "styles/pages/ta/AssignmentAddModifyPage.module.css";
import cn from "classnames";
import { Formik, Form, Field, FieldArray } from "formik";
import { Link, useParams } from "react-router-dom";

function AssignmentAddModifyPage(props) {
  const { classId, assignmentId } = useParams();
  const authContext = useAuth();
  const [role] = [authContext.role];

  // TODO: 문제 추가 버튼 url의 path variable을 (존재하는 문제개수+1)로 수정, 문제 추가 여부를 알려주는 별도의 prop가 필요할수도
  return (
    <div className="d-flex flex-row">
      <Sidebar classId={classId} subjectName="컴퓨터프로그래밍" />
      <div className="flex-fill d-flex flex-column">
        <Titlebar title="과제 추가/수정" />
        <div className="container px-5">
          {/* 과제 설명 */}
          <Formik
            initialValues={{
              title: "",
              dueDate: "",
              description: "",
            }}
            enableReinitialize={true}
            onSubmit={(data) => {
              console.log(data);
            }}
          >
            {(props) => (
              <Form>
                <div className="d-flex flex-row justify-content-end mb-3">
                  <Link
                    className="btn btn-outline-secondary mt-4 me-2"
                    to={`/classes/${classId}/assignments`}
                  >
                    과제 목록으로 돌아가기
                  </Link>
                  <button
                    type="submit"
                    className="btn btn-outline-primary mt-4"
                  >
                    등록
                  </button>
                </div>
                <Field
                  type="text"
                  className={cn("form-control", style.titleField)}
                  name="title"
                />
                <div className="d-flex flex-row mt-3 align-items-baseline">
                  <label className={cn("form-label me-2", style.dueLabel)}>
                    마감일:
                  </label>
                  <Field
                    type="datetime-local"
                    className={cn("form-control", style.dueField)}
                    name="dueDate"
                  />
                </div>
                <Field
                  as="textarea"
                  className={cn(
                    "form-control overflow-y-scroll mt-3",
                    style.explanationBox
                  )}
                  name="description"
                />
              </Form>
            )}
          </Formik>

          {/* 문제 목록 */}
          <div className="mt-5">
            {role === "ta" && (
              <Link
                className="btn btn-outline-secondary btn-lg mb-3"
                to={`/classes/${classId}/assignments/${assignmentId}/2`}
              >
                문제 추가
              </Link>
            )}
            <ProblemListItem
              classId={classId}
              assignmentId={assignmentId}
              problemNo={1}
              fromScoreByProblemPage={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignmentAddModifyPage;
