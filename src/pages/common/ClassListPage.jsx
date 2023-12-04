// 반 목록 페이지
import React, { useState, useEffect } from "react";
import { useAuth } from "services/AuthContext";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import ClassListItem from "components/list/ClassListItem";
import { Link } from "react-router-dom";
import ClassJoinRequestForm from "components/form/ClassJoinRequestForm";

function ClassListPage(props) {
  const authContext = useAuth();
  const [role] = [authContext.role];

  // 반 목록 리스트
  // { id: 반 코드, name: 과목 명, code: 과목 코드, removable: 삭제 가능 여부}
  // TODO: API 명세에는 과목 코드에 대한 내용이 없음, removable의 경우 개설 TA id와 현재 id 비교해서 확인하도록 수정
  const [classList, setClassList] = useState([]);
  useEffect(() => {
    setClassList([
      {
        id: 11,
        name: "컴퓨터 프로그래밍 및 실습",
        code: "F081-1",
        removable: true,
      },
      {
        id: 12,
        name: "객체지향 프로그래밍 및 실습",
        code: "F082-1",
        removable: true,
      },
    ]);
  }, []);

  // 반 삭제했을 때 호출되는 함수
  async function handleDeleteClass(classId) {
    // 삭제 API 호출
    // admin이 확인 후 삭제하므로 반 리스트를 다시 불러올 필요 없음
    console.log("반 삭제 요청함");
  }

  return (
    <div className="d-flex flex-row">
      <Sidebar />
      <div className="flex-fill d-flex flex-column">
        <Titlebar title="반 목록" />
        <div className="container px-5">
          {/* 반 참여요청 */}
          <ClassJoinRequestForm />
          {/* 반 개설 버튼(TA) */}
          {role === "ta" && (
            <Link
              className="btn btn-outline-secondary btn-lg mb-3"
              to="/createclass"
            >
              반 개설
            </Link>
          )}
          {/* 반 목록 */}
          <div className="mb-5">
            {classList.map((classInfo) => (
              <ClassListItem
                key={classInfo.id}
                classId={classInfo.id}
                subjectName={classInfo.name}
                subjectCode={classInfo.code}
                deletable={role === "ta" ? classInfo.removable : false}
                onClickDelete={() => {
                  handleDeleteClass(classInfo.id);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassListPage;
