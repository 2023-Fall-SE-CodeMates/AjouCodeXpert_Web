// 문제 페이지(학생), 문제 추가/수정 페이지(TA) 라우팅
import React from "react";
import AuthProvider, { useAuth } from "services/AuthContext";
import { Navigate } from "react-router-dom";
import ProblemPage from "pages/student/ProblemPage";
import ProblemAddModifyPage from "pages/ta/ProblemAddModifyPage";

function ProblemRoute(props) {
  const authContext = useAuth();
  const [isAuthenticated, role] = [
    authContext.isAuthenticated,
    authContext.role,
  ];
  return isAuthenticated && role === "student" ? (
    <ProblemPage />
  ) : isAuthenticated && role === "ta" ? (
    <ProblemAddModifyPage />
  ) : (
    <Navigate to="/error" />
  );
}

export default ProblemRoute;
