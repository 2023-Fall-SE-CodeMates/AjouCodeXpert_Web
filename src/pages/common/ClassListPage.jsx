// 반 목록 페이지
import React from "react";
import { useAuth } from "services/AuthContext";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import ClassListItem from "components/list/ClassListItem";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

function ClassListPage(props) {
  const authContext = useAuth();
  const [role] = [authContext.role];

  return (
    <div className="d-flex flex-row">
      <Sidebar />
      <div className="flex-fill d-flex flex-column">
        <Titlebar title="반 목록" />
        <div className="container px-5">
          <Formik
            initialValues={{
              classCode: "",
            }}
            enableReinitialize={true}
            onSubmit={(data) => {
              console.log(data);
            }}
            validationSchema={Yup.object().shape({
              classCode: Yup.string(),
            })}
          >
            {(props) => (
              <Form className="mb-5">
                <div className="mt-4">반 참여요청</div>
                <div className="d-flex flex-row ">
                  <fieldset className="form-group">
                    <Field
                      className="form-control"
                      type="text"
                      name="classCode"
                      placeholder="반 코드"
                    />
                  </fieldset>
                  <button
                    type="submit"
                    className="btn btn-outline-primary ms-2"
                  >
                    요청하기
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          {role === "ta" && (
            <Link
              className="btn btn-outline-secondary btn-lg mb-3"
              to="/createclass"
            >
              반 개설
            </Link>
          )}
          {/* 반 목록 */}
          <div className="mb-5">
            <ClassListItem
              classId={11}
              subjectName="컴퓨터 프로그래밍 및 실습"
              subjectCode="F081-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassListPage;
