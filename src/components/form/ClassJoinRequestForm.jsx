import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function ClassJoinRequestForm(props) {
  return (
    <Formik
      initialValues={{
        classCode: "",
      }}
      enableReinitialize={true}
      onSubmit={(data) => {
        console.log(data);
      }}
      validationSchema={Yup.object().shape({
        classCode: Yup.string(),
      })}
    >
      {(props) => (
        <Form className="mb-5">
          <div className="mt-4">반 참여요청</div>
          <div className="d-flex flex-row ">
            <fieldset className="form-group">
              <Field
                className="form-control"
                type="text"
                name="classCode"
                placeholder="반 코드"
              />
            </fieldset>
            <button type="submit" className="btn btn-outline-primary ms-2">
              요청하기
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ClassJoinRequestForm;
