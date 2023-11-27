// 공지 추가/수정 페이지
import React from "react";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import { Formik, Form, Field } from "formik";
import { Link, useParams } from "react-router-dom";
import * as Yup from "yup";

// TODO: 공지사항 수정인지 추가인지에 따라서 다르게 처리하기
function AnnouncementAddModifyPage(props) {
  const { classId } = useParams();

  return (
    <div>
      <div className="d-flex flex-row">
        <Sidebar classId="11" className="컴퓨터프로그래밍" />
        <div className="flex-fill d-flex flex-column">
          <Titlebar title="공지 추가/수정" />
          <div className="container px-5">
            <Formik
              initialValues={{
                title: "",
                content: "",
              }}
              enableReinitialize={true}
              onSubmit={(data) => {
                console.log(data);
              }}
              validationSchema={Yup.object().shape({
                title: Yup.string(),
                content: Yup.string(),
              })}
            >
              {(props) => (
                <Form>
                  <div className="d-flex px-5 flex-column ">
                    <div className="d-flex flex-row justify-content-end">
                      <Link
                        className="btn btn-outline-secondary mt-4 me-2"
                        to={`/classes/${classId}/announcements`}
                      >
                        공지 목록으로 돌아가기
                      </Link>
                      <button
                        type="submit"
                        className="btn btn-outline-primary mt-4"
                      >
                        등록
                      </button>
                    </div>
                    <fieldset className="form-group mb-2">
                      <label className="form-label">제목</label>
                      <Field
                        className="form-control"
                        type="text"
                        name="title"
                      />
                    </fieldset>
                    <fieldset className={"form-group flex-grow-1 my-2"}>
                      <label className="form-label">내용</label>
                      <Field
                        as="textarea"
                        className="form-control overflow-y-scroll"
                        name="content"
                      />
                    </fieldset>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementAddModifyPage;
