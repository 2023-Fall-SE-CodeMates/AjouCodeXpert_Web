import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthProvider, { useAuth } from "./components/AuthContext";
import "./App.css";

import LoginPage from "./pages/common/LoginPage";
import SignUpPage from "./pages/common/SignUpPage";
import PersonalPage from "./pages/common/PersonalPage";
import ClassListPage from "./pages/common/ClassListPage";
import AssignmentPage from "./pages/common/AssignmentPage";
import AnnouncementPage from "./pages/common/AnnouncementPage";
import ScorePage from "./pages/common/ScorePage";
import ErrorPage from "./pages/common/ErrorPage";

import SubmissionListPage from "./pages/student/SubmissionListPage";
import AssignmentDetailPage from "./pages/student/AssignmentDetailPage";
import ProblemPage from "./pages/student/ProblemPage";
import ReviewDetailPage from "./pages/student/ReviewDetailPage";
import ScoreByProblemPage from "./pages/student/ScoreByProblemPage";

import CreateClassPage from "./pages/ta/CreateClassPage";
import MemberManagementPage from "./pages/ta/MemberManagementPage";
import AssignmentAddModifyPage from "./pages/ta/AssignmentAddModifyPage";
import AnnouncementAddModifyPage from "./pages/ta/AnnouncementAddModifyPage";
import ProblemAddModifyPage from "./pages/ta/ProblemAddModifyPage";
import ReviewCheckAddPage from "./pages/ta/ReviewCheckAddPage";
import SubmissionCheckPage from "./pages/ta/SubmissionCheckPage";

import ClassOpenReqListPage from "./pages/admin/ClassOpenReqListPage";
import UserListPage from "./pages/admin/UserListPage";
import OpenedClassListPage from "./pages/admin/OpenedClassListPage";

import Logout from "./components/Logout";
import ScoreRoute from "./components/ScoreRoute";
import AssignmentRoute from "./components/AssignmentRoute";
import ProblemRoute from "./components/ProblemRoute";

// 로그인 안함
function OnlyForUnauthenticated({ children }) {
  const authContext = useAuth();
  const [isAuthenticated, role] = [
    authContext.isAuthenticated,
    authContext.role,
  ];
  return !isAuthenticated ? (
    children
  ) : role === "admin" ? (
    <Navigate to="/admin/classreq" />
  ) : (
    <Navigate to="/classes" />
  );
}

// 로그인, 학생만 접속가능
function OnlyForStudent({ children }) {
  const authContext = useAuth();
  const [isAuthenticated, role] = [
    authContext.isAuthenticated,
    authContext.role,
  ];
  return isAuthenticated && role === "student" ? (
    children
  ) : (
    <Navigate to="/error" />
  );
}

// 로그인, TA만 접속가능
function OnlyForTA({ children }) {
  const authContext = useAuth();
  const [isAuthenticated, role] = [
    authContext.isAuthenticated,
    authContext.role,
  ];
  return isAuthenticated && role === "ta" ? children : <Navigate to="/error" />;
}

// 로그인, 학생&TA 접속가능
function OnlyForStudentAndTA({ children }) {
  const authContext = useAuth();
  const [isAuthenticated, role] = [
    authContext.isAuthenticated,
    authContext.role,
  ];
  return isAuthenticated && (role === "student" || role === "ta") ? (
    children
  ) : (
    <Navigate to="/error" />
  );
}

