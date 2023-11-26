import React from "react";
import { BsTrash3 } from "react-icons/bs";
import { PropTypes } from "prop-types";

DeleteListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
};

// TODO: onclick은 deleteAPI 호출하고, 리스트를 다시 불러와야 함
function DeleteListItem({ onClick }) {
  return (
    <div className="clickable" onClick={onClick}>
      <BsTrash3 />
    </div>
  );
}

export default DeleteListItem;
