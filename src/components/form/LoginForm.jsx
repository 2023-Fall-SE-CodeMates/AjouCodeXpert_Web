import React from "react";
import style from "styles/components/form/LoginForm.module.css";
import cn from "classnames";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

function LoginForm(props) {
  return (
    <Formik
      initialValues={{
        id: "",
        pw: "",
      }}
      enableReinitialize={true}
      onSubmit={(data) => {
        console.log(data);
      }}
      validationSchema={Yup.object().shape({
        id: Yup.string()
          .matches(/^[a-zA-Z0-9]+$/)
          .required(),
        pw: Yup.string()
          .matches(/^[a-zA-Z0-9@!?]+$/)
          .required(),
      })}
    >
      {(props) => (
        <Form>
          {/* 로그인 */}
          <div
            className={cn(
              "d-flex flex-column justify-content-center p-5 rounded-3",
              style.loginBox
            )}
          >
            <fieldset className="form-group mb-2">
              <label className="form-label">ID</label>
              <Field
                type="text"
                className={`form-control ${props.errors.id && "errorField"}`}
                name="id"
              />
            </fieldset>
            <fieldset className="form-group mb-2">
              <label className="form-label">PW</label>
              <Field
                type="password"
                className={`form-control ${props.errors.pw && "errorField"}`}
                name="pw"
              />
            </fieldset>
            <div className="d-flex flex-row justify-content-center">
              <button
                type="submit"
                className={cn(
                  "btn btn-outline-primary mt-4",
                  style.loginButton
                )}
              >
                로그인
              </button>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-center">
            <Link className="nav-link mt-4" to="/signup">
              회원이 아니십니까?
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
