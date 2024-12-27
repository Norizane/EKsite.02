import FirstSign from "../../assets/images/FirstSign.png";
import LogInForm from "../../components/Modals/LogIn";
import SignUpForm from "../../components/Modals/SignUp"

const SignUpLogIn = () => {

  return (
    <>
      <div className="SignInLogInContainer ">
        <div className="mainContainer">
          <div className="imageContainer">
            <img className="firstSign" src={FirstSign} alt="FirstSign" />
          </div>
          <div className="formContainer">
            <LogInForm  />
            <SignUpForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpLogIn;
