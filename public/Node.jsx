import React, { useState } from "react";
import { useAuth } from "../../AuthContext/AuthContext";
import Button from "../Button/Button";
import From from "../From/From";
import CheckBox from "../InputArea/CheckBox";
import Input from "../InputArea/Input";

function SignupFrom() {
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");

  const [passwoard, setPasseoard] = useState("");
  const [ConfirmPasswoard, setConfirmPassword] = useState("");
  const [Agry, setAgry] = useState("");
  const [Loading, setLoadng] = useState("");
  const [Error, setError] = useState("");

  const { signup } = useAuth();

  //hendel Submit
  async function hendelSubmit(e) {
    e.preventDefault();
    if (passwoard !== ConfirmPasswoard) {
      setError("You are passwoard dont match");
    }
    try {
      setError("");
      setLoadng(true);
      await String(signup(userName, passwoard, email)).trim() ;
    } catch (err) {
      console.log(err);
      console.log(typeof email)
      setLoadng(false);
      setError("Flail to singnup area");
    }
  }

  return (
    <From style={{ height: "500px" }} onSubmit={hendelSubmit}>
      <Input
        type="text"
        placeholder="Enter name"
        icon="person"
        required
        value={userName}
        onChange={(e) => setuserName(e.target.value)}
      />

      <Input
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
        required
        value={email}
        onChange={(e) => toString(setEmail(e.target.value)) }
      />

      <Input
        type="password"
        placeholder="Enter password"
        icon="lock"
        required
        value={passwoard}
        onChange={(e) => setPasseoard(e.target.value)}
      />

      <Input
        type="password"
        placeholder="Confirm password"
        icon="lock_clock"
        required
        value={ConfirmPasswoard}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <CheckBox
        text="I agree to the Terms &amp; Conditions"
        required
        value={Agry}
        onChange={(e) => setAgry(e.target.value)}
      />
      <Button disabled={Loading} type="submit">
        <span>Submit Now</span>
      </Button>
      {Error && <p style={{ color: "red", fontSize: "55px", marginTop: "5px" }}>{Error}</p>}
    </From>
  );
}

export default SignupFrom;
