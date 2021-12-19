import Illustration from "../Illustration/Illustration";
import SignupFrom from "../signupFrom/SignupFrom";

function SignUp() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="cloumn">
        <Illustration />
        <SignupFrom />
      </div>
    </>
  );
}

export default SignUp;
