import React, { useRef } from "react";
import { auth } from "../../Firebase/firebase";
import "./SignIn.css";
function SignIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="sign">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} className="ip" placeholder="Email" type="email">
          {" "}
        </input>
        <input
          ref={passwordRef}
          className="ip"
          placeholder="Password"
          type="password"
        />
        <button type="submit">Sign In</button>
        <h4>
          <span className="grey"> New to Netflix ?</span>
          <span classNam="nam">Sign Up now</span>
        </h4>
      </form>
    </div>
  );
}

export default SignIn;
