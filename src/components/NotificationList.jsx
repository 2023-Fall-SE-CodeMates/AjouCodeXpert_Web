import React from "react";
import DeleteListItem from "./button/DeleteListItem";

function NotificationList(props) {
  const notifications = [];

  return (
    <div className="border rounded-3 h-50 overflow-y-scroll">
      <ul className="list-group list-group-flush">
        <li className="list-group-item h4 d-flex flex-row justify-content-between">
          공지사항이 등록되었습니다.
          <DeleteListItem />
        </li>
        <li className="list-group-item h4 d-flex flex-row justify-content-between">
          공지사항이 등록되었습니다.
          <DeleteListItem />
        </li>
      </ul>
    </div>
  );
}

export default NotificationList;
