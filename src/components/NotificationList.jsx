import React from "react";

function NotificationList(props) {
  const notifications = [];

  return (
    <div className="border rounded-3 h-50 overflow-y-scroll">
      <ul className="list-group list-group-flush">
        <li className="list-group-item h4">An item</li>
        <li className="list-group-item h4">An item</li>
        <li className="list-group-item h4">An item</li>
        <li className="list-group-item h4">An item</li>
        <li className="list-group-item h4">An item</li>
        <li className="list-group-item h4">An item</li>
        <li className="list-group-item h4">An item</li>
        <li className="list-group-item h4">An item</li>
        <li className="list-group-item h4">An item</li>
      </ul>
    </div>
  );
}

export default NotificationList;
