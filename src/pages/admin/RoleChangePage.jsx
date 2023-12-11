// 계정 권한 변경 페이지
import React, { useState, useEffect } from "react";
import style from "styles/pages/admin/RoleChangePage.module.css";
import cn from "classnames";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import MemberTable from "components/table/MemberTable";
import {
  acceptRoleChangeRequestApi,
  rejectRoleChangeRequestApi,
  retrieveRoleChangeRequestListApi,
} from "services/api";

function RoleChangePage(props) {
  // 권한 변경 신청 목록
  // [{name: 이름, studentCode: 학번, major: 전공, role: 신청할 권한, id: 아이디}]
  const [roleChangeRequests, setRoleChangeRequests] = useState([]);

  useEffect(() => {
    retrieveRoleChangeRequestListApi().then((res) => {
      console.log(res);
      setRoleChangeRequests(
        res.data.map((item) => {
          return {
            name: item.name,
            studentCode: item.studentId,
            major: item.majorName,
            role: "TA", // 학생 계정으로 가입해서 TA 권한을 요청한 상태
            rowId: item.requestId,
            id: item.loginId,
            acceptFunc: () => {
              console.log("accept");
              acceptRoleChangeRequestApi(item.requestId).then((res) => {
                console.log(res);
                setRoleChangeRequests((prev) =>
                  prev.filter((row) => row.rowId !== item.requestId)
                );
              });
            },
            rejectFunc: () => {
              console.log("reject");
              rejectRoleChangeRequestApi(item.requestId).then((res) => {
                console.log(res);
                setRoleChangeRequests((prev) =>
                  prev.filter((row) => row.rowId !== item.requestId)
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
      <Sidebar />
      <div className="flex-fill d-flex flex-column">
        <Titlebar title="계정 권한 변경" />
        <div className="container px-5">
          {/* 구성원 목록 */}
          <div className={cn("mt-5", style.fullHeightBox)}>
            <h5>계정 권한 변경 신청 내역</h5>
            <div
              className={cn(
                "overflow-x-scroll overflow-y-scroll",
                style.tableBox
              )}
            >
              <MemberTable
                rows={roleChangeRequests}
                showAdminButton={false}
                showAcceptRequestButton={false}
                showAcceptRoleChangeButton={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoleChangePage;
