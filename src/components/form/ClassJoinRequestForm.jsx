import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { createClassJoinRequestApi } from "services/api";

function ClassJoinRequestForm(props) {
  return (
    <Formik
      initialValues={{
        classCode: "",
      }}
      enableReinitialize={true}
      onSubmit={async (data) => {
        if (data.classCode === "") {
          alert("참여하실 반의 반 코드를 입력해 주세요.");
          return;
        }

        const res = await createClassJoinRequestApi(data.classCode);
        console.log(res);
        if (res.status === 201) {
          alert("반 참여 요청을 보냈습니다.");
        } else {
          alert(res.data.detail);
        }
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
