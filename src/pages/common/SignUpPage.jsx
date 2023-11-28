// 회원가입 페이지
import React from "react";
import style from "styles/pages/common/SignUpPage.module.css";
import cn from "classnames";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

// TODO: 학과 리스트 불러오기 전에 백엔드 요청
// TODO: 입력 제약조건 추가
function SignUpPage(props) {
  return (
    <Formik
      initialValues={{
        id: "",
        pw: "",
        name: "",
        studentCode: "",
        majorCode: "",
        roleCode: "",
      }}
      enableReinitialize={true}
      onSubmit={(data) => {
        console.log(data);
      }}
      validationSchema={Yup.object().shape({
        id: Yup.string().required("ID를 입력하세요"),
        pw: Yup.string().required("비밀번호를 입력하세요"),
        name: Yup.string().required("이름을 입력하세요"),
        studentCode: Yup.string().required("학번을 입력하세요"),
        majorCode: Yup.number().required("학과를 입력하세요"),
        roleCode: Yup.number().required("계정 구분을 입력하세요"),
      })}
    >
      {(props) => (
        <Form>
          <div className="d-flex px-1 flex-column vh-100 justify-content-center align-items-center">
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
                  className={`form-control ${props.errors.id && "errorField"}`}
                  name="id"
                />
                {props.errors.id && (
                  <div className="errorMessage">{props.errors.id}</div>
                )}
              </fieldset>
              <fieldset className="form-group mb-2">
                <label className="form-label">PW</label>
                <Field
                  type="password"
                  className={`form-control ${props.errors.pw && "errorField"}`}
                  name="pw"
                />
                {props.errors.pw && (
                  <div className="errorMessage">{props.errors.pw}</div>
                )}
              </fieldset>
              <fieldset className="form-group mb-2">
                <label className="form-label">이름</label>
                <Field
                  type="text"
                  className={`form-control ${
                    props.errors.name && "errorField"
                  }`}
                  name="name"
                />
                {props.errors.name && (
                  <div className="errorMessage">{props.errors.name}</div>
                )}
              </fieldset>
              <fieldset className="form-group mb-2">
                <label className="form-label">학번</label>
                <Field
                  type="text"
                  className={`form-control ${
                    props.errors.studentCode && "errorField"
                  }`}
                  name="studentCode"
                />
                {props.errors.studentCode && (
                  <div className="errorMessage">{props.errors.studentCode}</div>
                )}
              </fieldset>
              <fieldset className="form-group mb-2">
                <label className="form-label">학과</label>
                <Field
                  as="select"
                  className={`form-select mb-2 ${
                    props.errors.majorCode && "errorField"
                  }`}
                  name="majorCode"
                >
                  <option selected="" />
                  <option value="0">소프트웨어학과</option>
                </Field>
                {props.errors.majorCode && (
                  <div className="errorMessage">{props.errors.majorCode}</div>
                )}
              </fieldset>
              <fieldset className="form-group mb-2">
                <label className="form-label">계정 구분</label>
                <Field
                  as="select"
                  className={`form-select mb-2 ${
                    props.errors.roleCode && "errorField"
                  }`}
                  name="roleCode"
                >
                  <option selected="" />
                  <option value="1">교수</option>
                  <option value="2">TA</option>
                  <option value="3">학생</option>
                </Field>
                {props.errors.roleCode && (
                  <div className="errorMessage">{props.errors.roleCode}</div>
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
