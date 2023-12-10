import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { apiClient, authenticateApi } from "./api";

AuthProvider.propsTypes = {
  children: PropTypes.node.isRequired,
};

// Create a context
export const AuthContext = createContext();

// Share the created context with other components
export default function AuthProvider({ children }) {
  // sessionStorage에 정보 있으면 가져오기
  const [id, setId] = useState(
    window.sessionStorage.getItem("id")
      ? window.sessionStorage.getItem("id")
      : "james"
  );
  // ["student", "ta", "admin"]
  const [role, setRole] = useState(
    window.sessionStorage.getItem("role")
      ? window.sessionStorage.getItem("role")
      : "ta"
  );
  const [token, setToken] = useState(
    window.sessionStorage.getItem("token")
      ? window.sessionStorage.getItem("token")
      : "token"
  );
  const [isAuthenticated, setIsAuthenticated] = useState(
    id && role && token ? true : false
  );

  if (isAuthenticated) {
    apiClient.interceptors.request.use((config) => {
      config.headers.Authorization = token;
      return config;
    });
  }

  async function login(id, pw) {
    const response = await authenticateApi(id, pw);
    if (response.status === 200) {
      const jwtToken = `Bearer ${response.headers["Authorization"]}}`;
      setIsAuthenticated(true);
      setId(id);
      const role = "";
      // response.data.role
      setToken(jwtToken);

      // sessionStorage에 로그인 정보 저장
      window.sessionStorage.setItem("id", id);
      window.sessionStorage.setItem("role", role);
      window.sessionStorage.setItem("token", jwtToken);

      apiClient.interceptors.request.use((config) => {
        config.headers.Authorization = jwtToken;
        return config;
      });
      return true;
    } else {
      return false;
    }
  }

  function logout() {
    setIsAuthenticated(false);
    setToken("");

    window.sessionStorage.removeItem("id");
    window.sessionStorage.removeItem("role");
    window.sessionStorage.removeItem("token");

    apiClient.interceptors.request.use((config) => {
      delete config.headers.Authorization;
      return config;
    });
  }

  // const isAuthenticated = true;
  // const role = "admin";
  // const id = "james001";

  return (
    <AuthContext.Provider value={{ isAuthenticated, role, id, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Create hook to use the context
export const useAuth = () => useContext(AuthContext);
