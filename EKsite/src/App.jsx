import '../src/App.scss'
import SignUpLogIn from './pages/SignUpLogInPage/SignUpLogIn'
import HomePage from './pages/HomePage/Home'
import AboutPage from './pages/AboutPage/About'
import MembersPage from './pages/MembersPage/Members'
import ProjectsPage from './pages/ProjectsPage/Projects'
import ProjectInformationPage from './pages/ProjectsPage/ProjectInformation/ProjectInformationPage'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<SignUpLogIn />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projectInformation/:id" element={<ProjectInformationPage />} /> 
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
