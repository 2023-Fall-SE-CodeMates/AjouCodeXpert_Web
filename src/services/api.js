import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:8080",
});

// 공통
// 로그인 페이지: 로그인
export const authenticateApi = (id, pw) =>
  apiClient.post("/api/v1/login/authenticate", { id, pw });

// 회원가입 페이지: 회원가입, 전공목록 불러오기
export const signUpApi = (id, pw, name, studentCode, majorCode, roleCode) =>
  apiClient.post("/api/v1/user/signUp", {
    id,
    pw,
    name,
    studentCode,
    majorCode,
    roleCode,
  });

export const retrieveMajorListApi = () => apiClient.get("/api/v1/major");

// 반 목록 페이지: 반 가입요청, 반 목록 불러오기, 반 삭제
export const createClassJoinRequestApi = (id, role, classCode) => {
  apiClient.post(`/api/v1/class/join?classCode=${classCode}&type=${role}`, {
    id,
  });
};

export const retrieveClassListApi = (id) =>
  apiClient.get(`/api/v1/class?joinedBy=${id}`);

// 개인 페이지: 개인정보 불러오기, 개인정보 수정, 회원 탈퇴 요청, 알림 목록 불러오기, 알림 삭제
export const retrieveMyInfoApi = (id) =>
  apiClient.get(`/api/v1/user/info?id=${id}`);

export const updateMyInfoApi = (id, pw, name, studentCode, majorCode) =>
  apiClient.put(`/api/v1/user/info?id=${id}`, {
    pw,
    name,
    studentCode,
    majorCode,
  });

export const deleteAccountApi = (id) =>
  apiClient.delete(`/api/v1/user/info?id=${id}`);

export const retrieveNotificationListApi = (id) =>
  apiClient.get(`/api/v1/alarm?receiver=${id}&read=0`);

export const deleteNotificationApi = (alarmId) =>
  apiClient.patch(`/api/v1/alarm/${alarmId}?read=1`);

// 공지 페이지: 공지 목록 불러오기, 공지 삭제(TA)
export const retrieveNoticeListApi = (classId) =>
  apiClient.get(`/api/v1/class/${classId}/notice`);

export const deleteNoticeApi = (classId, noticeId) =>
  apiClient.delete(`/api/v1/class/${classId}/notice/${noticeId}`);

// 과제 페이지: 과제 목록 불러오기, 과제 삭제(TA)
export const retrieveAssignmentListApi = (classId) =>
  apiClient.get(`/api/v1/class/${classId}/homework`);

// 성적 페이지: 성적 목록 불러오기

// TA
// 반 개설 페이지
export const createClassApi = () => apiClient.post("/api/v1/class");

// 구성원 관리 페이지: 반 코드 불러오기, 구성원 목록 불러오기, 참여 요청 불러오기, 참여 요청 승인/거부
export const retrieveClassCodeApi = (classId) =>
  apiClient.get(`/api/v1/class/${classId}/code`);

export const retrieveMembersApi = (classCode) =>
  apiClient.get(`/api/v1/class/join?classCode=${classCode}&joined=1`);

export const retrieveRequestersApi = (classCode) =>
  apiClient.get(`/api/v1/class/join?classCode=${classCode}&joined=0`);

export const acceptRequestApi = (id) =>
  apiClient.patch(`/api/v1/class/join/${id}&joined=1`);

// 공지사항 추가/수정 페이지: 공지사항 추가, 공지사항 수정
export const createNotificationApi = (classId, title, content) =>
  apiClient.post(`/api/v1/class/${classId}/notice`, {
    title,
    content,
  });

export const updateNotificationApi = (classId, noticeId, title, content) =>
  apiClient.put(`/api/v1/class/${classId}/notice/${noticeId}`, {
    title,
    content,
  });
