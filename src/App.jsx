import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthProvider, { useAuth } from "./components/AuthContext";
import LoginPage from "./pages/common/LoginPage";
import SignUpPage from "./pages/common/SignUpPage";
import PersonalPage from "./pages/common/PersonalPage";
import ClassListPage from "./pages/common/ClassListPage";
import AssignmentPage from "./pages/common/AssignmentPage";
import AnnouncementPage from "./pages/common/AnnouncementPage";
import ErrorPage from "./pages/common/ErrorPage";

import SubmissionListPage from "./pages/student/SubmissionListPage";
import AssignmentDetailPage from "./pages/student/AssignmentDetailPage";
import ProblemPage from "./pages/student/ProblemPage";
import ReviewDetailPage from "./pages/student/ReviewDetailPage";

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

function App() {
  const authContext = useAuth();
  const [isAuthenticated, role] = [
    authContext.isAuthenticated,
    authContext.role,
  ];
  return (
    <div>
      {/* <AuthProvider> */}
      <BrowserRouter>
        <Routes>
          {/* 로그인 */}
          <Route path="/" element={<LoginPage />} />

          {/* 회원가입 */}
          <Route path="/signup" element={<SignUpPage />} />

          {/* 로그아웃 */}
          {/* <Route path="/logout" element={} /> */}
          <Route path="/personal" element={<PersonalPage />} />
          <Route path="/classes" element={<ClassListPage />} />
          <Route path="/createclass" element={<CreateClassPage />} />

          <Route
            path="/classes/:classId/assignments"
            element={<AssignmentPage />}
          />
          <Route path="/classes/:classId/scores" element={<AssignmentPage />} />
          <Route
            path="/classes/:classId/announcements"
            element={<AnnouncementPage />}
          />
          <Route
            path="/classes/:classId/submits"
            element={<SubmissionListPage />}
          />
          <Route
            path="/classes/:classId/members"
            element={<MemberManagementPage />}
          />

          <Route
            path="/classes/:classId/announcements/:announcementId"
            element={<AnnouncementAddModifyPage />}
          />
          <Route
            path="/classes/:classId/assignments/:assignmentsId"
            element={
              role === "student" ? (
                <AssignmentDetailPage />
              ) : role === "ta" ? (
                <AssignmentAddModifyPage />
              ) : null
            }
          />
          <Route
            path="/classes/:classId/scores/:assignmentsId"
            element={
              role === "student" ? (
                <AssignmentDetailPage />
              ) : role === "ta" ? (
                <SubmissionCheckPage />
              ) : null
            }
          />

          <Route
            path="/classes/:classId/assignments/:assignmentsId/:problemId"
            element={
              role === "student" ? (
                <ProblemPage />
              ) : role === "ta" ? (
                <ProblemAddModifyPage />
              ) : null
            }
          />
          <Route
            path="/classes/:classId/scores/:assignmentsId/:problemId"
            element={<ReviewDetailPage />}
          />
          <Route
            path="/classes/:classId/scores/:assignmentsId/:problemId/:studentId"
            element={<ReviewCheckAddPage />}
          />

          <Route path="/admin/classreq" element={<ClassOpenReqListPage />} />
          <Route path="/admin/userlist" element={<UserListPage />} />
          <Route path="/admin/classlist" element={<OpenedClassListPage />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
