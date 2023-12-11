import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { createClassApi } from "services/api";
import { useNavigate } from "react-router-dom";

function CreateClassForm(props) {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        subjectName: "",
        subjectCode: "",
      }}
      enableReinitialize={true}
      onSubmit={async (data) => {
        if (data.subjectName === "") {
          alert("과목명을 입력해 주세요.");
          return;
        }
        if (data.subjectCode === "") {
          alert("과목 코드를 입력해 주세요.");
          return;
        }

        console.log(data);
        const res = await createClassApi(data.subjectCode, data.subjectName);
        if (res.status === 204) {
          alert("과목 개설 요청이 완료되었습니다.");
          navigate("/classes");
        } else {
          alert("과목 개설 요청에 실패했습니다.");
        }
      }}
      validationSchema={Yup.object().shape({
        subjectName: Yup.string(),
        subjectCode: Yup.string(),
      })}
    >
      {(props) => (
        <Form className="mt-5 w-50">
          <fieldset className="d-flex flex-row d-flex align-items-baseline form-group my-3">
            <label
              className="form-label text-nowrap"
              style={{ width: "100px" }}
            >
              과목명
            </label>
            <Field className="form-control" type="text" name="subjectName" />
          </fieldset>
          <fieldset className="d-flex flex-row d-flex align-items-baseline form-group my-3">
            <label
              className="form-label text-nowrap"
              style={{ width: "100px" }}
            >
              과목 코드
            </label>
            <Field className="form-control" type="text" name="subjectCode" />
          </fieldset>
          <div className="d-flex flex-row justify-content-end">
            <button type="submit" className="btn btn-outline-primary ms-2">
              개설 요청
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default CreateClassForm;
