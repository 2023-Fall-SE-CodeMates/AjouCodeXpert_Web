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
        pw: Yup.string(),
        name: Yup.string(),
        studentCode: Yup.string(),
        majorCode: Yup.number(),
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
              <button type="button" className="btn btn-outline-warning mt-4">
                회원 탈퇴
              </button>
            </div>
            <fieldset className="form-group mb-2 d-flex flex-row align-items-baseline">
              <label className="form-label text-nowrap">ID</label>
              <Field type="text" className="form-control" name="id" readOnly />
            </fieldset>
            <fieldset className="form-group mb-2 d-flex flex-row align-items-baseline">
              <label className="form-label text-nowrap">PW</label>
              <Field
                type="password"
                className={`form-control ${props.errors.pw && "errorField"}`}
                name="pw"
              />
              {props.errors.pw && (
                <div className="errorMessage">{props.errors.pw}</div>
              )}
            </fieldset>
            <fieldset className="form-group mb-2 d-flex flex-row align-items-baseline">
              <label className="form-label text-nowrap">이름</label>
              <Field
                type="text"
                className={`form-control ${props.errors.name && "errorField"}`}
                name="name"
              />
              {props.errors.name && (
                <div className="errorMessage">{props.errors.name}</div>
              )}
            </fieldset>
            <fieldset className="form-group mb-2 d-flex flex-row align-items-baseline">
              <label className="form-label text-nowrap">학번</label>
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
            <fieldset className="form-group mb-2 d-flex flex-row align-items-baseline">
              <label className="form-label text-nowrap">학과</label>
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
            <fieldset className="form-group mb-2 d-flex flex-row align-items-baseline">
              <label className="form-label text-nowrap">계정 구분</label>
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
