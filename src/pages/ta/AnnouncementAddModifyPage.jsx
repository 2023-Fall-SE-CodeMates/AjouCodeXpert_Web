// 공지 추가/수정 페이지
import React from "react";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import AnnouncementForm from "components/form/AnnouncementForm";

function AnnouncementAddModifyPage(props) {
  return (
    <div>
      <div className="d-flex flex-row">
        <Sidebar classId="11" className="컴퓨터프로그래밍" />
        <div className="flex-fill d-flex flex-column">
          <Titlebar title="공지 추가/수정" />
          <div className="container px-5">
            <AnnouncementForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementAddModifyPage;
