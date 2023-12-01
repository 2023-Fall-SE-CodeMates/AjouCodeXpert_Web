import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

EditListItem.propTypes = {
  link: PropTypes.string.isRequired,
};

function EditListItem({ link }) {
  return (
    <Link to={link} className="me-3 link-dark">
      <BsPencilSquare size="23" />
    </Link>
  );
}

export default EditListItem;
