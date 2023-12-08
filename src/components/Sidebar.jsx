// 사이드바
import React from "react";
import { useAuth } from "services/AuthContext";
import style from "styles/components/Sidebar.module.css";
import cn from "classnames";
import PropTypes from "prop-types";
import { useNavigate, NavLink } from "react-router-dom";

import { BsFillPersonFill } from "react-icons/bs";
import { BsGridFill } from "react-icons/bs";
import { BsFillChatTextFill } from "react-icons/bs";
import { BsFillTerminalFill } from "react-icons/bs";
import { BsPencilFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillArchiveFill } from "react-icons/bs";
import { BsPersonFillGear } from "react-icons/bs";
import { BsFillSlashSquareFill } from "react-icons/bs";

Sidebar.propTypes = {
  classId: PropTypes.string,
  subjectName: PropTypes.string,
};

// TODO: className을 어떤 식으로 불러올건지 생각해 봐야 함
function Sidebar({ classId, subjectName }) {
  const authContext = useAuth();
  const [isAuthenticated, role, logout] = [
    authContext.isAuthenticated,
    authContext.role,
    authContext.logout,
  ];

  const navigate = useNavigate();

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
      {(role === "student" || role === "ta") && (
        <div>
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <NavLink
                to="/personal"
                className={({ isActive }) =>
                  isActive ? "active nav-link" : "nav-link link-dark"
                }
                end
              >
                <BsFillPersonFill />
                &nbsp;&nbsp;&nbsp;내 정보
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/classes"
                className={({ isActive }) =>
                  isActive ? "active nav-link" : "nav-link link-dark"
                }
                end
              >
                <BsGridFill />
                &nbsp;&nbsp;&nbsp;반 목록
              </NavLink>
            </li>
          </ul>
          {classId && subjectName && (
            <ul
              className={cn(
                "nav nav-pills flex-column mb-auto",
                style.classMenu
              )}
            >
              <li className="nav-item m-2">{subjectName}</li>
              <li className="nav-item">
                <NavLink
                  to={`/classes/${classId}/announcements`}
                  className={({ isActive }) =>
                    isActive ? "active nav-link" : "nav-link link-dark"
                  }
                >
                  <BsFillChatTextFill />
                  &nbsp;&nbsp;&nbsp;공지
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={`/classes/${classId}/assignments`}
                  className={({ isActive }) =>
                    isActive ? "active nav-link" : "nav-link link-dark"
                  }
                >
                  <BsFillTerminalFill />
                  &nbsp;&nbsp;&nbsp;과제
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={`/classes/${classId}/scores`}
                  className={({ isActive }) =>
                    isActive ? "active nav-link" : "nav-link link-dark"
                  }
                >
                  <BsPencilFill />
                  &nbsp;&nbsp;&nbsp;성적
                </NavLink>
              </li>
              {role === "ta" && (
                <li className="nav-item">
                  <NavLink
                    to={`/classes/${classId}/members`}
                    className={({ isActive }) =>
                      isActive ? "active nav-link" : "nav-link link-dark"
                    }
                  >
                    <BsFillPeopleFill />
                    &nbsp;&nbsp;&nbsp;구성원 관리
                  </NavLink>
                </li>
              )}
              {role === "student" && (
                <li className="nav-item">
                  <NavLink
                    to={`/classes/${classId}/submissions`}
                    className={({ isActive }) =>
                      isActive ? "active nav-link" : "nav-link link-dark"
                    }
                  >
                    <BsFillArchiveFill />
                    &nbsp;&nbsp;&nbsp;제출 관리
                  </NavLink>
                </li>
              )}
            </ul>
          )}
        </div>
      )}
      {role === "admin" && (
        <div>
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <NavLink
                to="/admin/rolechange"
                className={({ isActive }) =>
                  isActive ? "active nav-link" : "nav-link link-dark"
                }
              >
                <BsPersonFillGear />
                &nbsp;&nbsp;&nbsp;계정 권한 변경
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/admin/classreq"
                className={({ isActive }) =>
                  isActive ? "active nav-link" : "nav-link link-dark"
                }
              >
                <BsFillSlashSquareFill />
                &nbsp;&nbsp;&nbsp;반 관리
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/admin/userlist"
                className={({ isActive }) =>
                  isActive ? "active nav-link" : "nav-link link-dark"
                }
              >
                <BsFillPeopleFill />
                &nbsp;&nbsp;&nbsp;전체 사용자 조회
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/admin/classlist"
                className={({ isActive }) =>
                  isActive ? "active nav-link" : "nav-link link-dark"
                }
              >
                <BsGridFill />
                &nbsp;&nbsp;&nbsp;전체 개설된 반 조회
              </NavLink>
            </li>
          </ul>
        </div>
      )}
      <div className="flex-grow-1"></div>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <button
            onClick={() => {
              logout();
              alert("로그아웃 되었습니다.");
              navigate("/");
            }}
            className="nav-link link-dark"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
