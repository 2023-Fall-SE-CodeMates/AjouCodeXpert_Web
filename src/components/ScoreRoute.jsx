// 문제별 점수 페이지(학생), 제출 확인 페이지(TA) 라우팅
import React from "react";
import AuthProvider, { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";
import ScoreByProblemPage from "../pages/student/ScoreByProblemPage";
import SubmissionCheckPage from "../pages/ta/SubmissionCheckPage";

function ScoreRoute(props) {
  const authContext = useAuth();
  const [isAuthenticated, role] = [
    authContext.isAuthenticated,
    authContext.role,
  ];
  return isAuthenticated && role === "student" ? (
    <ScoreByProblemPage />
  ) : isAuthenticated && role === "ta" ? (
    <SubmissionCheckPage />
  ) : (
    <Navigate to="/error" />
  );
}

export default ScoreRoute;
