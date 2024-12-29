import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import HomeSign from "../../assets/images/HomeSign.png"
const Home = () => {
  return (
    <>
      <div className="HomeContainer ">
        <div className="mainContainer">
          <NavBar/>
          <div className="homeSign"><img src={HomeSign} alt="HomeSign" /></div>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default Home