import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

AuthProvider.propsTypes = {
  children: PropTypes.node.isRequired,
};

// Create a context
export const AuthContext = createContext();

// Share the created context with other components
export default function AuthProvider({ children }) {
  // Put some state in the context
  // const [isAuthenticated, setAuthenticated] = useState(false);
  // const [userId, setUserId] = useState(null);
  // const [role, setRole] = useState(null); // ["student", "ta", "admin"]
  // const [token, setToken] = useState(null);

  // async function login(username, password) {}

  // function logout() {}

  // TODO: API명세를 검토하고 role을 어떻게 처리할 지 결정하고, useAuth 사용하는 부분 수정하기
  const isAuthenticated = true;
  const role = "ta";

  return (
    <AuthContext.Provider value={{ isAuthenticated, role }}>
      {children}
    </AuthContext.Provider>
  );
}

// Create hook to use the context
export const useAuth = () => useContext(AuthContext);
