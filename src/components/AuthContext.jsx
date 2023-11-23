import { createContext, useContext, useState } from "react";

// Create a context
export const AuthContext = createContext();

// Share the created context with other components
export default function AuthProvider({ children }) {
  // Put some state in the context
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState(null);
  const [role, setRole] = useState(null); // ["student", "ta", "admin"]
  const [token, setToken] = useState(null);

  async function login(username, password) {}

  function logout() {}

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

// Create hook to use the context
export const useAuth = () => useContext(AuthContext);
