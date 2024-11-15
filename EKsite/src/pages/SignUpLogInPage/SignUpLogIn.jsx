import MediumLogo from '../../assets/images/MediumLogo.png'
import FirstSign from '../../assets/images/FirstSign.png'
import LogInForm from '../../components/Modals/LogIn'
const SignUpLogIn = () => {
  return (
    <>
      <div className='SignInLogInContainer'>
        <div className='logoContainer'><img src={MediumLogo} alt="MediumLogo" /></div>
        <div className='mainContainer'>
          <div><img src={FirstSign} alt="FirstSign" /></div>
          <div className='formContainer'>
            <LogInForm/>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpLogIn;
