import CdDesktop from "../assets/images/CDImageDesktop.png";
import CountDown from "./CountDown";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="footerContainer">
        <div className="birthdayClock">
          <CountDown/>
        </div>
        <img onClick={()=>{navigate("/")}}  src={CdDesktop} alt="CdDesktop" />
      </div>
    </>
  );
};

export default Footer;