// 로그인, 관리자만 접속가능
function OnlyForAdmin({ children }) {
  const authContext = useAuth();
  const [isAuthenticated, role] = [
    authContext.isAuthenticated,
    authContext.role,
  ];
  return isAuthenticated && role === "admin" ? (
    children
  ) : (
    <Navigate to="/error" />
  );
}

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* 로그인 */}
            <Route
              path="/"
              element={
                <OnlyForUnauthenticated>
                  <LoginPage />
                </OnlyForUnauthenticated>
              }
            />
            {/* 회원가입 */}
            <Route
              path="/signup"
              element={
                <OnlyForUnauthenticated>
                  <SignUpPage />
                </OnlyForUnauthenticated>
              }
            />
            {/* 로그아웃 */}
            <Route path="/logout" element={<Logout />} />
            {/* 개인페이지 */}
            <Route
              path="/personal"
              element={
                <OnlyForStudentAndTA>
                  <PersonalPage />
                </OnlyForStudentAndTA>
              }
            />
            {/* 반 목록 페이지 */}
            <Route
              path="/classes"
              element={
                <OnlyForStudentAndTA>
                  <ClassListPage />
                </OnlyForStudentAndTA>
              }
            />
            {/* 반 개설 페이지(TA) */}
            <Route
              path="/createclass"
              element={
                <OnlyForTA>
                  <CreateClassPage />
                </OnlyForTA>
              }
            />
            {/* 과제 페이지 */}
            <Route
              path="/classes/:classId/assignments"
              element={
                <OnlyForStudentAndTA>
                  <AssignmentPage />
                </OnlyForStudentAndTA>
              }
            />
            {/* 성적 페이지 */}
            <Route
              path="/classes/:classId/scores"
              element={
                <OnlyForStudentAndTA>
                  <ScorePage />
                </OnlyForStudentAndTA>
              }
            />
            {/* 공지 페이지 */}
            <Route
              path="/classes/:classId/announcements"
              element={
                <OnlyForStudentAndTA>
                  <AnnouncementPage />
                </OnlyForStudentAndTA>
              }
            />
            {/* 제출관리 페이지(학생) */}
            <Route
              path="/classes/:classId/submits"
              element={
                <OnlyForStudent>
                  <SubmissionListPage />
                </OnlyForStudent>
              }
            />
            {/* 구성원관리 페이지(TA) */}
            <Route
              path="/classes/:classId/members"
              element={
                <OnlyForTA>
                  <MemberManagementPage />
                </OnlyForTA>
              }
            />
            {/* 공지 추가/수정 페이지(TA) */}
            <Route
              path="/classes/:classId/announcements/:announcementId"
              element={
                <OnlyForTA>
                  <AnnouncementAddModifyPage />
                </OnlyForTA>
              }
            />
            {/* 과제 상세 페이지(학생), 과제 추가/수정 페이지(TA) */}
            <Route
              path="/classes/:classId/assignments/:assignmentsId"
              element={<AssignmentRoute />}
            />
            {/* 문제별 점수 페이지(학생), 제출 확인 페이지(TA) */}
            <Route
              path="/classes/:classId/scores/:assignmentsId"
              element={<ScoreRoute />}
            />
            {/* 문제 페이지(학생), 문제 추가/수정 페이지(TA) */}
            <Route
              path="/classes/:classId/assignments/:assignmentsId/:problemId"
              element={<ProblemRoute />}
            />
            {/* 리뷰 상세 페이지(학생) */}
            <Route
              path="/classes/:classId/scores/:assignmentsId/:problemId"
              element={
                <OnlyForStudent>
                  <ReviewDetailPage />
                </OnlyForStudent>
              }
            />
            {/* 리뷰 확인,추가 페이지(TA) */}
            <Route
              path="/classes/:classId/scores/:assignmentsId/:problemId/:studentId"
              element={
                <OnlyForTA>
                  <ReviewCheckAddPage />
                </OnlyForTA>
              }
            />
            {/* 반 개설 및 삭제 요청 관리(관리자) */}
            <Route
              path="/admin/classreq"
              element={
                <OnlyForAdmin>
                  <ClassOpenReqListPage />
                </OnlyForAdmin>
              }
            />
            {/* 전체 사용자 조회(관리자) */}
            <Route
              path="/admin/userlist"
              element={
                <OnlyForAdmin>
                  <UserListPage />
                </OnlyForAdmin>
              }
            />
            {/* 전체 반 조회(관리자) */}
            <Route
              path="/admin/classlist"
              element={
                <OnlyForAdmin>
                  <OpenedClassListPage />
                </OnlyForAdmin>
              }
            />
            {/* 에러 */}
            <Route path="/error" element={<ErrorPage />} />
            <Route path="*" element={<Navigate to="/error" />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
