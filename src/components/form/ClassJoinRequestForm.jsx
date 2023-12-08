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
        if (data.classCode === "") {
          alert("참여하실 반의 반 코드를 입력해 주세요.");
          return;
        }

        // TODO: 존재하지 않는 반 초대 코드 입력될 경우 오류창 띄우기

        alert("반 참여 요청을 보냈습니다.");
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
