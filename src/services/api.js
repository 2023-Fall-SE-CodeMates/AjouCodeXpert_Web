import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:8443",
  validateStatus: () => true,
});

// 공통 페이지
// 로그인 페이지: 로그인
export const authenticateApi = (id, pw) =>
  apiClient.post("/api/auth/login", { loginId: id, pw: pw });

// 회원가입 페이지: 회원가입, 전공목록 불러오기
export const signUpApi = (data) => apiClient.post("/api/user/signup", data);

// export const retrieveMajorListApi = () => apiClient.get("/api/v1/major");

// // 반 목록 페이지: 반 가입요청, 반 목록 불러오기, 반 삭제(TA)
// export const createClassJoinRequestApi = (id, role, classCode) => {
//   apiClient.post(`/api/v1/class/join?classCode=${classCode}&type=${role}`, {
//     id,
//   });
// };

// export const retrieveClassListApi = (id) =>
//   apiClient.get(`/api/v1/class?joinedBy=${id}`);

// export const deleteClassApi = (classId) => {};

// // 개인 페이지: 개인정보 불러오기, 개인정보 수정, 회원 탈퇴 요청, 알림 목록 불러오기, 알림 삭제
// export const retrieveMyInfoApi = (id) =>
//   apiClient.get(`/api/v1/user/info?id=${id}`);

// export const updateMyInfoApi = (id, pw, name, studentCode, majorCode) =>
//   apiClient.put(`/api/v1/user/info?id=${id}`, {
//     pw,
//     name,
//     studentCode,
//     majorCode,
//   });

// export const deleteAccountApi = (id) =>
//   apiClient.delete(`/api/v1/user/info?id=${id}`);

// export const retrieveNotificationListApi = (id) =>
//   apiClient.get(`/api/v1/alarm?receiver=${id}&read=0`);

// export const deleteNotificationApi = (alarmId) =>
//   apiClient.patch(`/api/v1/alarm/${alarmId}?read=1`);

// // 공지 페이지: 공지 목록 불러오기, 공지 삭제(TA)
// export const retrieveAnnouncementListApi = (classId) =>
//   apiClient.get(`/api/v1/class/${classId}/notice`);

// export const deleteAnnouncementApi = (classId, announcementId) =>
//   apiClient.delete(`/api/v1/class/${classId}/notice/${announcementId}`);

// // 과제 페이지: 과제 목록 불러오기, 과제 삭제(TA)
// export const retrieveAssignmentListApi = (classId) =>
//   apiClient.get(`/api/v1/class/${classId}/homework`);

// export const deleteAssignmentApi = (classId, assignmentId) => {};

// // 성적 페이지: 과제 목록 불러오기(과제 페이지와 동일)

// // 학생 페이지
// // 제출 관리 페이지: 제출 목록 불러오기
// export const retrieveSubmissionListApi = (classId, assignmentId) => {};

// // 과제 상세 페이지: 과제 상세 정보 불러오기, 문제에 대해 제출된 날짜 불러오기
// export const retrieveAssignmentDetailApi = (classId, assignmentId) => {};
// export const retrieveSubmissionInfoApi = (classId, assignmentId, id) => {};

// // 문제별 점수 페이지: 과제 상세 정보 불러오기, 문제에 대한 점수 불러오기 (과제 상세 페이지와 동일?)

// // 문제 페이지: 문제 정보 불러오기, 제출한 코드 불러오기, 코드 저장, 코드 실행, 코드 제출
// export const retrieveProblemApi = (classId, assignmentId, problemIndex) => {};
// export const retrieveCodeApi = (classId, assignmentId, problemIndex, id) => {};
// export const updateCodeApi = (
//   classId,
//   assignmentId,
//   problemIndex,
//   id,
//   code
// ) => {};
// export const executeCodeApi = (
//   classId,
//   assignmentId,
//   problemIndex,
//   id,
//   code
// ) => {};
// export const submitCodeApi = (
//   classId,
//   assignmentId,
//   problemIndex,
//   id,
//   code
// ) => {};

