// 학생 점수 테이블 폼
// 제출 확인 페이지(TA)
import React from "react";
import PropTypes from "prop-types";
import style from "styles/components/form/StudentScoreTableForm.module.css";
import cn from "classnames";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import { useParams, Link } from "react-router-dom";

StudentScoreTableForm.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  numberOfProblems: PropTypes.number.isRequired,
};

// TODO: 현재 API로 감점된 점수를 보내도록 구현됨, 필요 시 다른 정보를 보내도록 수정
// name, studentCode, delayed, deductedPoints, problemScores, totalScore, id(key)
function StudentScoreTableForm({ rows, numberOfProblems }) {
  const { classId, assignmentId } = useParams();
  return (
    <Formik
      initialValues={{
        deductedPoints: rows.map((row) => ({
          id: row.id,
          points: row.deductedPoints ? row.deductedPoints : 0,
        })),
      }}
      enableReinitialize={true}
      onSubmit={(data) => {
        console.log(data);
      }}
    >
      {(props) => (
        <Form>
          <FieldArray name="deductedPoints">
            <div>
              <div className="mt-5 mb-3">
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <h4>1주차 과제</h4>
                  <div className="flex-fill"></div>
                  <Link
                    to={`/classes/${classId}/scores`}
                    className="btn btn-outline-secondary me-2"
                  >
                    성적 페이지로 돌아가기
                  </Link>
                  <button type="submit" className="btn btn-outline-primary">
                    저장
                  </button>
                </div>
              </div>
              <div
                className={cn(
                  "overflow-x-scroll overflow-y-scroll",
                  style.tableBox
                )}
              >
                <table className="table">
                  <thead>
                    <tr>
                      <th>이름</th>
                      <th>학번</th>
                      <th>지연 제출</th>
                      <th>감점</th>
                      {Array.from(
                        { length: numberOfProblems },
                        (_, i) => i + 1
                      ).map((i) => (
                        <th key={i}>문제 {i}</th>
                      ))}
                      <th>결과</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, index) => (
                      <tr key={row.id}>
                        <td>{row.name}</td>
                        <td>{row.studentCode}</td>
                        <td>{row.delayed && "지연 제출"}</td>
                        <td>
                          <Field
                            type="number"
                            className={cn(
                              "form-control",
                              style.deductedPointsField
                            )}
                            name={`deductedPoints[${index}].points`}
                            min="0"
                          />
                        </td>
                        {Array.from(
                          { length: numberOfProblems },
                          (_, i) => i + 1
                        ).map((i) => (
                          <td key={i}>
                            <Link
                              to={`/classes/${classId}/scores/${assignmentId}/${i}/${row.id}`}
                            >
                              {row.problemScores[i - 1]}
                            </Link>
                          </td>
                        ))}
                        <td>{row.totalScore}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FieldArray>
        </Form>
      )}
    </Formik>
  );
}

export default StudentScoreTableForm;
