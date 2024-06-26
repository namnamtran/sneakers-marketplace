import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Button } from "./components/ui/button"
import {LoginPage,SignupPage, ActivationPage } from "./Routes.jsx"

function App() {


  return (
   <>
    {/* <Button>Hello ShadeCN</Button> */}
   <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/sign-up' element={<SignupPage/>} />
      <Route path='/activation/:url' element={<ActivationPage/>} />
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
