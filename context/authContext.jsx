import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";

const TOKEN = "TOKEN";
export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    window.localStorage.getItem(TOKEN) ?? false
  );

  const Login = useCallback(function () {
    window.localStorage.setItem(TOKEN, true);
    setIsAuthenticated(true);
  }, []);

  const LogoutContext = useCallback(function () {
    window.localStorage.setItem(TOKEN, false);
    setIsAuthenticated(false);
  }, []);

  const Value = useMemo(
    () => ({
      Login,
      LogoutContext,
      isAuthenticated,
    }),
    [Login, LogoutContext, isAuthenticated]
  );

  return <AuthContext.Provider value={Value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
