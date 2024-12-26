
const SignUp = () => {

  return (
    <div className='SignUpContainer' >
      <h1 className="formHeader">Sign up</h1>
      <div className="formGroup">
        <input id="Email" type="text" placeholder="Email"/>
        <input id="Password" className='secondInput' type="text" placeholder="Password"/>
        <input id="Password" className='secondInput' type="text" placeholder="Password"/>
      </div>
      <div className="buttonContainer">
        <button className="SignUpButton">Sign up</button>
        <p><a href="">go back to Log In</a></p>
      </div>
    </div>
  )
}

export default SignUp