import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Button } from "./components/ui/button"
import {LoginPage,SignupPage } from "./Routes.jsx"

function App() {


  return (
   <>
    {/* <Button>Hello ShadeCN</Button> */}
   <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/Sign-up' element={<SignupPage/>} />
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
