import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function CreateClassForm(props) {
  return (
    <Formik
      initialValues={{
        subjectName: "",
        subjectCode: "",
      }}
      enableReinitialize={true}
      onSubmit={(data) => {
        if (data.subjectName === "") {
          alert("과목명을 입력해 주세요.");
          return;
        }
        if (data.subjectCode === "") {
          alert("과목 코드를 입력해 주세요.");
          return;
        }
        console.log(data);
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
