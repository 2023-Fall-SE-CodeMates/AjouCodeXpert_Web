import React, { useEffect, useState } from "react";
import style from "styles/components/form/MyInfoForm.module.css";
import cn from "classnames";
import { PropTypes } from "prop-types";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

MyInfoForm.propTypes = {
  majorList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function MyInfoForm({ majorList }) {
  // 개인 정보
  // {id, pw, name, studentCode, majorCode, majorName, roleCode, roleName}
  const [myInfo, setMyInfo] = useState({});
  useEffect(() => {
    setMyInfo({
      id: "james",
      pw: "",
      name: "김재민",
      studentCode: "20151111",
      majorCode: 2,
      roleCode: 3,
    });
  }, []);

  return (
    <Formik
      initialValues={{
        id: myInfo.id,
        pw: "",
        name: myInfo.name,
        studentCode: myInfo.studentCode,
        majorCode: myInfo.majorCode,
        roleCode: myInfo.roleCode,
      }}
      enableReinitialize={true}
      onSubmit={(data) => {
        data = { ...data, majorCode: parseInt(data.majorCode, 10) };
        console.log(data);
      }}
      validationSchema={Yup.object().shape({
        pw: Yup.string().matches(
          /^[a-zA-Z0-9]*[@!?][a-zA-Z0-9]*$/,
          "알파벳 및 숫자, 그리고 한 개 이상의 특수기호(! ? @)를 입력해 주세요."
        ),
        name: Yup.string()
          .matches(/^[a-zA-Zㄱ-ㅎ가-힣]+$/, "영문 및 한글만 입력 가능합니다.")
          .required("이름을 입력해 주세요."),
        studentCode: Yup.string()
          .matches(/^[0-9]+$/, "숫자만 입력 가능합니다.")
          .required("학번을 입력해 주세요."),
        majorCode: Yup.number().required(),
      })}
    >
      {(props) => (
        <Form>
          <div className="d-flex flex-column justify-content-center">
            <div className="d-flex flex-row mb-3">
              <button
                type="submit"
                className="btn btn-outline-primary mt-4 me-2"
              >
                수정
              </button>
              <button
                type="button"
                onClick={() => {
                  const result = window.confirm("정말로 탈퇴하시겠습니까?");
                  if (result) {
                    // 탈퇴 처리
                    alert("탈퇴되었습니다.");
                  }
                }}
                className="btn btn-outline-warning mt-4"
              >
                회원 탈퇴
              </button>
            </div>
            <fieldset className="form-group mt-2 d-flex flex-row align-items-baseline">
              <label
                className="form-label text-nowrap"
                style={{ width: "100px" }}
              >
                ID
              </label>
              <Field type="text" className="form-control" name="id" readOnly />
            </fieldset>
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
                value={props.values.majorCode}
              >
                {majorList.map((major) => (
                  <option key={major.code} value={major.code}>
                    {major.name}
                  </option>
                ))}
              </Field>
              {props.errors.majorCode && (
                <div className="errorMessage">{props.errors.majorCode}</div>
              )}
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
                value={props.values.roleCode}
              >
                {props.values.roleCode == 1 && <option value="1">교수</option>}
                {props.values.roleCode == 2 && <option value="2">TA</option>}
                {props.values.roleCode == 3 && <option value="3">학생</option>}
              </Field>
            </fieldset>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default MyInfoForm;
