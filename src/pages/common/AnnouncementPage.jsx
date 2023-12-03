// 공지 페이지
import React, { useState, useEffect } from "react";
import { useAuth } from "services/AuthContext";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import AnnouncementListItem from "components/list/AnnouncementListItem";
import { Link, useParams } from "react-router-dom";

function AnnouncementPage(props) {
  const { classId } = useParams();
  const authContext = useAuth();
  const [role] = [authContext.role];

  // 공지 목록 리스트
  // {id: 공지id, title: 공지 제목, content: 공지 내용, createdAt: 생성시각, editable: 수정가능, removable: 삭제 가능}
  const [announcementList, setAnnouncementList] = useState([]);
  useEffect(() => {
    setAnnouncementList([
      {
        id: 1,
        title: "다음 주 과제는 없습니다.",
        content:
          "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
        createdAt: "2021-09-01",
        editable: true,
        removable: true,
      },
      {
        id: 2,
        title: "이의제기 관련입니다.",
        content:
          "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
        createdAt: "2021-09-15",
        editable: false,
        removable: false,
      },
    ]);
  }, []);

  return (
    <div className="d-flex flex-row">
      <Sidebar classId={classId} subjectName="컴퓨터프로그래밍" />
      <div className="flex-fill d-flex flex-column">
        <Titlebar title="공지사항" />
        <div className="container px-5">
          <div className="mt-5">
            {role === "ta" && (
              <Link
                className="btn btn-outline-secondary btn-lg mb-3"
                to={`/classes/${classId}/announcements/create`}
              >
                공지 추가
              </Link>
            )}
            {announcementList.map((announcementInfo) => (
              <AnnouncementListItem
                key={announcementInfo.id}
                classId={classId}
                announcementId={announcementInfo.id}
                title={announcementInfo.title}
                content={announcementInfo.content}
                createdAt={announcementInfo.createdAt}
                editable={announcementInfo.editable}
                deletable={announcementInfo.removable}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementPage;
