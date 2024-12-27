import '../src/App.scss'
import SignUpLogIn from './pages/SignUpLogInPage/SignUpLogIn';
import HomePage from './pages/HomePage/Home'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route index element={<SignUpLogIn/>}/>
        <Route path='/home' element={<HomePage/>}/>
      </Routes>
     </BrowserRouter>
     
    </>
  )
}

export default App
