import Illustration from "../Illustration/Illustration";
import LogInFrom from "../LogInFrom/LogInFrom";

function LogIn() {
  return (
    <div>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <LogInFrom />
      </div>
    </div>
  );
}

export default LogIn;
