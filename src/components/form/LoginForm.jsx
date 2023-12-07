import React from "react";
import style from "styles/components/form/LoginForm.module.css";
import cn from "classnames";
import { Formik, Form, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useAuth } from "services/AuthContext";

function LoginForm(props) {
  const authContext = useAuth();
  const [role] = [authContext.role];

  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        id: "",
        pw: "",
      }}
      enableReinitialize={true}
      onSubmit={async (data) => {
        if (await authContext.login(data.id, data.pw)) {
          navigate("/");
        } else {
          alert("로그인에 실패했습니다.");
        }
      }}
      validationSchema={Yup.object().shape({
        id: Yup.string()
          .matches(/^[a-zA-Z0-9]+$/, "알파벳 및 숫자만 입력 가능합니다.")
          .required(),
        pw: Yup.string()
          .matches(
            /^[a-zA-Z0-9@!?]+$/,
            "알파벳 및 숫자, 특수기호(! ? @)만 입력 가능합니다."
          )
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
            <fieldset className="form-group mt-2">
              <label className="form-label">ID</label>
              <Field
                type="text"
                className={`form-control ${props.errors.id && "errorField"}`}
                name="id"
              />
            </fieldset>
            <div>
              {props.errors.id && (
                <div className="errorMessage">{props.errors.id}</div>
              )}
            </div>
            <fieldset className="form-group mt-2">
              <label className="form-label">PW</label>
              <Field
                type="password"
                className={`form-control ${props.errors.pw && "errorField"}`}
                name="pw"
              />
            </fieldset>
            <div>
              {props.errors.pw && (
                <div className="errorMessage">{props.errors.pw}</div>
              )}
            </div>
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
