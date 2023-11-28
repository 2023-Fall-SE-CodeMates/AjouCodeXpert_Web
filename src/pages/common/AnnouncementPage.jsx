// 공지 페이지
import React from "react";
import { useAuth } from "services/AuthContext";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import AnnouncementListItem from "components/list/AnnouncementListItem";
import { Link, useParams } from "react-router-dom";

function AnnouncementPage(props) {
  const { classId } = useParams();
  const authContext = useAuth();
  const [role] = [authContext.role];

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
            <AnnouncementListItem
              title="aaa"
              author="aa"
              createdAt="aa"
              content="Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
            dalaracc lacus vel facilisis volutpat est velitolm. Lorem ipsum
            dolor sit amet consecte tur adipiscing elit semper dalaracc lacus
            vel facilisis volutpat est velitolm. Lorem ipsum dolor sit amet
            consecte tur adipiscing elit semper dalaracc lacus vel facilisis
            volutpat est velitolm. Lorem ipsum dolor sit amet consecte tur
            adipiscing elit semper dalaracc lacus vel facilisis volutpat est
            velitolm. Lorem ipsum dolor sit amet consecte tur adipiscing elit
            semper dalaracc lacus vel facilisis volutpat est velitolm. Lorem
            ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc
            lacus vel facilisis volutpat est velitolm."
              AnnouncementId={1}
              classId={classId}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementPage;
