// 공지 페이지
import React from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "services/AuthContext";
import Sidebar from "components/Sidebar";
import Titlebar from "components/Titlebar";
import AnnouncementListItem from "components/list/AnnouncementListItem";

function AnnouncementPage(props) {
  const { classId } = useParams();

  return (
    <div className="d-flex flex-row">
      <Sidebar classId={classId} className="컴퓨터프로그래밍" />
      <div className="flex-fill d-flex flex-column">
        <Titlebar title="공지사항" />
        <div className="container px-5">
          <div className="my-5">
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
              id={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementPage;
