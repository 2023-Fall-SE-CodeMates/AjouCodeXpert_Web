import React from "react";
import style from "styles/components/form/AssignmentInfoForm.module.css";
import cn from "classnames";
import PropTypes from "prop-types";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import { Link, useParams } from "react-router-dom";

AssignmentInfoForm.propTypes = {
  assignmentInfo: PropTypes.object.isRequired, // 초기값
  problemInfoList: PropTypes.arrayOf(Object).isRequired, // 문제 내용 리스트, 과제 정보 등록 시 같이 등록됨
};

function AssignmentInfoForm({ assignmentInfo, problemInfoList }) {
  const { classId, assignmentId } = useParams();
  return (
    <Formik
      initialValues={{
        title: assignmentInfo.title,
        dueDate: assignmentInfo.closedAt,
        description: assignmentInfo.content,
        problemInfoList: problemInfoList,
      }}
      enableReinitialize={true}
      onSubmit={(data) => {
        if (data.problemInfoList.length === 0) {
          alert("문제를 하나 이상 등록해야 합니다.");
          return;
        }
        if (assignmentId === "create") {
          // POST
          console.log(data);
        } else {
          // PUT
          console.log(data);
        }
      }}
      validationSchema={Yup.object().shape({
        title: Yup.string().required("과제 제목을 입력하세요."),
        dueDate: Yup.date().required("마감일을 입력하세요."),
        description: Yup.string(),
      })}
    >
      {(props) => (
        <Form>
          <div className="d-flex flex-row justify-content-end mb-3">
            <Link
              className="btn btn-outline-secondary mt-4 me-2"
              to={`/classes/${classId}/assignments`}
            >
              과제 목록으로 돌아가기
            </Link>
            <button type="submit" className="btn btn-outline-primary mt-4">
              과제 정보 등록
            </button>
          </div>
          <Field
            type="text"
            className={cn(
              `form-control ${props.errors.title && "errorField"}`,
              style.titleField
            )}
            name="title"
          />
          <div>
            {props.errors.title && (
              <div className="errorMessage">{props.errors.title}</div>
            )}
          </div>
          <div className="d-flex flex-row mt-3 align-items-baseline">
            <label className={cn("form-label me-2", style.dueLabel)}>
              마감일:
            </label>
            <Field
              type="datetime-local"
              className={cn(
                `form-control ${props.errors.dueDate && "errorField"}`,
                style.dueField
              )}
              name="dueDate"
            />
          </div>
          <div style={{ marginLeft: "70px" }}>
            {props.errors.dueDate && (
              <div className="errorMessage">{props.errors.dueDate}</div>
            )}
          </div>
          <Field
            as="textarea"
            className={cn(
              "form-control overflow-y-scroll mt-3",
              style.explanationBox
            )}
            name="description"
          />
        </Form>
      )}
    </Formik>
  );
}

export default AssignmentInfoForm;
