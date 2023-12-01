// 개인 페이지
import React from "react";
import style from "styles/pages/common/PersonalPage.module.css";
import cn from "classnames";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import NotificationList from "components/NotificationList";
import MyInfoForm from "components/form/MyInfoForm";

function PersonalPage(props) {
  return (
    <div className="d-flex flex-row">
      <Sidebar />
      <div className="flex-fill d-flex flex-column">
        <Titlebar title="개인 정보" />
        <div className="container px-5">
          <div className={cn("d-flex flex-row", style.contentsBox)}>
            {/* 개인정보 수정 폼 */}
            <div className="w-50 mx-5 d-flex flex-column justify-content-center overflow-y-hidden">
              <MyInfoForm />
            </div>
            {/* 알림 리스트 */}
            <div className="w-50 mx-5 d-flex flex-column justify-content-center">
              <h4 className="mb-3">알림</h4>
              <NotificationList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalPage;
