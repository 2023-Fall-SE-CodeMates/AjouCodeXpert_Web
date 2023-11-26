// 사이드바
import React from "react";
import style from "./Sidebar.module.css";
import { useAuth } from "../AuthContext";
import cn from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

Sidebar.propTypes = {
  classId: PropTypes.string,
  className: PropTypes.string,
};

function Sidebar({ classId, className }) {
  const authContext = useAuth();
  const [isAuthenticated, role] = [
    authContext.isAuthenticated,
    authContext.role,
  ];

  if (!isAuthenticated) return null;
  return (
    <div
      className={cn(
        "d-flex flex-column flex-shrink-0 p-3 bg-light",
        style.sidebar
      )}
    >
      <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <span className="fs-4">AjouCodeXpert</span>
      </div>
      <hr />
      <div>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink to="/personal" className="nav-link link-dark">
              개인 페이지
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/classes" className="nav-link">
              반 페이지
            </NavLink>
          </li>
        </ul>
        {classId && className && (
          <ul
            className={cn("nav nav-pills flex-column mb-auto", style.classMenu)}
          >
            <li className="nav-item m-2">반 과목명</li>
            <li className="nav-item">
              <NavLink to="#" className="nav-link link-dark">
                공지
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="#" className="nav-link link-dark">
                과제
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="#" className="nav-link link-dark">
                성적
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="#" className="nav-link link-dark">
                구성원 관리
              </NavLink>
            </li>
          </ul>
        )}
      </div>
      <div>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink to="/admin/classreq" className="nav-link link-dark">
              반 관리
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin/userlist" className="nav-link link-dark">
              전체 사용자 조회
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin/classlist" className="nav-link link-dark">
              전체 개설된 반 조회
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
