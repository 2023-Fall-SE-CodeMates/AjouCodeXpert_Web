import React from "react";
import style from "styles/components/form/SignUpForm.module.css";
import cn from "classnames";
import { PropTypes } from "prop-types";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

SignUpForm.propTypes = {
  majorList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function SignUpForm({ majorList }) {
  return (
    <Formik
      initialValues={{
        id: "",
        pw: "",
        name: "",
        studentCode: "",
        majorCode: 0,
        roleCode: 3,
      }}
      enableReinitialize={true}
      onSubmit={(data) => {
        data = {
          ...data,
          majorCode: parseInt(data.majorCode, 10),
          roleCode: parseInt(data.roleCode, 10),
        };
        console.log(data);
      }}
      validationSchema={Yup.object().shape({
        id: Yup.string()
          .matches(/^[a-zA-Z0-9]+$/, "알파벳 및 숫자만 입력 가능합니다.")
          .required("id를 입력해 주세요."),
        pw: Yup.string()
          .matches(
            /^[a-zA-Z0-9]*[@!?][a-zA-Z0-9]*$/,
            "알파벳 및 숫자, 그리고 한 개 이상의 특수기호(! ? @)를 입력해 주세요."
          )
          .required("패스워드를 입력해 주세요."),
        name: Yup.string()
          .matches(/^[a-zA-Zㄱ-ㅎ가-힣]+$/, "영문 및 한글만 입력 가능합니다.")
          .required("이름을 입력해 주세요."),
        studentCode: Yup.string()
          .matches(/^[0-9]+$/, "숫자만 입력 가능합니다.")
          .required("학번을 입력해 주세요."),
        majorCode: Yup.number().required(),
        roleCode: Yup.number().required(),
      })}
    >
      {(props) => (
        <Form>
          <div
            className={cn(
              "d-flex flex-column justify-content-center",
              style.signUpBox
            )}
          >
            <fieldset className="form-group mt-2 d-flex flex-row align-items-baseline">
              <label
                className="form-label text-nowrap"
                style={{ width: "100px" }}
              >
                ID
              </label>
              <Field
                type="text"
                className={`form-control ${props.errors.id && "errorField"}`}
                name="id"
              />
            </fieldset>
            <div className={cn(style.errorBox)}>
              {props.errors.id && (
                <div className="errorMessage">{props.errors.id}</div>
              )}
            </div>
            <fieldset className="form-group mt-2 d-flex flex-row align-items-baseline">
              <label
                className="form-label text-nowrap"
                style={{ width: "100px" }}
              >
                PW
              </label>
              <Field
                type="password"
                className={`form-control ${props.errors.pw && "errorField"}`}
                name="pw"
              />
            </fieldset>
            <div className={cn(style.errorBox)}>
              {props.errors.pw && (
                <div className="errorMessage">{props.errors.pw}</div>
              )}
            </div>
            <fieldset className="form-group mt-2 d-flex flex-row align-items-baseline">
              <label
                className="form-label text-nowrap"
                style={{ width: "100px" }}
              >
                이름
              </label>
              <Field
                type="text"
                className={`form-control ${props.errors.name && "errorField"}`}
                name="name"
              />
            </fieldset>
            <div className={cn(style.errorBox)}>
              {props.errors.name && (
                <div className="errorMessage">{props.errors.name}</div>
              )}
            </div>
            <fieldset className="form-group mt-2 d-flex flex-row align-items-baseline">
              <label
                className="form-label text-nowrap"
                style={{ width: "100px" }}
              >
                학번
              </label>
              <Field
                type="text"
                className={`form-control ${
                  props.errors.studentCode && "errorField"
                }`}
                name="studentCode"
              />
            </fieldset>
            <div className={cn(style.errorBox)}>
              {props.errors.studentCode && (
                <div className="errorMessage">{props.errors.studentCode}</div>
              )}
            </div>
            <fieldset className="form-group mt-2 d-flex flex-row align-items-baseline">
              <label
                className="form-label text-nowrap"
                style={{ width: "100px" }}
              >
                학과
              </label>
              <Field
                as="select"
                className={`form-select mb-2 ${
                  props.errors.majorCode && "errorField"
                }`}
                name="majorCode"
              >
                {majorList.map((major) => (
                  <option key={major.code} value={major.code}>
                    {major.name}
                  </option>
                ))}
              </Field>
            </fieldset>
            <fieldset className="form-group mt-2 d-flex flex-row align-items-baseline">
              <label
                className="form-label text-nowrap"
                style={{ width: "100px" }}
              >
                계정 구분
              </label>
              <Field
                as="select"
                className={`form-select mb-2 ${
                  props.errors.roleCode && "errorField"
                }`}
                name="roleCode"
              >
                <option value={0}>학생</option>
                <option value={1}>TA</option>
              </Field>
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
        </Form>
      )}
    </Formik>
  );
}

export default SignUpForm;
