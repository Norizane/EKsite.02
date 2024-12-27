
const SignUp = () => {

  return (
    <div className="SignUpContainer">
      <h1 className="formHeader">Sign Up</h1>
      <div className="formGroup">
        <input id="Email" type="text" placeholder="Email" />
        <input id="Password" className="secondInput" type="text" placeholder="Password" />
        <input id="ConfirmPassword" className="secondInput" type="text" placeholder="Confirm Password" />
      </div>
      <div className="buttonContainer">
        <button className="SignUpButton">Sign Up</button>
        <p><a href="">Go back to Log In</a></p>
      </div>
    </div>
  );
};


export default SignUp;
