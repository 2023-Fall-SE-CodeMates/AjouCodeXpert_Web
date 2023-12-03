// 회원가입 페이지
import SignUpForm from "components/form/SignUpForm";
import React, { useState, useEffect } from "react";

// TODO: 학과 리스트 불러오기 전에 백엔드 요청, 폼 컴포넌트에 넘기기
function SignUpPage(props) {
  // 학과 리스트
  // { code: 학과 구분을 위한 코드, name: 학과명 }
  const [majorList, setMajorList] = useState([]);

  useEffect(() => {
    setMajorList([
      { code: 0, name: "기계공학과" },
      { code: 1, name: "금융공학과" },
      { code: 2, name: "산업공학과" },
    ]);
  }, []);

  return (
    <div className="d-flex px-1 flex-column vh-100 justify-content-center align-items-center">
      <SignUpForm majorList={majorList} />
    </div>
  );
}

export default SignUpPage;
