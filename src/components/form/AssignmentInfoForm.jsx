import React from "react";
import style from "styles/components/form/AssignmentInfoForm.module.css";
import cn from "classnames";
import PropTypes from "prop-types";
import { Formik, Form, Field, FieldArray } from "formik";
import { Link, useParams } from "react-router-dom";

AssignmentInfoForm.propTypes = {
  problemObjList: PropTypes.arrayOf(Object).isRequired, // 문제 내용 리스트, 과제 정보 등록 시 같이 등록됨
};

function AssignmentInfoForm({ problemObjList }) {
  const { classId, assignmentId } = useParams();
  return (
    <Formik
      initialValues={{
        title: "",
        dueDate: "",
        description: "",
        problemObjList: problemObjList,
      }}
      enableReinitialize={true}
      onSubmit={(data) => {
        console.log(data);
      }}
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
            className={cn("form-control", style.titleField)}
            name="title"
          />
          <div className="d-flex flex-row mt-3 align-items-baseline">
            <label className={cn("form-label me-2", style.dueLabel)}>
              마감일:
            </label>
            <Field
              type="datetime-local"
              className={cn("form-control", style.dueField)}
              name="dueDate"
            />
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
