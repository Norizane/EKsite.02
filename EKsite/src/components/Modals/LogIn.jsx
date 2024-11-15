
const LogIn = () => {
  return (
    <div className="logInContainer">
      <h1 className="formHeader">LogIn</h1>
      <div className="formGroup">
        <input type="text" placeholder="Email"/>
        <input className='secondInput' type="text" placeholder="Password"/>
      </div>
      <div className="buttonContainer">
        <button className="LogInButton">LogIn</button>
        <p><a href="">Sign Up</a></p>
      </div>
    </div>
  )
}

export default LogIn