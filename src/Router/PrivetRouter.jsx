// import React from "react";
// import { Navigate, useLocation } from "react-router";
// import useAuth from "../../hooks/useAuth";
// import { LinearProgress } from "@mui/material";
// const PrivateRoute = ({ children, ...rest }) => {
//   let location = useLocation();
//   const { user, isLoading } = useAuth();

//   if (user.email) {
//     return children;
//   }
//   return <Navigate to="/login" state={{ from: location }} />;
// };

// export default PrivateRoute;