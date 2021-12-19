import signup from "../../assets/images/signup.svg";
import classes from "./Illustration.module.css";

function Illustration() {
  return (
    <div className={classes.illustration}>
      <img src={signup} alt="Signup" />
    </div>
  );
}

export default Illustration;
