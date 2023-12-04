// 개인 페이지의 알림 리스트 컴포넌트
import React, { useState, useEffect } from "react";
import DeleteListItem from "./button/DeleteListItem";

// TODO: 삭제 버튼에 전달할 함수 구현
// Context에서 id 받아서 알림 리스트 불러오는 API 호출
function NotificationList(props) {
  // 알림 리스트
  // { id: 알림 id, content: 알림 내용, read: 읽음 여부}
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    setNotifications([
      {
        id: 1,
        content:
          "컴퓨터프로그래밍 및 실습 (F081-1) A반 1주차 과제 성적이 등록되었습니다",
        read: 0,
      },
      {
        id: 2,
        content:
          "컴퓨터프로그래밍 및 실습 (F043-1) A반 2주차 과제가 등록되었습니다",
        read: 0,
      },
    ]);
  }, []);

  // 알림 삭제했을 때 호출되는 함수
  async function handleDeleteNotification(notificationId) {
    // 삭제 API 호출
    // 삭제 후 알림 리스트 가져오는 API 호출, notifications 업데이트
    console.log("알림 삭제");
  }

  return (
    <div className="border rounded-3 h-50 overflow-y-scroll">
      <ul className="list-group list-group-flush pt-2">
        {notifications.map((notification) => (
          <li
            className="list-group-item h5 d-flex flex-row pb-3 justify-content-between align-items-center"
            key={notification.id}
          >
            {notification.content}
            <DeleteListItem
              onClick={() => {
                handleDeleteNotification(notification.id);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotificationList;
