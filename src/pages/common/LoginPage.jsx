// 로그인 페이지
import React from "react";
import style from "styles/pages/common/LoginPage.module.css";
import cn from "classnames";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

function LoginPage(props) {
  return (
    <Formik
      initialValues={{
        userId: "",
        password: "",
      }}
      enableReinitialize={true}
      onSubmit={(data) => {
        console.log(data);
      }}
      validationSchema={Yup.object().shape({
        userId: Yup.string().required("ID를 입력하세요"),
        password: Yup.string().required("비밀번호를 입력하세요"),
      })}
    >
      {(props) => (
        <Form>
          <div className="d-flex px-1 flex-column vh-100 justify-content-center align-items-center">
            {/* 로그인 */}
            <div
              className={cn(
                "d-flex flex-column justify-content-center p-5 rounded",
                style.loginBox
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
            <Link className="nav-link mt-4" to="/signup">
              회원이 아니십니까?
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default LoginPage;
