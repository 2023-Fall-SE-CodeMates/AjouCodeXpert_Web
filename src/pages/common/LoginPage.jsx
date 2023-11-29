// 로그인 페이지
import React from "react";
import LoginForm from "components/form/LoginForm";

function LoginPage(props) {
  return (
    <div className="d-flex px-1 flex-column vh-100 justify-content-center align-items-center">
      <LoginForm />
    </div>
  );
}

export default LoginPage;
