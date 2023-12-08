// 공지 추가/수정 페이지
import React, { useState, useEffect } from "react";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import AnnouncementForm from "components/form/AnnouncementForm";
import { useParams } from "react-router-dom";

function AnnouncementAddModifyPage(props) {
  const { classId, announcementId } = useParams();

  // 공지사항 제목, 내용
  // {title: 공지 제목, content: 공지 내용}
  // 공지사항 수정 시 API 호출해서 기존 내용 가져오기
  const [announcement, setAnnouncement] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    if (announcementId !== "create") {
      setAnnouncement({
        title: "다음 주 과제는 없습니다.",
        content:
          "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
      });
    }

    // 페이지 이동 시 경고창 띄우기
    function handleBeforeUnload(e) {
      e.preventDefault();
      e.returnValue = "";
    }
    window.addEventListener("beforeunload", handleBeforeUnload, {
      capture: true,
    });
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload, {
        capture: true,
      });
    };
  }, []);

  return (
    <div>
      <div className="d-flex flex-row">
        <Sidebar classId={classId} subjectName="컴퓨터프로그래밍" />
        <div className="flex-fill d-flex flex-column">
          <Titlebar title="공지 추가/수정" />
          <div className="container px-5">
            <AnnouncementForm announcement={announcement} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementAddModifyPage;
