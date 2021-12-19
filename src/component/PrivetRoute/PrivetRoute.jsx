
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../utils';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
            : <Redirect to="/signin" />
        )} />
    );
};

export default PrivateRoute;





// import { Route, Routes, useNavigate } from "react-router";
// import { useAuth } from "../../AuthContext/AuthContext";
// function PrivetRoute({ component: Component, ...rest }) {
//   let navigate = useNavigate();

//   const { CorrenUser } = useAuth();
//   return CorrenUser ? (
//   <Routes>
//       <Route {...rest} Component/> 
//     </Routes>
    
//   ) : (
//     navigate("/home")
//   );
// }

// export default PrivetRoute;
