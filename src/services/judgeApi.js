import axios from "axios";

export const apiJudge = axios.create({
  baseURL: "http://localhost:80",
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: () => true,
});

// 단일 테스트케이스 input에 대한 실행
export const judgeClangCodeApi = (code, input) =>
  apiJudge.post(
    "http://localhost/submissions/?base64_encoded=false&wait=true",
    { source_code: code, stdin: input, language_id: 49 }
  );
export const judgeJavaCodeApi = (code, input) =>
  apiJudge.post(
    "http://localhost/submissions/?base64_encoded=false&wait=true",
    { source_code: code, stdin: input, language_id: 62 }
  );
export const judgePythonCodeApi = (code, input) =>
  apiJudge.post(
    "http://localhost/submissions/?base64_encoded=false&wait=true",
    { source_code: code, stdin: input, language_id: 71 }
  );
