// import React from "react";
// import { Navigate, useLocation } from "react-router";
// import { useAuth } from "../AuthContext/AuthContext";
// import { LinearProgress } from "@mui/material";
// const PrivateRoute = ({ children, ...rest }) => {
//   let location = useLocation();
//   const { CorrenUser } = useAuth();

//   if (CorrenUser) {
//     return children;
//   }
//   return <Navigate to="/login" state={{ from: location }} />;
// };

// export default PrivateRoute;





// import { Navigate, Route } from "react-router-dom";
// import { useAuth } from "../AuthContext/AuthContext";

// export default function PrivateRoute({ component: Component, ...rest }) {
//   const { CorrenUser } = useAuth();

//   return CorrenUser ? (
//     <Route {...rest}>{(props) => <Component {...props} />}</Route>
//   ) : (
//     <  Navigate to="/login" />
//   );
// }