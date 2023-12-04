import React from "react";
import { BsTrash3 } from "react-icons/bs";
import { PropTypes } from "prop-types";

DeleteListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
};

function DeleteListItem({ onClick }) {
  return (
    <div className="clickable me-2" onClick={onClick}>
      <BsTrash3 size="23" />
    </div>
  );
}

export default DeleteListItem;
