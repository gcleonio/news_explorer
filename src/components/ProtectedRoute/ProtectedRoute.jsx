import { Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ProtectedRoute = ({ children, onUnauthorized }) => {
  const { isLoggedIn } = useContext(CurrentUserContext);

  useEffect(() => {
    if (!isLoggedIn && onUnauthorized) {
      onUnauthorized();
    }
  }, [isLoggedIn, onUnauthorized]);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
