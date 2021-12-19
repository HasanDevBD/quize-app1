import { Link } from "react-router-dom";
import { useAuth } from "../../AuthContext/AuthContext";
import classes from "./Account.module.css";

function Account() {
  const { CorrenUser, logOut } = useAuth();
  return (
    <div className={classes.account}>
      {CorrenUser ? (
        <>
          <span className="material-icons-outlined " title="Account">
            account_circle
          </span>
          <span className={classes.userName}>{CorrenUser.displayName} </span>
          <span className="material-icons-outlined" title="Logout" onClick={logOut}>
            {" "}
            logout{" "}
          </span>
        </>
      ) : (
        <>
          <Link to="/SignUp">SignUp</Link>
          <Link to="/LogIn">LogIn</Link>
        </>
      )}
    </div>
  );
}

export default Account;
