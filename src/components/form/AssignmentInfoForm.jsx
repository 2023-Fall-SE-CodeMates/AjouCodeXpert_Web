import React from "react";
import moment from "moment";
import style from "styles/components/form/AssignmentInfoForm.module.css";
import cn from "classnames";
import PropTypes from "prop-types";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import { Link, useParams, useNavigate } from "react-router-dom";
import { createAssignmentApi, updateAssignmentApi } from "services/api";

AssignmentInfoForm.propTypes = {
  assignmentInfo: PropTypes.object.isRequired, // 초기값
  problemInfoList: PropTypes.arrayOf(Object).isRequired, // 문제 내용 리스트, 과제 정보 등록 시 같이 등록됨
  setAssignmentInfo: PropTypes.func.isRequired, // 정보 변경 시 호출
};

function AssignmentInfoForm({
  assignmentInfo,
  problemInfoList,
  setAssignmentInfo,
}) {
  const { classId, assignmentId } = useParams();

  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        title: assignmentInfo.title,
        dueDate: assignmentInfo.closedAt,
        description: assignmentInfo.content,
        problemInfoList: problemInfoList,
      }}
      enableReinitialize={true}
      onSubmit={async (data) => {
        if (data.problemInfoList.length === 0) {
          alert("문제를 하나 이상 등록해야 합니다.");
          return;
        }

        const title = data.title;
        const endDate = new moment(data.dueDate).format("YYYY-MM-DDTHH:mm:ss");
        const content = data.description;
        const problems = data.problemInfoList.map((item) => {
          return {
            index: item.isNew ? null : item.index,
            langCode:
              item.language === "c" ? 0 : item.language === "java" ? 1 : 2,
            points: item.points,
            description: item.explanation,
            // TODO: 프롬프트
            // prompt: item.prompt,
            testCases: item.tc,
          };
        });

        console.log({ title, endDate, content, problems });

        if (assignmentId === "create") {
          const res = await createAssignmentApi(
            classId,
            title,
            content,
            endDate,
            problems
          );
          console.log(res);
          if (res.status === 201) {
            alert("과제가 등록되었습니다.");
            navigate(`/classes/${classId}/assignments`);
          }
        } else {
          const res = await updateAssignmentApi(
            classId,
            assignmentId,
            title,
            content,
            endDate,
            problems
          );
          console.log(res);
          if (res.status === 204) {
            alert("과제가 수정되었습니다.");
            navigate(`/classes/${classId}/assignments`);
          }
        }
      }}
      validationSchema={Yup.object().shape({
        title: Yup.string().required("과제 제목을 입력하세요."),
        dueDate: Yup.date().required("마감일을 입력하세요."),
        description: Yup.string(),
      })}
    >
      {(props) => {
        return (
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
              onChange={(e) => {
                e.persist = () => {};
                props.handleChange(e);
                setAssignmentInfo({
                  ...assignmentInfo,
                  title: e.target.value,
                });
              }}
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
                onChange={(e) => {
                  e.persist = () => {};
                  props.handleChange(e);
                  setAssignmentInfo({
                    ...assignmentInfo,
                    closedAt: e.target.value,
                  });
                }}
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
              onChange={(e) => {
                e.persist = () => {};
                props.handleChange(e);
                setAssignmentInfo({
                  ...assignmentInfo,
                  content: e.target.value,
                });
              }}
            />
          </Form>
        );
      }}
    </Formik>
  );
}

export default AssignmentInfoForm;
