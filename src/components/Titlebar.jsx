import React from "react";
import style from "styles/components/Titlebar.module.css";
import PropTypes from "prop-types";
import cn from "classnames";

Titlebar.propsTypes = {
  title: PropTypes.string.isRequired,
};

function Titlebar({ title }) {
  return (
    <div
      className={cn(
        "d-flex flex-column justify-content-center",
        style.titlebar
      )}
    >
      <h2 className="ms-5">{title}</h2>
    </div>
  );
}

export default Titlebar;
