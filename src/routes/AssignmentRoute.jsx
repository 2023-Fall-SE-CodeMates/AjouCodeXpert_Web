// 과제 상세 페이지(학생), 과제 추가/수정 페이지(TA) 라우팅
import React from "react";
import AuthProvider, { useAuth } from "services/AuthContext";
import { Navigate } from "react-router-dom";
import AssignmentDetailPage from "pages/student/AssignmentDetailPage";
import AssignmentAddModifyPage from "pages/ta/AssignmentAddModifyPage";

function AssignmentRoute(props) {
  const authContext = useAuth();
  const [isAuthenticated, role] = [
    authContext.isAuthenticated,
    authContext.role,
  ];
  return isAuthenticated && role === "student" ? (
    <AssignmentDetailPage />
  ) : isAuthenticated && role === "ta" ? (
    <AssignmentAddModifyPage />
  ) : (
    <Navigate to="/error" />
  );
}

export default AssignmentRoute;
