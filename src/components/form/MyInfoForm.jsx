import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function MyInfoForm(props) {
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
        pw: Yup.string(),
        name: Yup.string(),
        studentCode: Yup.string(),
        major: Yup.number(),
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
            <fieldset className="form-group mb-2">
              <label className="form-label">ID</label>
              <Field type="text" className="form-control" name="id" readOnly />
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
                className={`form-control ${props.errors.name && "errorField"}`}
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
                {props.values.roleCode == 1 && (
                  <option selected="1">교수</option>
                )}
                {props.values.roleCode == 2 && <option selected="2">TA</option>}
                {props.values.roleCode == 3 && (
                  <option selected="3">학생</option>
                )}
              </Field>
            </fieldset>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default MyInfoForm;
