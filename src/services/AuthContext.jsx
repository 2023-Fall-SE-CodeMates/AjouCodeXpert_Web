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
      : ""
  );
  // ["student", "ta", "admin"]
  const [role, setRole] = useState(
    window.sessionStorage.getItem("role")
      ? window.sessionStorage.getItem("role")
      : ""
  );
  const [token, setToken] = useState(
    window.sessionStorage.getItem("token")
      ? window.sessionStorage.getItem("token")
      : ""
  );
  const [isAuthenticated, setIsAuthenticated] = useState(
    id && role && token ? true : false
  );

  apiClient.interceptors.request.use((config) => {
    config.headers.Authorization = window.sessionStorage.getItem("token")
      ? window.sessionStorage.getItem("token")
      : "";
    return config;
  });

  async function login(id, pw) {
    const response = await authenticateApi(id, pw);
    if (response.status === 200) {
      const jwtToken = `Bearer ${response.data.token}`;
      setIsAuthenticated(true);
      setId(id);
      let role = "";
      if (response.data.role === 0) role = "admin";
      else if (response.data.role === 1) role = "ta";
      else if (response.data.role === 2) role = "student";
      setRole(role);
      setToken(jwtToken);

      // sessionStorage에 로그인 정보 저장
      window.sessionStorage.setItem("id", id);
      window.sessionStorage.setItem("role", role);
      window.sessionStorage.setItem("token", jwtToken);

      return true;
    } else {
      return false;
    }
  }

  function logout() {
    setIsAuthenticated(false);
    setId("");
    setToken("");
    setRole("");

    window.sessionStorage.removeItem("id");
    window.sessionStorage.removeItem("role");
    window.sessionStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, role, id, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Create hook to use the context
export const useAuth = () => useContext(AuthContext);
