// 구성원 관리 페이지
import React, { useState, useEffect } from "react";
import style from "styles/pages/ta/MemberManagementPage.module.css";
import cn from "classnames";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import MemberTable from "components/table/MemberTable";
import { useParams } from "react-router-dom";
import {
  acceptJoinRequestApi,
  rejectJoinRequestApi,
  retrieveRequestersApi,
} from "services/api";

// TODO: 학과 리스트 API로 받아와야 할 듯
function MemberManagementPage(props) {
  const { classId } = useParams();

  // 반에 소속된 모든 학생 리스트
  // {id: 학생 id, name: 학생 이름, major: 학과, studentCode: 학번, role: 역할}
  const [members, setMembers] = useState([]);

  // 반에 참여 요청을 보낸 학생 리스트
  // {id: 학생 id, name: 학생 이름, major: 학과, studentCode: 학번, role: 역할}
  const [requesters, setRequesters] = useState([]);

  // rowId를 학생 id로
  useEffect(() => {
    setMembers([
      // {
      //   id: "thkim123",
      //   name: "김태훈",
      //   studentCode: "2018101234",
      //   major: "소프트웨어학과",
      //   role: "학생",
      // },
      // {
      //   id: "sbinpark",
      //   name: "박승빈",
      //   studentCode: "2018101235",
      //   major: "소프트웨어학과",
      //   role: "학생",
      // },
      // {
      //   id: "lhjhjhj",
      //   name: "이재현",
      //   studentCode: "2018101236",
      //   major: "소프트웨어학과",
      //   role: "학생",
      // },
    ]);
    retrieveRequestersApi(classId).then((res) => {
      console.log(res);
      setRequesters(
        res.data.map((item) => {
          return {
            name: item.studentName,
            studentCode: item.studentId,
            major: item.majorName,
            role: item.roleName === "STUDENT" ? "학생" : "TA",
            id: item.loginId,
            rowId: item.id,
            acceptFunc: () => {
              console.log("accept");
              acceptJoinRequestApi(item.id).then((res) => {
                console.log(res);
                setRequesters((prev) =>
                  prev.filter((row) => row.rowId !== item.id)
                );
              });
            },
            rejectFunc: () => {
              console.log("reject");
              rejectJoinRequestApi(item.id).then((res) => {
                console.log(res);
                setRequesters((prev) =>
                  prev.filter((row) => row.rowId !== item.id)
                );
              });
            },
          };
        })
      );
    });
  }, []);

  return (
    <div className="d-flex flex-row">
      <Sidebar classId={classId} subjectName="컴퓨터프로그래밍 및 실습" />
      <div className="flex-fill d-flex flex-column">
        <Titlebar title="구성원 관리" />
        <div className="container px-5">
          {/* 반 코드 */}
          <div className="mt-5">
            <h4>반 코드</h4>
          </div>
          {/* 구성원 목록 */}
          <h5 className="mt-4">구성원 목록</h5>
          <div
            className={cn(
              "overflow-x-scroll overflow-y-scroll",
              style.tableBox
            )}
          >
            <MemberTable
              rows={members}
              showAdminButton={false}
              showAcceptJoinButton={false}
              showAcceptRoleChangeButton={false}
            />
          </div>
          {/* 참여 요청 */}
          <h5 className="mt-4">참여 요청</h5>
          <div
            className={cn(
              "overflow-x-scroll overflow-y-scroll",
              style.tableBox
            )}
          >
            <MemberTable
              rows={requesters}
              showAdminButton={false}
              showAcceptJoinButton={true}
              showAcceptRoleChangeButton={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberManagementPage;