// // 리뷰 상세 페이지: 문제 정보 불러오기(문제 페이지와 동일), 제출한 코드, 리뷰 정보 불러오기
// export const retrieveReviewDetailApi = (
//   classId,
//   assignmentId,
//   problemIndex,
//   id
// ) => {};

// TA 페이지
// 반 개설 페이지: 반 개설 요청 보내기
export const createClassApi = (subjectCode, subjectName) =>
  apiClient.post("/api/course", {
    courseCode: subjectCode,
    courseName: subjectName,
  });

// // 구성원 관리 페이지: 반 코드 불러오기, 구성원 목록 불러오기, 참여 요청 불러오기, 참여 요청 승인/거부
// export const retrieveClassCodeApi = (classId) =>
//   apiClient.get(`/api/v1/class/${classId}/code`);

// export const retrieveMembersApi = (classCode) =>
//   apiClient.get(`/api/v1/class/join?classCode=${classCode}&joined=1`);

// export const retrieveRequestersApi = (classCode) =>
//   apiClient.get(`/api/v1/class/join?classCode=${classCode}&joined=0`);

// export const acceptRequestApi = (id) =>
//   apiClient.patch(`/api/v1/class/join/${id}&joined=1`);

// // 공지사항 추가/수정 페이지: 공지사항 추가, 공지사항 수정
// export const createAnnouncementApi = (classId, title, content) =>
//   apiClient.post(`/api/v1/class/${classId}/notice`, {
//     title,
//     content,
//   });

// export const retrieveAnnouncementApi = (classId, announcementId) => {};

// export const updateAnnouncementApi = (
//   classId,
//   announcementId,
//   title,
//   content
// ) =>
//   apiClient.put(`/api/v1/class/${classId}/notice/${announcementId}`, {
//     title,
//     content,
//   });

// // 과제 추가/수정 페이지: 과제 상세 정보 불러오기(있으면, 과제 상세 페이지와 동일), 과제 추가, 과제 수정
// const createAssignmentApi = (
//   classId,
//   title,
//   dueDate,
//   description,
//   problemInfoList
// ) => {};
// const updateAssignmentApi = (
//   classId,
//   assignmentId,
//   title,
//   dueDate,
//   description,
//   problemInfoList
// ) => {};

// // 제출 확인 페이지: 과제에 대한 학생의 제출 목록 불러오기(학생 id 리스트가 있으면, 과제 상세 페이지의 retrieveSubmissionInfoApi 호출?), 감점된 점수 보내기
// const updateDeductedScoreApi = (classId, assignmentId, deductedScores) => {};

// // 문제 추가/수정 페이지: 문제 상세 정보 불러오기(있으면, 문제 페이지와 동일)

// // 리뷰 확인/추가 페이지: 과제의 문제에 대한 제출 정보 불러오기(리뷰 상세 페이지의 retrieveReviewDetailApi 호출?), 점수와 TA리뷰 보내기
// const updateReviewApi = (
//   classId,
//   assignmentId,
//   problemIndex,
//   id,
//   score,
//   taReview
// ) => {};

// // 관리자

// // 계정 권한 변경 페이지: 권한 변경 신청한 계정 불러오기, 승인, 거부
// const retrieveRoleChangeRequestListApi = () => {};
// const acceptRoleChangeRequestApi = (id) => {};
// const rejectRoleChangeRequestApi = (id) => {};

// // 반 개설 및 삭제 요청 관리 페이지: 반 개설 및 삭제 요청 불러오기, 승인, 거부
// const retrieveClassOpenRequestListApi = () => {};
// const retrieveClassDeleteRequestListApi = () => {};
// const acceptClassOpenRequestApi = () => {};
// const rejectClassOpenRequestApi = () => {};
// const acceptClassDeleteRequestApi = () => {};
// const rejectClassDeleteRequestApi = () => {};

// // 전체 사용자 조회 페이지: 전체 사용자 목록 불러오기, 계정 삭제, 패스워드 초기화
// const retrieveUserListApi = () => {};
// const deleteUserApi = (id) => {};
// const resetPasswordApi = (id) => {};

// // 전체 개설된 반 조회 페이지: 전체 개설된 반 목록 불러오기
// const retrieveOpenedClassListApi = () => {};
