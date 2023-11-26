import React from "react";
import PropTypes from "prop-types";
import DeleteListItem from "components/button/DeleteListItem";

AnnouncementListItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  createdAt: PropTypes.string,
  author: PropTypes.string,
};

function AnnouncementListItem({ title, content, createdAt, author }) {
  return (
    <div className="mx-5 my-4 px-5 pt-4 pb-3 border rounded-3">
      <div className="d-flex flex-row">
        <h3>{title}</h3>
        <p className="flex-grow-1" />
        <p className="me-2">{author}</p>
        <p className="me-2">{createdAt}</p>
        <DeleteListItem />
      </div>
      <p className="mt-2">{content}</p>
    </div>
  );
}

export default AnnouncementListItem;
