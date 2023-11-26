// 회원가입 페이지
import React from "react";
import style from "../../styles/pages/common/SignUpPage.module.css";
import cn from "classnames";
import { Formik, Form, Field, FieldArray } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

function SignUpPage(props) {
  return (
    <Formik
      initialValues={{
        userId: "",
        password: "",
        userName: "",
        studentId: "",
        department: "",
        role: "",
      }}
      enableReinitialize={true}
      onSubmit={(data) => {
        console.log(data);
      }}
      validationSchema={Yup.object().shape({
        userId: Yup.string().required("ID를 입력하세요"),
        password: Yup.string().required("비밀번호를 입력하세요"),
        userName: Yup.string().required("이름을 입력하세요"),
        studentId: Yup.string().required("학번을 입력하세요"),
        department: Yup.string().required("학과를 입력하세요"),
        role: Yup.string().required("계정 구분을 입력하세요"),
      })}
    >
      {(props) => (
        <Form>
          <div className="d-flex px-1 flex-column vh-100 justify-content-center align-items-center">
            {/* 로그인 */}
            <div
              className={cn(
                "d-flex flex-column justify-content-center",
                style.signUpBox
              )}
            >
              <fieldset className="form-group mb-2">
                <label className="form-label">ID</label>
                <Field
                  type="text"
                  className={`form-control ${
                    props.errors.userId && "errorField"
                  }`}
                  name="userId"
                />
                {props.errors.userId && (
                  <div className="errorMessage">{props.errors.userId}</div>
                )}
              </fieldset>
              <fieldset className="form-group mb-2">
                <label className="form-label">PW</label>
                <Field
                  type="password"
                  className={`form-control ${
                    props.errors.password && "errorField"
                  }`}
                  name="password"
                />
                {props.errors.password && (
                  <div className="errorMessage">{props.errors.password}</div>
                )}
              </fieldset>
              <fieldset className="form-group mb-2">
                <label className="form-label">이름</label>
                <Field
                  type="text"
                  className={`form-control ${
                    props.errors.userName && "errorField"
                  }`}
                  name="userName"
                />
                {props.errors.userName && (
                  <div className="errorMessage">{props.errors.userName}</div>
                )}
              </fieldset>
              <fieldset className="form-group mb-2">
                <label className="form-label">학번</label>
                <Field
                  type="text"
                  className={`form-control ${
                    props.errors.studentId && "errorField"
                  }`}
                  name="studentId"
                />
                {props.errors.studentId && (
                  <div className="errorMessage">{props.errors.studentId}</div>
                )}
              </fieldset>
              <fieldset className="form-group mb-2">
                <label className="form-label">학과</label>
                <Field
                  as="select"
                  className={`form-select mb-2 ${
                    props.errors.department && "errorField"
                  }`}
                  name="department"
                >
                  <option selected="" />
                  <option value="소프트웨어학과">소프트웨어학과</option>
                </Field>
                {props.errors.department && (
                  <div className="errorMessage">{props.errors.department}</div>
                )}
              </fieldset>
              <fieldset className="form-group mb-2">
                <label className="form-label">계정 구분</label>
                <Field
                  as="select"
                  className={`form-select mb-2 ${
                    props.errors.role && "errorField"
                  }`}
                  name="role"
                >
                  <option selected="" />
                  <option value="student">학생</option>
                  <option value="ta">TA</option>
                </Field>
                {props.errors.role && (
                  <div className="errorMessage">{props.errors.role}</div>
                )}
              </fieldset>
              <div className="d-flex flex-row justify-content-end">
                <Link className="btn btn-outline-secondary mt-4 me-2" to="/">
                  로그인 화면으로 돌아가기
                </Link>
                <button type="submit" className="btn btn-outline-primary mt-4">
                  등록
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default SignUpPage;
