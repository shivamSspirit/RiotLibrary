import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext('authContext');

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const localStorageAuth = localStorage.getItem("token");
  const localStorageUser = localStorage.getItem("authUser");
  const [authToken, setAuthToken] = useState(
    localStorageAuth ? localStorageAuth : ""
  );
  const [authUser, setAuthUser] = useState(
    localStorageUser ? localStorageUser : null
  );

  const handleLogout = () => {
    localStorage.clear();
    setAuthToken('');
    setAuthUser(null);
    navigate("/")
  }

  return (
    <AuthContext.Provider
      value={{ authToken, setAuthToken, authUser, setAuthUser, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };