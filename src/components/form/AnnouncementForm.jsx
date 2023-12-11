import React from "react";
import style from "styles/components/form/AnnouncementForm.module.css";
import cn from "classnames";
import { PropTypes } from "prop-types";
import { Formik, Form, Field } from "formik";
import { Link, useParams, useNavigate } from "react-router-dom";
import * as Yup from "yup";

AnnouncementForm.propTypes = {
  announcement: PropTypes.object.isRequired, // 초기값
};

function AnnouncementForm({ announcement }) {
  const { classId, announcementId } = useParams();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        title: announcement.title,
        content: announcement.content,
      }}
      enableReinitialize={true}
      onSubmit={(data) => {
        if (announcementId === "create") {
          // POST
          console.log(data);
        } else {
          // PUT
          console.log(data);
        }
        navigate(`/classes/${classId}/announcements`);
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
              <button type="submit" className="btn btn-outline-primary mt-4">
                등록
              </button>
            </div>
            <fieldset className="form-group mb-2">
              <label className="form-label">제목</label>
              <Field className="form-control" type="text" name="title" />
            </fieldset>
            <fieldset className="form-group my-2">
              <label className="form-label">내용</label>
              <Field
                as="textarea"
                className={cn(
                  "form-control overflow-y-scroll",
                  style.contentBox
                )}
                name="content"
              />
            </fieldset>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default AnnouncementForm;
