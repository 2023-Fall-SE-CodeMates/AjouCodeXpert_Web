import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:8080",
});

// export const retrieveAllTodosForUsernameApi = (username) =>
//   apiClient.get(`/users/${username}/todos`);
// export const deleteTodoApi = (username, id) =>
//   apiClient.delete(`/users/${username}/todos/${id}`);
// export const retrieveTodoApi = (username, id) =>
//   apiClient.get(`/users/${username}/todos/${id}`);
// export const updateTodoApi = (username, id, todo) =>
//   apiClient.put(`/users/${username}/todos/${id}`, todo);
// export const createTodoApi = (username, todo) =>
//   apiClient.post(`/users/${username}/todos`, todo);

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

// 반 개설 페이지
export const createClassApi = () => apiClient.post("/api/v1/class");
