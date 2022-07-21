import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ user, children }) => {
	return user ? children : <Navigate to="/login" replace />;
};
