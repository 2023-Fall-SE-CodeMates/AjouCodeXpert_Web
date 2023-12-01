// 회원가입 페이지
import SignUpForm from "components/form/SignUpForm";
import React from "react";

// TODO: 학과 리스트 불러오기 전에 백엔드 요청, 폼 컴포넌트에 넘기기
function SignUpPage(props) {
  return (
    <div className="d-flex px-1 flex-column vh-100 justify-content-center align-items-center">
      <SignUpForm />
    </div>
  );
}

export default SignUpPage;
