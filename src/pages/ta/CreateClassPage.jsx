// 반 개설 페이지
import React from "react";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import CreateClassForm from "components/form/CreateClassForm";

function CreateClassPage(props) {
  return (
    <div className="d-flex flex-row">
      <Sidebar />
      <div className="flex-fill d-flex flex-column">
        <Titlebar title="반 개설" />
        <div className="container px-5">
          <div className="d-flex flex-row justify-content-center">
            <CreateClassForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateClassPage;
